import React from "react";
import { Link } from "react-router-dom";

export default function CustomButton({ title, variants, link, className, id }) {
  if (variants === undefined) variants = 0;
  return (
    <Link to={link} className="w-full h-full">
      <button
        id={id}
        className={` mb-3 ${
          variants === 0 ? "bg-darkGreen" : "bg-orange"
        } text-white ${variants === 0 ? "text-white" : "text-black"}  ${
          variants === 0 ? "hover:text-black" : "hover:text-white"
        }  ${
          variants === 0 ? "hover:bg-orange" : "hover:bg-lightGreen"
        }  py-2 px-5 rounded-full text-xl hover:drop-shadow-lg h-full font-extrabold`}
      >
        {title}
      </button>
    </Link>
  );
}
