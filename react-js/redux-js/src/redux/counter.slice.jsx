import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 100,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
    resetCount(state, action) {
      state.count = 0;
    },
  },
});

export default CounterSlice;

export const { increment, setCount, resetCount } = CounterSlice.actions;
