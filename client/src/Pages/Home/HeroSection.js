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
            Welcome To GroupHive
          </div>
          <div className="md:w-1/2 text-center sm:w-full lg:text-[20px] sm:text-[15px] px-5">
            Our Mental Health App is designed for students who may struggle with
            daily activities or feel lonely. With our AI therapist, chat server
            for socializing, and Find Events feature, you'll have the tools to
            support your mental wellbeing. Join our community for personalized
            conversations and discover nearby events to improve your mental
            health. Sign up now to start your journey towards a happier you.
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
