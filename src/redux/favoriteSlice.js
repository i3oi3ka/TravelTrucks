import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favorite",
  storage,
};
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

export const persistedFavoriteReducer = persistReducer(
  persistConfig,
  favoriteReducer
);

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export const selectFavoriteList = (state) => state.favorite.favoriteCampersList;
