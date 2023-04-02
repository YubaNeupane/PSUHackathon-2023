import React, { useState, useEffect } from "react";
import image1 from "../../resources/images/signup/image1.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorFound } from "../../redux/reducers/userSlice";
import LoginSignupInput from "../../components/LoginSignupInput";
import LoginSignupButton from "../../components/LoginSignupButton";
import { signUp } from "../../redux/actions/userActions";

export default function Signup({ showOpenAppButton }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    showOpenAppButton(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSingup = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    };
    if (userName.length === 0) {
      dispatch(errorFound({ error: "Please enter username" }));
    } else if (password !== confirmPassword) {
      dispatch(errorFound({ error: "Password does not match" }));
    } else {
      dispatch(signUp(data));
    }
  };

  return (
    <div className="flex md:h-full w-full h-2/3 bg-lightGreen  justify-center items-center md:pt-0 pt-20">
      <div className="grid h-2/2 w-full  lg:grid-cols-2 p-8 rounded-xl">
        <div className="flex flex-col h-full w-full bg-darkGreen rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none items-center justify-center">
          <form>
            <h1 className="text-7xl text-darkYellow my-8 text-center">
              Register Account!
            </h1>

            <LoginSignupInput
              placeholder="First Name"
              type="text"
              margin="my-5"
              value={firstName}
              onChangeHandler={setFirstName}
            />
            <LoginSignupInput
              placeholder="Last Name"
              type="text"
              margin="my-5"
              value={lastName}
              onChangeHandler={setLastName}
            />

            <LoginSignupInput
              placeholder="Username"
              type="text"
              margin="my-5"
              value={userName}
              onChangeHandler={setUsername}
            />
            <LoginSignupInput
              placeholder="Email"
              type="text"
              margin="my-5"
              value={email}
              onChangeHandler={setEmail}
            />
            <LoginSignupInput
              placeholder="Password"
              type="password"
              margin="my-5"
              value={password}
              onChangeHandler={setPassword}
            />
            <LoginSignupInput
              placeholder="Confirm Password"
              type="password"
              margin="my-5"
              value={confirmPassword}
              onChangeHandler={setConfirmPassword}
            />

            <div className="flex justify-center my-5">
              <LoginSignupButton
                signin={false}
                isLoading={isLoading}
                buttonHandler={handleSingup}
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col h-full w-full bg-darkYellow rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none items-center justify-end">
          <h1 className="text-7xl text-darkGreen text-center">
            Already Got an Account?
          </h1>
          <h2 className="text-2xl text-darkGreen my-2">
            Come back in with just one click!
          </h2>
          <Link to="/signin">
            <div className="flex justify-center my-2">
              <button className="h-12 w-36 rounded-3xl p-3 bg-darkYellow text-white text-xl font-sans font-semibold py-0 border-4 border-darkGreen hover:bg-lightGreen">
                SIGN IN
              </button>
            </div>
          </Link>
          <img
            src={image1}
            alt="worker with pen and notebook"
            className="h-1/2 py-4"
          ></img>
        </div>
      </div>
    </div>
  );
}
