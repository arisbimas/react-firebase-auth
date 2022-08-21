import React from "react";
import { UserAuth } from "../Contexts/AuthContext";

export default function Dashboard() {
  const { logout } = UserAuth();
  const hanldeLogout = async () => {
    console.log("logout");
    await logout();
  };
  return (
    <div style={{ background: "red" }}>
      <button onClick={() => hanldeLogout()}>Logout</button>
    </div>
  );
}
