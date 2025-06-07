import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  automatic: "",
  equipment: [],
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, { payload }) => {
      return payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { changeFilters } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;
