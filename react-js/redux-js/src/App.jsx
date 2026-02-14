import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, resetCount, setCount } from "./redux/counter.slice";
import { useEffect, useState } from "react";
import { getProducts } from "./redux/services/products.service";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);
  let { products, loading } = useSelector((state) => state.productSlice);

  let [text, setText] = useState(count);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      // api call
    }
  }, [products]);
  return (
    <div>
      <section>
        {loading && "Getting products"}
        {products.length > 0 && `Product count : ${products.length}`}
      </section>
      <section>
        <input
          type="text"
          placeholder="Enter counter number"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              dispatch(setCount(Number(text)));
            }
          }}
        />
      </section>
      App {count} <button onClick={() => dispatch(increment())}>INC</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
}

export default App;
