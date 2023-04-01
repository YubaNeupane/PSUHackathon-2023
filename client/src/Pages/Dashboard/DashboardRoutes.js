import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route, useLocation } from "react-router-dom";
import SetNewPasswordPage from "../SetNewPassword/SetNewPasswordPage";
import Dashboard from "./Dashboard";

export default function DashboardRoutes({ currentUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("user/password-reset")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <div className="flex">
      <Dashboard />
      <Routes>
        <Route
          path="/user/password-reset/:userId/:token"
          element={<SetNewPasswordPage />}
        />
      </Routes>
    </div>
  );
}
