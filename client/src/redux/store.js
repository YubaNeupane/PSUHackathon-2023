import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import eventReducer from "./reducers/eventSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
  },
});
