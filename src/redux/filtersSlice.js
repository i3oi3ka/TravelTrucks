import { createSlice } from "@reduxjs/toolkit";
import { PER_PAGE } from "../constants/constants";

const initialState = {
  page: 1,
  limit: PER_PAGE,
  location: "",
  form: "",
  AC: "",
  transmission: "",
  kitchen: "",
  TV: "",
  bathroom: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, { payload }) => {
      return { ...state, ...payload, page: 1 };
    },
    changePage: (state) => {
      return { ...state, page: state.page + 1 };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { changeFilters, changePage } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;
