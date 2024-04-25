import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
const ProtectedRoutes = ({ children }) => {

  const { user } = useAuth()

  if (!user) {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: "error", 
      title: "Log in before selling a product"
    });
    return <Navigate to='/login' />
  }

  return children;

}

export default ProtectedRoutes