import axios from "axios";
import BasicUrl from "config/env";
import { navigate } from "routes/RootNavigator";

let headers = {};

const callApi = axios.create({
  baseURL: BasicUrl,
  headers,
});

callApi.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    console.log("TOKEN: ", token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

callApi.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      navigate('/logout', { tokenExpired: true });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default callApi;
