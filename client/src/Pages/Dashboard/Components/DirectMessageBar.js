// import { useState } from "react";
// import { BsHash } from "react-icons/bs";
// import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

// const topics = ["tailwind-css", "react"];
// const questions = ["jit-compilation", "purge-files", "dark-mode"];
// const random = ["variants", "plugins"];

const ChannelBar = () => {
    return (
      <div className="channel-bar shadow-lg z-10 fixed w-72 top-0 left-2 -z-3">
        <TitleBlock />
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
  