import { createSlice } from "@reduxjs/toolkit";
import { PER_PAGE } from "../constans/constans";

const initialState = {
  page: 1,
  limit: PER_PAGE,
  location: "",
  form: "",
  equipment: [],
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, { payload }) => {
      return payload;
    },
    changePage: (state, { payload }) => {
      return { ...state, page: payload };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { changeFilters, changePage } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;
