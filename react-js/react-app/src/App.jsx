import { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  let [toggle, setToggle] = useState(false);
  let changeStatus = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={changeStatus}>
        Goto {toggle ? "Login" : "Registration"} Page
      </button>
      {toggle ? <Registration /> : <Login />}
    </div>
  );
}

export default App;
