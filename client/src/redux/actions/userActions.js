import * as API from "../../Api/User";
import * as dispatchEvents from "../reducers/userSlice";
import errorMessageHandler from "./../../utils/ErrorMessageHandler";

export const signIn = (inputData) => async (dispatch) => {
  try {
    dispatch(dispatchEvents.loading());

    const { data } = await API.signIn(inputData);
    dispatch(dispatchEvents.signIn({ ...data }));
  } catch (error) {
    const handledError = errorMessageHandler(error);
    dispatch(
      dispatchEvents.errorFound({
        error: handledError,
      })
    );
  }
};

export const signUp = (inputData) => async (dispatch) => {
  try {
    dispatch(dispatchEvents.loading());

    const { data } = await API.signUp(inputData);
    dispatch(dispatchEvents.signUp({ ...data }));
  } catch (error) {
    const handledError = errorMessageHandler(error);
    dispatch(
      dispatchEvents.errorFound({
        error: handledError,
      })
    );
  }
};

export const fetchCurrentUser = () => async (dispatch) => {
  try {
    dispatch(dispatchEvents.loading());

    const { data } = await API.getCurrentUser();
    dispatch(dispatchEvents.fetchCurrentUser({ ...data }));
  } catch (error) {
    dispatch(dispatchEvents.fetchCurrentUserFailed());
  }
};

export const sendResetEmail = (email) => async (dispatch) => {
  try {
    dispatch(dispatchEvents.loading());

    const { data } = await API.passwordResetLinkSender(email);
    dispatch(dispatchEvents.passwordResetLinkSent({ ...data }));
  } catch (error) {
    const handledError = errorMessageHandler(error);
    dispatch(dispatchEvents.errorFound({ error: handledError }));
  }
};

export const resetWithNewPassword = (input, params) => async (dispatch) => {
  try {
    dispatch(dispatchEvents.loading());
    const { data } = await API.resetPassword(input, params);
    dispatch(dispatchEvents.passwordResetSuccessfully({ ...data }));
  } catch (error) {
    const handledError = errorMessageHandler(error);
    dispatch(dispatchEvents.errorFound({ error: handledError }));
  }
};
