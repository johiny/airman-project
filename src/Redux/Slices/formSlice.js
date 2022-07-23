import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addData(state, action) {
      if(state.length > 0) {
        state[0] = action.payload
      }
      state.push(action.payload);
    },
    removeData(state, action) {
      state.pop();
    },
  },
});

export const selectFormData = (state) => state.form;

export const { addData, removeData } = formSlice.actions;

export default formSlice.reducer;
