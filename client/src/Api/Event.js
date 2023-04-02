import axiosInstance from "../utils/AxiosConfig";

export const getAllEvents = () => axiosInstance.get("/event");
