import TopNavigation from "../../Dashboard/Components/EventNavigation";
import { useSelector } from "react-redux";
import Popup from "../components/Popup";
import { useState } from "react";

const EventCard = () => {
  const events = useSelector((state) => Object.values(state.events.events));

  const [toggleModel, showModel] = useState(false);

  return (
    <div className="content-container w-full  left-[22.5rem] top-0">
      <TopNavigation />

      <div className="event-container">
        {events.map((item) => (
          <div
            className="event-card h-fit"
            onClick={() => console.log(item._id)}
          >
            <img
              className="w-full"
              src="https://1000logos.net/wp-content/uploads/2017/11/penn-state-logo.png"
              alt="psu logo"
            ></img>
            <div className="px-6 py-4">
              <div className="event-card-title">{item.name}</div>
              <p className="event-card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span class="event-card-tag">academic</span>
              <span className="event-card-tag">food</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => toggleModel(!showModel)}
        className="fixed bottom-5 right-5"
      >
        <Popup />
      </button>
    </div>
  );
};

export default EventCard;
