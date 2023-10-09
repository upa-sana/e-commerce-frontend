import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../../../api/product.api";

const initialState = {
  storeProducts: [],
  pending: false,
  error: false,
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      return await fetchAllProducts();
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "product list",
  initialState,
  extraReducers(builder) {
    return builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.storeProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default productSlice.reducer;
