import axiosInstance from "../utils/AxiosConfig";

export const getAllEvents = (data, para) => axiosInstance.get("/event");

