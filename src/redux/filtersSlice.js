import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  equipment: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  },
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, { payload }) => {
      state = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
