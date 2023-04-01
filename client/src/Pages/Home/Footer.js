import React from "react";

export default function Footer() {
  return (
    <div
      className="flex w-full flex-col h-auto bg-darkYellow drop-shadow-lg justify-center items-center gap-1 py-3"
      id="footer"
    >
      <div>
        <h3 className="text-black font-extrabold ">
          SWENG 480 - Senior Design - Team 3
        </h3>
      </div>
      <div>
        <h3 className="text-black font-extrabold ">
          Yuba Neupane, Luke Sloan, Abdulla Iznurov, Mateen Shaik
        </h3>
      </div>
    </div>
  );
}
