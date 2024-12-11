import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteEmail = ({ children }) => {
    const email = JSON.parse(localStorage.getItem("emailForgoten"));
    
    if (!email) {
        return <Navigate to="/ForgetPassword" />;
    }

    return children;
};
export default ProtectedRouteEmail;