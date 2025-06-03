import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersThunk } from "./campersOps";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const hanleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampersThunk.pending, handlePending)
      .addCase(fetchCampersThunk.rejected, hanleRejected),
});

export const campersReducer = campersSlice.reducer;

export const selectCampers = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
