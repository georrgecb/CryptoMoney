import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: 60,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

// Actions
export const { setSize } = navSlice.actions;

// Selectors
export const selectSize = (state) => state.nav.size;

export default navSlice.reducer;
