import React from "react";
import CustomButton from "./../../components/CustomButton";

export default function Sections({ data, id }) {
  const { title, text, imageLeft, image, large } = data;
  if (large) {
    return (
      <div
        className=" flex flex-col gap-3 items-center justify-center w-full drop-shadow-md bg-darkGreen"
        id={"section-" + id}
      >
        <div className="px-2 py-2 md:w-1/2 w-full ">
          <div
            className={`${
              imageLeft ? "text-darkGreen" : "text-orange"
            } font-extrabold text-[30px] drop-shadow-2xl text-center`}
          >
            {title}
          </div>
          <div
            className={`text-[20px] text-center ${
              imageLeft ? "text-black" : "text-white"
            }`}
          >
            {text}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <img
            src={image}
            alt={image}
            id={"section-" + id + "-image"}
            className="md:w-full my-3 w-2/3 px-10 object-fill"
          />
          <div>
            <CustomButton
              variants={1}
              title="Get Started Now"
              link="/signin"
              id="get-started-button"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`drop-shadow-lg  ${
        imageLeft ? "bg-yellow" : "bg-darkGreen"
      } py-5 h-full`}
      id={"section-" + id}
    >
      <div
        className={`md:flex hidden flex-row justify-center items-center justify-items-center h-auto w-auto ${
          imageLeft ? "flex" : "flex-row-reverse"
        } ${large ? "flex-col" : "flex-row"} ${
          large ? "flex-col-reverse" : "flex-row"
        }`}
      >
        <div className="h-full sm:w-1/5  w-2/5">
          <img src={image} alt={image} className="w-full h-full object-fit " />
        </div>
        <div className="w-2/3 md:my-10 my-0 mx-10">
          <div
            className={`${
              imageLeft ? "text-darkGreen" : "text-orange"
            } font-extrabold lg:text-[35px] text-[35px] drop-shadow-2xl`}
          >
            {title}
          </div>
          <div
            className={`lg:text-[20px] sm-text-[15px] ${
              imageLeft ? "text-black" : "text-white"
            }`}
          >
            {text}
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-3 justify-center items-center w-full drop-shadow-md">
        <div className="w-full  items-center justify-center ">
          <img
            src={image}
            alt={image}
            className="w-full px-10 object-center "
            id={"section-" + id + "-image"}
          />
        </div>
        <div className="  px-2">
          <div
            className={`${
              imageLeft ? "text-darkGreen" : "text-orange"
            } font-extrabold text-[30px] drop-shadow-2xl text-center`}
          >
            {title}
          </div>
          <div
            className={`lg:text-[20px] sm-text-[15px] text-center ${
              imageLeft ? "text-black" : "text-white"
            }`}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
