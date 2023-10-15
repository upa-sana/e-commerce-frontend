import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const SIGNIN_URL = `${BASE_URL}/auth/login`;
export const signinUser = (requestBody) => {
  return axios.post(SIGNIN_URL, requestBody);
};

export const signupUser = (requestBody) => {
  return axios.post(`${BASE_URL}/auth/signup`, requestBody);
};
