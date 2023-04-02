import React from "react";
import SideBarIcon from "./SideBarIcon";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AppLogo from "../../../resources/logo.png";

const Divider = () => <hr className="sidebar-hr" />;

export default function Sidebar({ setEventPressed }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("authToken");
    window.location.reload(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 h-screen bg-white dark:bg-darkGreen drop-shadow-lg w-18 m-0 flex flex-col z-30">
        <Link to="/directMessage">
          <SideBarIcon icon={AppLogo} />
        </Link>
        <Divider />
        <Link to="/Team 3/adda">
          <SideBarIcon icon={AppLogo} text={"Team 3"} />
        </Link>
        <SideBarIcon icon={AppLogo} />

        <div onClick={handleLogout}>
          <SideBarIcon icon={FiLogOut} text="Logout" />
        </div>

        <Link to="/events">
          <div className="fixed bottom-0 left-0">
            <SideBarIcon icon={AppLogo} text="Event" />
          </div>
        </Link>
      </div>
    </div>
  );
}
