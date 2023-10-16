import { BASE_URL } from "@utils/env.parser";
import { readFromLocalStorage } from "@utils/local-storage.utils";
import axios from "axios";
const token = readFromLocalStorage("token");
const http = axios.create();
http.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    config.baseURL = BASE_URL;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
