import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampersThunk = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios("campers");
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperByIdThunk = createAsyncThunk(
  "campers/byId",
  async (props, thunkAPI) => {
    try {
      const { data } = await axios(`campers/${props}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
