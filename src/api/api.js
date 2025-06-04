import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCamperById = async (id) => {
  const { data } = await axios(`campers/${id}`);
  return data;
};
