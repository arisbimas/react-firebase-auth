import React from "react";
import { UserAuth } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedUser = ({ children }) => {
  const { user } = UserAuth();
  if (!user) return <Navigate to={"/login"} replace />;
  return children;
};
