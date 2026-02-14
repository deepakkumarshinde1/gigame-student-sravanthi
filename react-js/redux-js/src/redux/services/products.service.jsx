import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axios.config";

export const getProducts = createAsyncThunk(
  "ProductSlice/getProducts",
  async () => {
    try {
      let { data } = await Promise.allSettled([api.get("/products")]);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
