import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

function getTokenFromLocalStorage() {
  return localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getTokenFromLocalStorage()}`;
  return config;
});

export default axiosInstance;
