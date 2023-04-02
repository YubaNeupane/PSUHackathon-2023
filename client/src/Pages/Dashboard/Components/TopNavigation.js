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
const TopNavigation = () => {
  const [showModel, toggleModel] = useState(false);

  console.log({ showModel });

  return (
    <div className="top-navigation fixed top-0 right-0 w-[calc(100%_-_22.5rem)] -z-1">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <UserCircle showModel={showModel} toggleModel={toggleModel} />
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
const Title = () => (
  <h5 className="title-text">Enter your thoughts and feelings</h5>
);

export default TopNavigation;
