import React from "react";

export default function Footer() {
  return (
    <div
      className="flex w-full flex-col h-auto bg-darkYellow drop-shadow-lg justify-center items-center gap-1 py-3"
      id="footer"
    >
      <div>
        <h3 className="text-black font-extrabold ">Spring HackPSU 2023</h3>
      </div>
      <div>
        <h3 className="text-black font-extrabold ">
          Yuba Neupane, Mateen Shaik, Kevin Muirhead, Ghana Chuwan
        </h3>
      </div>
    </div>
  );
}
