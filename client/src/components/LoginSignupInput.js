import React from "react";

export default function LoginSignupInput({
  value,
  onChangeHandler,
  margin = "my-10",
  type,
  placeholder,
}) {
  return (
    <div className={`flex justify-center  ${margin}`}>
      <input
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        placeholder={placeholder}
        type={type}
        className=" w-3/4 rounded-3xl p-4 focus:outline-none focus:ring-4 focus:ring-lightGreen"
      ></input>
    </div>
  );
}
