import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flags: 0,
};

export const serviceReducer = createSlice({
  name: "service",
  initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
// export const {  } = serviceReducer.actions;

export default serviceReducer.reducer;