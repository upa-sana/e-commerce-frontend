import { BASE_URL } from "@utils/env.parser";
import axios from "axios";
export const signinUser = (requestBody) => {
  return axios.post(`${BASE_URL}/auth/login`, requestBody);
};

export const signupUser = (requestBody) => {
  return axios.post(`${BASE_URL}/auth/signup`, requestBody);
};
