import React from "react";
import OpenInBrowerButton from "./OpenInBrowerButton";

import image1 from "../../resources/images/home/image1.svg";
import image2 from "../../resources/images/home/image5.svg";

export default function HeroSection() {
  return (
    <div
      className="h-auto drop-shadow-lg bg-darkGreen overflow-x-clip"
      id="hero-section"
    >
      <div className="w-full h-full bg-hero-pattern bg-cover absolute  scale-100 transform-gpu top-0 -z-10" />
      <div className="pt-32 h-full">
        <div className="flex flex-col justify-center items-center text-white">
          <div className="py-0 lg:drop-shadow-2xl text-[40px] md:text-[75px] font-extrabold text-yellow text-center">
            WELCOME TO...
          </div>
          <div className="md:w-1/2 text-center sm:w-full lg:text-[20px] sm:text-[15px] px-5">
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="drop-shadow-md hidden lg:block">
            <img
              src={image1}
              alt="Image1"
              className="w-full h-full object-scale-down"
              id="hero-section-image1"
            />
          </div>
          <div className="text-center justify-center">
            <OpenInBrowerButton />
          </div>
          <div className="drop-shadow-md hidden lg:block">
            <img
              src={image2}
              alt="Image1"
              className="w-full h-full object-fill"
              id="hero-section-image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
