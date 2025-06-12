import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersThunk, fetchCampersThunkNextPage } from "./campersOps";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.items = [];
  state.total = 0;
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearCampers(state) {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, { payload }) => {
        state.items = payload.items;
        state.total = payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampersThunk.pending, handlePending)
      .addCase(fetchCampersThunk.rejected, handleRejected)
      .addCase(fetchCampersThunkNextPage.fulfilled, (state, { payload }) => {
        state.items.push(...payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampersThunkNextPage.pending, handlePending)
      .addCase(fetchCampersThunkNextPage.rejected, handleRejected),
});

export const { clearCampers } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

export const selectCampers = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectTotalCampers = (state) => state.campers.total;
