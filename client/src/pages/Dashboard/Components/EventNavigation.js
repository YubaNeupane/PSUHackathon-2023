import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../../../utils/useDarkMode";
import UserProfile from "../../Profile/UserProfile";
import { useState } from "react";
const EventNavigation = () => {
  const [showModel, toggleModel] = useState(false);
  return (
    <div className="top-navigation fixed top-0 right-0 w-[calc(100%_-_22.5rem)] -z-1">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const UserCircle = ({ toggleModel, showModel }) => (
  <UserProfile open={showModel} setOpen={toggleModel} />
);
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">Explore events around you!</h5>;

export default EventNavigation;
