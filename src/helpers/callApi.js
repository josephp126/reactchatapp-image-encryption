import axios from "axios";
import BasicUrl from "../config/env";
// import { LOGOUT } from "../constants/routeNames";
// import { navigate } from "../navigations/SideMenu/RootNavigator";

let headers = {};

const callApi = axios.create({
  baseURL: BasicUrl,
  headers,
});

callApi.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
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
      // navigate(LOGOUT, { tokenExpired: true });
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
