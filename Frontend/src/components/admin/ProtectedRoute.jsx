import React, { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null || user?.role !== "recruiter") {
      navigate("/");
    }
  }, []);
  return <div>{children}</div>;
};

export default ProtectedRoute;
