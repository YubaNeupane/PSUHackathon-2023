import React, { useState } from "react";
import ChannelBar from "./Components/ChannelBar";
import Sidebar from "./Components/Sidebar";
import ContentContainer from "./Components/ContentContainer";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DirectMessageBar from "./Components/DirectMessageBar";
import EventFilter from "../events/components/EventFilter";

//import Socketlist from "./Components/Socketlist";
// import useDarkMode from "../../utils/useDarkMode";

export default function Dashboard() {
  const [eventPressed, setEventPressed] = useState(false);

  const location = useLocation();

  console.log(location);

  return (
    <div className="flex ">
      <Sidebar onEventPressed={setEventPressed} />
      <Routes>
        <Route path="/directMessage" element={<DirectMessageBar />} />
        <Route path="/events" element={<EventFilter />} />
        <Route path="/:serverName/:id" element={<ChannelBar />} />
        <Route path="*" element={<DirectMessageBar />} />
      </Routes>
      {location.pathname !== "/events" ? <ContentContainer /> : <></>}
    </div>
  );
}
