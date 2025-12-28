// component => Basic building block of react js

import { useState } from "react";
import Users from "./components/Users";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

// function or class

function App() {
  let [input, setInput] = useState("kumar");
  let [users, setUSers] = useState([]);
  let [todo, setTodo] = useState({ name: "MyTodo" });
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <input type="text" value={input} />
      <h1>Hi {todo.name}</h1>
      <h1>Deeepak</h1>
      <Users />
      <Users />
      <Users />

      <Login />
      <CreateAccount />
    </>
  );
}
export default App;

// only one parent is allow to JSX
// <></> or React.Fragment => JSX Fragment
// class => className
// for => htmlFor
