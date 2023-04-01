import React from "react";
import Spinner from "./Spinner";

export default function LoginSignupButton({
  isLoading,
  buttonHandler,
  signin = true,
  text = "Sign In",
}) {
  return (
    <button
      disabled={isLoading}
      onClick={buttonHandler}
      className={`h-12 w-3/4 rounded-3xl drop-shadow-lg p-3 ${
        signin ? "bg-darkGreen" : "bg-orange"
      }  text-white text-xl font-sans font-semibold py-2 my-7 ${
        signin ? "hover:bg-lightGreen" : "hover:bg-yellow"
      } `}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
}
