import axios from "axios";


function getTokenFromLocalStorage() {
  return localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getTokenFromLocalStorage()}`;
  return config;
});

export default axiosInstance;
