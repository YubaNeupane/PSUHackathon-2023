import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  getChatByHistoryID,
  getChatHistory,
} from "../../../redux/actions/chatActions";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const ChannelBar = () => {
  const dispatch = useDispatch();

  const { historyId } = useParams();

  console.log(historyId);

  useEffect(() => {
    dispatch(getChatByHistoryID({ historyId }));
  }, [historyId]);

  const messageHistory = useSelector((state) => state.chat.history);

  console.log(messageHistory);

  useEffect(() => {
    dispatch(getChatHistory());
  }, []);

  return (
    <div className="channel-bar shadow-lg z-10 fixed w-72 top-0 left-2 -z-3">
      <div className="channel-block">
        <h5 className="channel-block-text">Chat History</h5>
      </div>
      <div role="searchbox"></div>
      <div className="channel-container gap-3">
        {messageHistory.map((message) => (
          <Link
            to={`/directMessage/${message._id}`}
            className="search flex w-full h-16"
          >
            <div className="search-input text-black dark:text-white">
              {moment(message.createdAt).fromNow()}
            </div>
            <HiX
              size="18"
              className="text-secondary my-auto hover:text-black cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

// const HistoryCard = () => (
//   <div className="max-w-sm p-6 bg-white border  shadow dark:bg-gray-800 dark:border-gray-700">
//     <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
//       <input
//         className="flex w-full hover:bg-darkGreen bg-darkYellow dark:bg-darkGreen py-2 px-5"
//         type="text"
//         disabled={true}
//       />
//       <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">3 day ago</p>
//     </div>
//   </div>
// );

export default ChannelBar;
/* /* 
    </** */
