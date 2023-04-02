import TopNavigation from "../../Dashboard/Components/EventNavigation";
import { useSelector } from "react-redux";
import Popup from "../components/Popup";
import { useState } from "react";

const EventCard = () => {
  const events = useSelector((state) => Object.values(state.events.events));

  const [toggleModel, showModel] = useState(false);

  console.log(events);

  return (
    <div className="content-container w-full  left-[22.5rem] top-0">
      <TopNavigation />

      <div className="event-container">
        {events.map((item) => (
          // <div
          //   className="event-card h-[71%]"
          //   onClick={() => console.log(item._id)}
          // >
          //   <img
          //     className="w-full object-cover "
          //     width={100}
          //     height={100}
          //     src="https://1000logos.net/wp-content/uploads/2017/11/penn-state-logo.png"
          //     alt="psu logo"
          //   ></img>
          //   <div className=" object-cover h-fit w-fit bg-red-500 pl-4 pr-4 justify-start">
          //     <div className="px-0">
          //       <div className="event-card-title">{item.name}</div>
          //       <p className=" event-card-text">
          //         {item.description}
          //       </p>
          //       <p className="event-card-text">Date: {item.date}</p>
          //       <p className="event-card-text">Time: {item.date}</p>

          //       <p className="event-card-text pb-0">
          //         {item.category?.map((cat) => (
          //           <span class="event-card-tag">{cat}</span>
          //         ))}
          //       </p>
          //     </div>
          //   </div>
          // </div>
          <div
            className="event-card h-[71%] flex flex-col"
            onClick={() => console.log(item._id)}
          >
            <img
              className="w-full object-cover"
              width={100}
              height={100}
              src="https://1000logos.net/wp-content/uploads/2017/11/penn-state-logo.png"
              alt="psu logo"
            ></img>
            <div className=" object-cover  pl-4 pr-4 justify-start flex-grow">
              <div className="px-0">
                <div className="event-card-title">{item.name}</div>
                <p className="event-card-text overflow-hidden whitespace max-w-[600px]">
                  {item.description}
                </p>
                <p className="event-card-text">Date: {item.date}</p>
                <p className="event-card-text">Time: {item.date}</p>
                <p className="event-card-text pb-0">
                  {item.category?.map((cat) => (
                    <span class="event-card-tag">{cat}</span>
                  ))}
                </p>
              </div>
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
