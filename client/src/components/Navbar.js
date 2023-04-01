import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";
import logo from "../resources/2.svg";

export default function Navbar({ showOpenAppButton }) {
  return (
    <div
      className="flex justify-between w-full items-center h-16 max-w-[1240px] mx-auto px-4 text-black z-20"
      id="navbar"
    >
      <div className="w-80 text-3xl h-full font-bold text-white ">
        <Link to="/" id="navbar-logo">
          <img
            src={logo}
            className="w-100 -mt-10 h-auto object-contain drop-shadow-2xl flexçç"
            alt="Logo"
          />
        </Link>
      </div>

      {showOpenAppButton ? (
        <ul className="flex w-full justify-end">
          <div className="text-center">
            <CustomButton title="Open App" link="/signin" id="openAppButton" />
          </div>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
