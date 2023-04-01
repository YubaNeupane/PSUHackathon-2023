import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import LoginSignupInput from "./../../components/LoginSignupInput";
import LoginSignupButton from "./../../components/LoginSignupButton";
import { errorFound } from "../../redux/reducers/userSlice";
import { resetWithNewPassword } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export default function SetNewPasswordPage({ showOpenAppButton }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  const { userId, token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(errorFound({ error: "Password does not match" }));
    } else {
      dispatch(
        resetWithNewPassword({ password, confirmPassword }, { userId, token })
      );
    }
  };

  useEffect(() => {
    if (showOpenAppButton !== undefined) {
      showOpenAppButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //const { userId, token } = useParams();

  return (
    <div className="flex h-full w-full bg-lightGreen justify-center items-center">
      <div className="grid h-full w-full mx-20 sm:m-80 py-80">
        <div className="flex flex-col py-10 px-10 md:px-20 md:mx-20 bg-darkGreen rounded-l-3xl rounded-r-3xl items-center justify-center">
          <form>
            <h1 className="text-5xl sm:text-6xl mx-20 text-darkYellow mb-10 text-center">
              Change Password
            </h1>
            <div className="flex flex-col justify-center items-center">
              <LoginSignupInput
                placeholder="Password"
                type="password"
                margin="my-4 w-full"
                onChangeHandler={setPassword}
                value={password}
              />

              <LoginSignupInput
                placeholder="Confirm password"
                type="password"
                margin="my-4 w-full"
                onChangeHandler={setConfirmPassword}
                value={confirmPassword}
              />

              <LoginSignupButton
                signin={false}
                buttonHandler={handleSetPassword}
                isLoading={isLoading}
                text={"Set New Password"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
