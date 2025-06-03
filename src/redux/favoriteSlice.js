import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteCampersList: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCampersList.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favoriteCampersList = state.favoriteCampersList.filter(
        (camper) => camper !== payload
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
