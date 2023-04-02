import React, { useEffect, useState } from "react";
import ChannelBar from "./Components/ChannelBar";
import Sidebar from "./Components/Sidebar";
import ContentContainer from "./Components/ContentContainer";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DirectMessageBar from "./Components/DirectMessageBar";
import EventFilter from "../events/components/EventFilter";
import EventCard from "../events/components/EventCard";
import {
  chatWithChatGPT,
  getChatHistory,
} from "../../redux/actions/chatActions";
import { useDispatch } from "react-redux";

//import Socketlist from "./Components/Socketlist";
// import useDarkMode from "../../utils/useDarkMode";

export default function Dashboard() {
  const [eventPressed, setEventPressed] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(getChatHistory());
  });

  const sendChatGptMessage = ({ historyId, message }) => {
    if (historyId === undefined) {
      historyId = null;
    }
    console.log({ historyId, message });
    dispatch(chatWithChatGPT({ historyId, message }));
  };

  return (
    <div className="flex ">
      <Sidebar onEventPressed={setEventPressed} />
      <Routes>
        <Route
          path="/directMessage/:historyId"
          element={<DirectMessageBar />}
        />
        <Route path="/events" element={<EventFilter />} />
        <Route path="/:serverName/:id" element={<ChannelBar />} />
        <Route path="*" element={<DirectMessageBar />} />
      </Routes>
      {location.pathname !== "/events" ? (
        <ContentContainer
          location={location}
          sendChatGptMessage={sendChatGptMessage}
        />
      ) : (
        <></>
      )}
      {location.pathname === "/events" ? <EventCard /> : <></>}
    </div>
  );
}
