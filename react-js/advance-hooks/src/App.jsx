import { useCallback, useMemo, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCounterReducer } from "./reducers/counter.reducer";
import Text from "./Text";

function App() {
  let [state, dispatch] = useCounterReducer();

  let text = useMemo(() => {
    return state.count1 % 5 === 0 ? "Yes" : "No";
  }, [state.count1]);

  let inc2 = useCallback(() => {
    dispatch({ type: "INC-2" });
  }, [state.count2]);

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "INC-1",
          })
        }
      >
        {state.count1}
      </button>
      <Text text={text} inc2={inc2} />
    </>
  );
}

export default App;
