import React from "react";
import { UserAuth } from "../Contexts/AuthContext";

const wrap = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

const btn = {
  padding: "20px 25px",
  border: "1px solid #eaeaea",
  borderRadius: "10%",
  backgroundColor: "coral",
  cursor: "pointer",
};

export default function Dashboard() {
  const { logout } = UserAuth();
  const hanldeLogout = async () => {
    console.log("logout");
    await logout();
  };
  return (
    <div style={wrap}>
      <button style={btn} onClick={() => hanldeLogout()}>
        Logout
      </button>
    </div>
  );
}
