import * as API from "../../Api/ChatGpt";
import * as dispatchEvents from "../reducers/chatSlice";

export const getChatHistory = () => async (dispatch) => {
  try {
    const { data } = await API.getHistory();
    dispatch(dispatchEvents.getHistory({ ...data }));
  } catch (error) {
    console.log(error);
  }
};

export const chatWithChatGPT =
  ({ historyId, message }) =>
  async (dispatch) => {
    try {
      const { data } = await API.chat({ historyId, message });
      dispatch(dispatchEvents.chat({ ...data }));
    } catch (error) {
      console.log(error);
    }
  };

export const getChatByHistoryID =
  ({ historyId }) =>
  async (dispatch) => {
    try {
      const { data } = await API.getHistoryById({ historyId });
      console.log(data);
      dispatch(dispatchEvents.chatById({ ...data }));
    } catch (error) {
      console.log(error);
    }
  };
