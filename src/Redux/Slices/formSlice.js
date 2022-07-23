import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addData(state, action) {
      state = action.payload;
    },
    removeData(state, action) {
      state = initialState;
    },
  },
});

export const selectFormData = (state) => state.form;

export const { addData, removeData } = formSlice.actions;

export default formSlice.reducer;
