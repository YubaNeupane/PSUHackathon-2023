// import { useState } from "react";
// import { BsHash } from "react-icons/bs";
// import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

// const topics = ["tailwind-css", "react"];
// const questions = ["jit-compilation", "purge-files", "dark-mode"];
// const random = ["variants", "plugins"];

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg z-10  w-72 top-0 left-2 -z-3">
      <div className="fixed top-0 w-72 backdrop-blur-3xl bg-white/30">
        <TitleBlock />
      </div>
      <div className="mt-16 bg-black ">
        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />

        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />

        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />
        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />
        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />
        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />
        <img
          src={
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTgxOTYzZDI0OWNjODFmNjQ4YWViMzkzNmE5NjEwMTljODIxOThiZCZjdD1n/MT5UUV1d4CXE2A37Dg/giphy.gif"
          }
          alt="gif"
        />
      </div>

      {/* <div className="flex w-full "></div> */}

      {/* <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} />
      </div> */}
    </div>
  );
};

const TitleBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Direct Message</h5>
  </div>
);

export default ChannelBar;
