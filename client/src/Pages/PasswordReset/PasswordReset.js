import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginSignupInput from "../../components/LoginSignupInput";
import LoginSignupButton from "../../components/LoginSignupButton";
import { useSelector, useDispatch } from "react-redux";
import { sendResetEmail } from "../../redux/actions/userActions";
import { errorFound } from "../../redux/reducers/userSlice";
import image1 from "../../resources/images/passwordReset/image1.svg";

export default function PasswordReset({ showOpenAppButton }) {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  const handlePasswordResetEmailSend = (e) => {
    e.preventDefault();
    if (email.length !== 0) {
      dispatch(sendResetEmail({ email: email }));
    } else {
      dispatch(errorFound({ error: "Please enter your email address" }));
    }
  };

  useEffect(() => {
    showOpenAppButton(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen w-screen bg-lightGreen justify-center items-center">
      <div className="bg-lightGreen">
        <img
          src={image1}
          alt="worker with phone"
          className=" invisible lg:visible absolute bottom-0"
        ></img>
      </div>

      <div className="grid h-full w-full mx-20 sm:m-80 py-80">
        <div className="flex flex-col py-10 px-10 md:px-20 md:mx-20 bg-darkGreen rounded-l-3xl rounded-r-3xl items-center justify-center z-2">
          <form>
            <h1 className="text-4xl sm:text-6xl mx-20 text-darkYellow mb-10 text-center z-2">
              Forgot Password
            </h1>
            <div className="flex flex-col justify-center items-center z-10">
              <LoginSignupInput
                placeholder="Email"
                type="email"
                margin="my-0 w-full"
                onChangeHandler={setEmail}
                value={email}
              />

              <LoginSignupButton
                text="Send Reset Password Email"
                signin={false}
                buttonHandler={handlePasswordResetEmailSend}
                isLoading={isLoading}
              />
            </div>

            <Link to="/signin">
              <div className="flex justify-center mt-0">
                <button className="h-12 w-9/12 rounded-3xl bg-darkGreen text-white text-xl font-sans font-semibold my-4 mb-16 hover:bg-lightGreen border-4 border-darkYellow">
                  GO BACK
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
