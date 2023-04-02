import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import eventReducer from "./reducers/eventSlice";
import chatReducer from "./reducers/chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
    chat: chatReducer,
  },
});
