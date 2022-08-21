import React from "react";
import logo from "../logo.svg";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Contexts/AuthContext";
import { async } from "@firebase/util";
import { Navigate } from "react-router-dom";

const wrap = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

export const Login = () => {
  const { googleSignIn, user } = UserAuth();

  if (user) return <Navigate to={"/dashboard"} />;

  const handleLogin = async () => {
    await googleSignIn().then((res) => {
      //disini bisa lanjut fetch api kita sendiri
    });
  };
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div style={wrap}>
        <GoogleButton onClick={() => handleLogin()} />
      </div>
    </div>
  );
};
