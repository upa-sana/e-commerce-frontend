import http from "@utils/http.interceptor";

export const getCategories = () => {
  // return axios.get(GET_CATEGORIES_URL);
  return http.get("/category");
};

export const postCategory = (category) => {
  return http.post("/category", category, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const putCategory = (categoryId, category) => {
  return http.put(`/category/${categoryId}`, category, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCategory = (categoryId) => {
  return http.delete(`/category/${categoryId}`);
};
