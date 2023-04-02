import axiosInstance from "../utils/AxiosConfig";

export const chat = ({ historyId, message }) =>
  axiosInstance.post("/chat", { historyId, message });

export const getHistory = () => axiosInstance.get("/chat/history");

export const getHistoryById = ({ historyId }) =>
  axiosInstance.post("/chat/history", { historyId });
