const Spinner = ({ large = false }) => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-white drop-shadow-lg rounded-full";

  if (large) {
    circleCommonClasses = "h-9 w-9 bg-yellow drop-shadow-lg rounded-full";
  }

  return (
    <div className="flex">
      <div
        className={`${circleCommonClasses} mr-1 animate-bounce w-3 h-3`}
      ></div>
      <div
        className={`${circleCommonClasses} mr-1 animate-bounce200 w-3 h-3`}
      ></div>
      <div className={`${circleCommonClasses} animate-bounce400 w-3 h-3`}></div>
    </div>
  );
};

export default Spinner;
