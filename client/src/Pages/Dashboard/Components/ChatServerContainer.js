import TopNavigation from "./TopNavigation";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import moment from "moment";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";
import therapist from "../../../resources/images/home/Therapist.svg";

return (
  <div className="content-container   left-[22.5rem] top-0">
    <TopNavigation />
    <div className="content-list mt-16 ">
      <Post
        name="Ada"
        timestamp="one week ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.`}
      />
      <Post
        name="Ada"
        timestamp="one week ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.`}
      />
      <Post
        name="Ada"
        timestamp="one week ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.`}
      />
      <Post
        name="Ada"
        timestamp="one week ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.`}
      />
      <Post name="Leon" timestamp="one week ago" text={`Lorem ipsum dolor. `} />
      <Post name="Jill" timestamp="5 days ago" text={`Lorem.`} />
      <Post
        name="Ellie"
        timestamp="4 days ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
      />
      <Post
        name="Chris"
        timestamp="4 days ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.`}
      />
      <Post
        name="Claire"
        timestamp="2 days ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
      />
      <Post
        name="Albert"
        timestamp="22 hours ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
      />
      <Post
        name="Rebecca"
        timestamp="3 hours ago"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit.`}
      />
      <Post
        name="H.U.N.K"
        timestamp="Just now"
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.`}
      />
    </div>
    <BottomBar handleSendMessage={handleSendMessage} />
  </div>
);
