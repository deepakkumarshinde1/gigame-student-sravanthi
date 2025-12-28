import { useState } from "react";
import Counter from "./Counter";

function Users() {
  let [count, setCount] = useState(0);
  let inc = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={inc}>INC</button>
      <Counter count1={count} />
    </>
  );
}

export default Users;
