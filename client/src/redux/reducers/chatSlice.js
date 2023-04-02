import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  chats: [],
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
    },
    chatById: (state, action) => {
      state.chats = Object.values(action.payload);
    },
  },
});

export const { getHistory, chat, chatById } = chatSlice.actions;

export default chatSlice.reducer;
