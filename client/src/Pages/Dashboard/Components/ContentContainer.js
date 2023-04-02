import TopNavigation from "./TopNavigation";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import moment from "moment";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";
import therapist from "../../../resources/images/home/Therapist.svg";

const ContentContainer = ({ location, sendMe, sendChatGptMessage }) => {
  const handleSendMessage = (message) => {
    if (message.length === 0) return;

    const loc = location.pathname.split("/");

    if (loc[loc.length - 1] === "directMessage") {
      sendChatGptMessage({ historyId: null, message: message });
    } else if (loc[loc.length - 2] === "directMessage") {
      sendChatGptMessage({ historyId: loc[loc.length - 1], message: message });
    }
  };

  const chats = useSelector((state) => Object.values(state.chat.chats));
  const isMessaging = useSelector((state) => state.chat.isMessaging);

  return (
    <div className="content-container   left-[22.5rem] top-0">
      <TopNavigation />
      <div className="content-list mt-16 ">
        {
          <Post
            name="ChatGPT"
            timestamp=""
            text={`Hello! I am able to give you any events in the area. If you are feeling down just talk. Do you need help with something? I can help you. I am here to help, type something that is in your mind...`}
            className="w-full"
          />
        }

        {chats.map((chat, i) => (
          <Post
            name={chat.role === "assistant" ? "ChatGPT" : "Me"}
            key={i}
            timestamp={moment(chat.createdAt).fromNow()}
            text={chat.content}
          />
        ))}

        {isMessaging ? (
          <div className={"post"}>
            <div className="post-content">
              <p className="post-owner">
                <Spinner />
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* <Post
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
        <Post
          name="Leon"
          timestamp="one week ago"
          text={`Lorem ipsum dolor. `}
        />
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
        /> */}
      </div>
      <BottomBar handleSendMessage={handleSendMessage} />
    </div>
  );
};

const BottomBar = ({ handleSendMessage }) => {
  const [message, setMessage] = useState("");
  return (
    <div className="bottom-bar">
      <input
        type="text"
        placeholder="Enter message..."
        className="bottom-bar-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(message);
            setMessage("");
          }
        }}
      />
      <SendIcon />
    </div>
  );
};
const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        {name !== "ChatGPT" ? (
          <img
            name="Me"
            src={`https://avatars.dicebear.com/api/open-peeps/${111}.svg`}
            alt=""
            className="avatar"
          />
        ) : (
          <img name="Me" src={therapist} alt="" className="avatar" />
        )}
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

const SendIcon = () => (
  <FiSend
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
  />
);

export default ContentContainer;
