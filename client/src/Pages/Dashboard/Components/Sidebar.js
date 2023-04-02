import React, { useEffect } from "react";
import SideBarIcon from "./SideBarIcon";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import therapist from "../../../resources/images/home/Therapist.svg";
import eventlogo from "../../../resources/images/home/EventIcon.svg";
import logoutlogo from "../../../resources/images/home/LogoutLogo.svg";
import chatServer from "../../../resources/images/home/ChatServerIcon.svg";

import AppLogo from "../../../resources/logo.png";
import { getAllEvents } from "../../../redux/actions/eventActions";

const Divider = () => <hr className="sidebar-hr" />;

export default function Sidebar({ setEventPressed }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("authToken");
    window.location.reload(false);
  };

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen bg-white dark:bg-darkGreen drop-shadow-lg w-18 m-0 flex flex-col z-30">
      <Link to="/directMessage">
        <SideBarIcon icon={therapist} text={"AI Therapist"} />
      </Link>
      <Divider />
      <Link to="/Chat Server/sdfsa">
        <SideBarIcon icon={chatServer} text={"Chat Server"} />
      </Link>
      <Link to="/events">
        <div>
          <SideBarIcon icon={eventlogo} text="Find Events" />
        </div>
      </Link>
      <div className="fixed bottom-0 left-0" onClick={handleLogout}>
        <SideBarIcon icon={logoutlogo} text="Logout" />
      </div>
    </div>
  );
}
