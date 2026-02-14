import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import ProductSlice from "./prduct.slice";

let store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    productSlice: ProductSlice.reducer,
  },
});

export default store;
