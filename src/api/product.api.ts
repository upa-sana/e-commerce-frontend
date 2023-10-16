import { BASE_URL } from "@utils/env.parser";
import { readFromLocalStorage } from "@utils/local-storage.utils";
import axios from "axios";

const token = readFromLocalStorage("token");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
});

export const fetchAllProducts = (params) => {
  return axios.get(`${BASE_URL}/products`, { params });
};

export const fetchProducts = (categoryName, params) => {
  return axios.get(`${BASE_URL}/products/category/${categoryName}`, { params });
};

export const fetchProductsDetail = (productId) => {
  return axios.get(`${BASE_URL}/products/${productId}`);
};

export const postProduct = (data) => {
  return axios.post(`${BASE_URL}/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "multipart/form-data",
    },
  });
};

export const putProduct = (productId, data) => {
  return axios.put(`${BASE_URL}/products/${productId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = (productId) => {
  return axiosInstance.delete(`products/${productId}`);
};
