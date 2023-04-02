import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../redux/actions/userActions";
import notify from "../utils/Toast";
import Spinner from "./Spinner";
import SetNewPasswordPage from "../pages/SetNewPassword/SetNewPasswordPage.js";

export default function UnauthenticatedRoutes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showOpenAppButton, setShowOpenAppButton] = useState(true);

  useEffect(() => {
    dispatch(fetchCurrentUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user.error) {
      notify(user.error.error);
    }
  }, [user.error]);

  if (user.initalLoading) {
    return (
      <div className="flex flex-col w-screen h-screen bg-darkGreen justify-center items-center gap-4 ">
        <Spinner large={true} />
        <h1 className="font-bold text-white animate-pulse text-[30px]">
          LOADING . . .
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="absolute w-screen  my-2 z-40 ">
        <Navbar showOpenAppButton={showOpenAppButton} />
      </div>

      <div className="sm:h-screen h-full ">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home showOpenAppButton={setShowOpenAppButton} />}
          />
          <Route
            exact
            path="/signin"
            element={<Signin showOpenAppButton={setShowOpenAppButton} />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup showOpenAppButton={setShowOpenAppButton} />}
          />
          <Route
            exact
            path="/reset"
            element={<PasswordReset showOpenAppButton={setShowOpenAppButton} />}
          />
          <Route
            exact
            path="/user/password-reset/:userId/:token"
            element={<SetNewPasswordPage />}
          />
        </Routes>
      </div>
    </div>
  );
}
