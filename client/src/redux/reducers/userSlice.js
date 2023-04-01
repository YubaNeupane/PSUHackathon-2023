import { createSlice } from "@reduxjs/toolkit";
import notify from "../../utils/Toast";

const initialState = {
  isLoading: false,
  error: null,
  user: {},
  initalLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    signIn: (state, action) => {
      const token = action.payload.token;
      localStorage.setItem("authToken", JSON.stringify(token));

      state.error = null;
      state.isLoading = false;
      state.user = action.payload.result;
    },
    signUp: (state, action) => {
      const token = action.payload.token;
      localStorage.setItem("authToken", JSON.stringify(token));

      state.error = null;
      state.isLoading = false;
      state.user = action.payload.result;
    },
    fetchCurrentUser: (state, action) => {
      state.isLoading = false;

      state.user = action.payload;
      state.initalLoading = false;
    },
    fetchCurrentUserFailed: (state) => {
      state.isLoading = false;
      state.initalLoading = false;
    },
    errorFound: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    passwordResetLinkSent: (state, action) => {
      state.isLoading = false;
      notify("Email send!", "✅");
    },
    passwordResetSuccessfully: (state) => {
      state.isLoading = false;
      notify("Password Reset Successfully", "✅");
    },
  },
});

export const {
  loading,
  signIn,
  signUp,
  fetchCurrentUser,
  errorFound,
  fetchCurrentUserFailed,
  passwordResetLinkSent,
  passwordResetSuccessfully,
} = userSlice.actions;

export default userSlice.reducer;
