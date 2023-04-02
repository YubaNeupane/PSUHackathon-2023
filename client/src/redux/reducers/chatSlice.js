import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  chats: [],
  isMessaging: false,
};

export const chatSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getHistory: (state, action) => {
      state.history = Object.values(action.payload);
    },
    chat: (state, action) => {
      state.chats.push(action.payload);
      state.isMessaging = false;
    },
    startChat: (state, action) => {
      state.isMessaging = true;
      state.chats.push({
        role: "user",
        content: action.payload.message,
        createdAt: new Date(),
      });
    },
    chatById: (state, action) => {
      state.chats = Object.values(action.payload);
    },
  },
});

export const { getHistory, chat, chatById, startChat } = chatSlice.actions;

export default chatSlice.reducer;
