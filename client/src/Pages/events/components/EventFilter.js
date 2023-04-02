import { useState, useEffect } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { FaSearch } from "react-icons/fa";
import CheckBoxGroup from "./CheckBoxGroup";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const EventFilter = () => {
  return (
    <div className="channel-bar shadow-lg z-10 fixed w-72 top-0 left-2 -z-3">
      <ChannelBlock serverName={"Events"} />
      <div role="searchbox"></div>
      <div className="channel-container">
        <div className="search flex w-full">
          <input className="search-input" type="text" placeholder="Search..." />
          <FaSearch size="18" className="text-secondary my-auto" />
        </div>
        <div className="categoryBox flex w-full">
          <div className="channel-block">
            <h5 className="channel-block-cat-text">Category</h5>
          </div>
        </div>
        <div className="category flex w-full px-5 -mt-4 dark:text-white  rounded-lg pb-2  bg-gray-400 dark:bg-gray-600 text-black">
          <CheckBoxGroup
            selectedValues={[]}
            remove={"true"}
            options={[
              { value: 0, label: "Academics" },
              { value: 1, label: "Athletics" },
              { value: 2, label: "Cultural" },
              { value: 3, label: "Entertainment" },
              { value: 4, label: "Food" },
            ]}
          />
        </div>
        <div className="eventTypeBox flex w-full">
          <div className="channel-block">
            <h5 className="channel-block-cat-text">Event Type</h5>
          </div>
        </div>
        <div className="eventType flex w-full px-5 -mt-4 dark:text-white  rounded-lg pb-2  bg-gray-400 dark:bg-gray-600 text-black">
          <CheckBoxGroup
            selectedValues={[]}
            remove={"true"}
            options={[
              { value: 0, label: "Online" },
              { value: 1, label: "In-Person" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded ? "dropdown-header-text-selected" : "dropdown-header-text"
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent text-opacity-80 my-auto ml-auto"
        />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = "text-accent text-opacity-80 my-auto mr-1";
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className="dropdown-selection">
    <BsHash size="24" className="text-gray-400" />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);

const ChannelBlock = ({ serverName }) => (
  <div className="channel-block">
    <h5 className="channel-block-text">{serverName}</h5>
  </div>
);

export default EventFilter;
