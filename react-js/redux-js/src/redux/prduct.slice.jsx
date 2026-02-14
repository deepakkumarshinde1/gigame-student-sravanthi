import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./services/products.service";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
        state.products = [];
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default ProductSlice;
