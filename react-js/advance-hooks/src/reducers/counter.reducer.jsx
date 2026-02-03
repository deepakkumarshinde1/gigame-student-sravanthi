import { useReducer } from "react";

let initialState = {
  count1: 0,
  count2: 0,
  count3: 0,
};
// action => {type,payload?}
let reducer = (state, action) => {
  let { type } = action;
  switch (type) {
    case "INC-1":
      return { ...state, count1: state.count1 + 1 };
    case "INC-2":
      return { ...state, count2: state.count2 + 1 };
    case "INC-3":
      return { ...state, count3: state.count3 + 1 };
    default:
      return { ...state };
  }
};

export function useCounterReducer() {
  return useReducer(reducer, initialState);
}
