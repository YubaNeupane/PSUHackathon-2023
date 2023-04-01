import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useSelector } from "react-redux";

import "./index.css";
import UnauthenticatedRoutes from "./components/UnauthenticatedRoutes";
import DashboardRoutes from "./pages/Dashboard/DashboardRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>

      <Router>
        {user?.name === undefined ? (
          <UnauthenticatedRoutes />
        ) : (
          <DashboardRoutes currentUser={user} />
        )}
      </Router>
    </div>
  );
}

export default App;
