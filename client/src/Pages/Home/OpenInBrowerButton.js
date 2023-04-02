import React from "react";
import { Link } from "react-router-dom";

export default function OpenInBrowerButton() {
  return (
    <Link to={"/signin"} className="items-center">
      <button className="bg-white hover:text-white hover:bg-orange text-black lg:text-[20px] font-bold py-5 px-10 my-10 rounded-full justify-center">
        Open in your Browser
      </button>
    </Link>
  );
}
