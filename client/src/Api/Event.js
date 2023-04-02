import axiosInstance from "../utils/AxiosConfig";

export const getAllEvents = () => axiosInstance.get("/event");
export const createEvent = ({
  name,
  time,
  description,
  location,
  poster,
  category,
  type,
}) =>
  axiosInstance.post("/event", {
    name,
    time,
    description,
    location,
    poster,
    category,
    type,
  });
