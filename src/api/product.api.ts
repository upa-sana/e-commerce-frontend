import axios from "axios";
import { readFromLocalStorage } from "../utils/local-storage.utils";
// GET api/products/category/:categoryName
const url = "http://localhost:8080/api" || import.meta.env.VITE_TEST_URL;
const token = readFromLocalStorage("token");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: url,
  headers: headers,
});

export const fetchAllProducts = (params) => {
  return axios.get(`${url}/products`, { params });
};

export const fetchProducts = (categoryName, params) => {
  return axios.get(`${url}/products/category/${categoryName}`, { params });
};

export const fetchProductsDetail = (productId) => {
  return axios.get(`${url}/products/${productId}`);
};

export const postProduct = (data) => {
  return axios.post(`${url}/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "multipart/form-data",
    },
  });
};

export const putProduct = (productId, data) => {
  return axios.put(`${url}/products/${productId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = (productId) => {
  return axiosInstance.delete(`products/${productId}`);
};
