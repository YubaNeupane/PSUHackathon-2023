import * as API from "../../Api/Event";
import * as dispatchEvents from "../reducers/eventSlice";

export const getAllEvents = () => async (dispatch) => {
  try {
    const { data } = await API.getAllEvents();

    dispatch(dispatchEvents.setEvents({ ...data }));
  } catch (error) {
    console.log(error);
  }
};
