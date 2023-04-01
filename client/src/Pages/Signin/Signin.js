import React, { useState, useEffect } from "react";
import image1 from "../../resources/images/signin/image1.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/userActions";
import { errorFound } from "../../redux/reducers/userSlice";
import { useSelector } from "react-redux";
import LoginSignupButton from "../../components/LoginSignupButton";
import LoginSignupInput from "../../components/LoginSignupInput";

export default function Sigin({ showOpenAppButton }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    showOpenAppButton(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      dispatch(errorFound({ error: "Please enter your email or username" }));
    } else {
      dispatch(
        signIn({
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <div className="flex h-auto w-full md:h-full bg-lightGreen justify-center items-center md:pt-0 pt-20">
      <div className="grid h-2/2 w-full  lg:grid-cols-2 p-8 rounded-xl">
        <div className="flex flex-col h-full w-full bg-darkYellow sm:rounded-t-3xl  lg:rounded-l-3xl lg:rounded-r-none items-center justify-center rounded-lg">
          <form>
            <h1 className="text-7xl text-darkGreen mb-24 text-center mt-10 bold">
              Welcome back!
            </h1>
            <LoginSignupInput
              value={email}
              onChangeHandler={setEmail}
              placeholder="Email"
              type="email"
            />
            <LoginSignupInput
              value={password}
              onChangeHandler={setPassword}
              placeholder="Password"
              type="password"
            />
            <div className="flex justify-center mt-10">
              <LoginSignupButton
                isLoading={isLoading}
                buttonHandler={handleLogin}
              />
            </div>
            <Link to="/reset">
              <h2 className="text-xl text-darkGreen text-center hover:text-lightGreen mb-2">
                Forgot your password?
              </h2>
            </Link>
          </form>
        </div>
        <div className="flex flex-col h-full w-full bg-darkGreen sm:rounded-b-3xl gap-3 lg:rounded-r-3xl lg:rounded-l-none items-center justify-end rounded-b-2xl">
          <h1 className="text-7xl text-white  text-center  mt-3">
            Don't have an account?
          </h1>
          <h1 className="text-2xl text-white my-2">
            Start your journey in one click
          </h1>
          <Link to="/signup">
            <div className="flex justify-center ">
              <button className="h-12 w-36 rounded-3xl p-3 bg-darkGreen text-white text-xl font-sans font-semibold py-0 border-4 border-darkYellow hover:bg-yellow">
                SIGN UP
              </button>
            </div>
          </Link>
          <img
            src={image1}
            alt="worker with pen and notebook"
            className="object-scale-down"
          />
        </div>
      </div>
    </div>
  );
}
