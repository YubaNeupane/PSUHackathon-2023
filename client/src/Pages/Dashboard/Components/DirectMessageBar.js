const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg z-10 fixed w-72 top-0 left-2 -z-3">
      <div className=" flex w-full">
        {/* <input
          className="search-input  hover:bg-darkGreen bg-darkYellow dark:bg-darkGreen py-2 px-5"
          placeholder="+ NewChat"
          disabled={true}
        /> */}
      </div>

      {/* <HistoryCard /> */}
      <input
        type="text"
        className="flex-auto w-full cursor-pointer bg-white-500  hover:bg-darkGreen bg-darkYellow dark:bg-darkGreen py-2 px-4"
        disabled={true}
      />
    </div>
  );
};

const HistoryCard = () => (
  <div className="max-w-sm p-6 bg-white border  shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
      <input
        className="flex w-full hover:bg-darkGreen bg-darkYellow dark:bg-darkGreen py-2 px-5"
        type="text"
        disabled={true}
      />
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">3 day ago</p>
    </div>
  </div>
);

export default ChannelBar;
