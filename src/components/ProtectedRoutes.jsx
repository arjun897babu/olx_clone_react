import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toastMessage } from "../utils/toastMessage";
const ProtectedRoutes = ({ children }) => {

  const { user } = useAuth()

  if (!user) {
    toastMessage('error','Log in to access the services..')
    return <Navigate to='/' />
  }

  return children;

}

export default ProtectedRoutes