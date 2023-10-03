import axios from "axios";
import { readFromLocalStorage } from "./local-storage.utils";
const url = "http://localhost:8080/api";
const token = readFromLocalStorage("token");
const http = axios.create();
http.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    config.baseURL = url;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
