import React from "react";
import ChannelBar from "./Components/ChannelBar";
import Sidebar from "./Components/Sidebar";
import ContentContainer from "./Components/ContentContainer";
import { Routes, Route } from "react-router-dom";
import DirectMessageBar from "./Components/DirectMessageBar";

//import Socketlist from "./Components/Socketlist";
// import useDarkMode from "../../utils/useDarkMode";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/directMessage" element={<DirectMessageBar />} />
        <Route path="/:serverName/:id" element={<ChannelBar />} />
        <Route path="*" element={<DirectMessageBar />} />
      </Routes>

      <ContentContainer />
    </div>
  );
}
