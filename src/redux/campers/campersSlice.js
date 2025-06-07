import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampersThunk } from "./campersOps";
import { selectFilters } from "../filtersSlice";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
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
      .addCase(fetchCampersThunk.rejected, handleRejected),
});

export const campersReducer = campersSlice.reducer;

export const selectCampers = (state) => state.campers.items;

export const selectFilteredCampers = createSelector(
  [selectFilters, selectCampers],
  ({ location, type, transmission, equipment }, campers) => {
    let filteredCampers = campers;

    if (location) {
      filteredCampers = filteredCampers.filter((camper) =>
        camper.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (type) {
      filteredCampers = filteredCampers.filter(
        (camper) => camper.form === type
      );
    }
    if (equipment) {
      filteredCampers = filteredCampers.filter((camper) =>
        equipment.every((equip) =>
          equip !== "automatic"
            ? camper[equip]
            : camper.transmission === "automatic"
        )
      );
    }

    console.log(filteredCampers);

    return filteredCampers;
  }
);

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
