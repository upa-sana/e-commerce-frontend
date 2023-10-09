import { createSlice } from "@reduxjs/toolkit";
const initialState = { title: "Products" };
const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { changeTitle } = titleSlice.actions;
export default titleSlice.reducer;
