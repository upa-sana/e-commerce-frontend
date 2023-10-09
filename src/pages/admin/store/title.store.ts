import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product.slice";
import titleSlice from "./title.slice";
export const titleStore = configureStore({
  reducer: {
    productPageTitle: titleSlice,
    productsFromStore: productSlice,
  },
});
