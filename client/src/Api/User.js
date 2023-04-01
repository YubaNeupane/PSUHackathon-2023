import axiosInstance from "../utils/AxiosConfig";

export const signIn = (data) => axiosInstance.post("/user/signin", data);

export const signUp = (data) => axiosInstance.post("/user/signup", data);

export const passwordResetLinkSender = (data) =>
  axiosInstance.post("/user/password-reset", data);

export const resetPassword = (data, params) =>
  axiosInstance.post(
    `/user/password-reset/${params.userId}/${params.token}`,
    data
  );

export const getCurrentUser = (data) => axiosInstance.get("/user");
export const getUser = (data, userID) => axiosInstance.get(`/user/${userID}`);
