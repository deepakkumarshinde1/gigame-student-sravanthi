import { Component } from "react";
import App from "./App";

class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      input: "kumar",
      users: [],
      todo: { name: "MyTodo" },
      toggle: false,
    };
  }
  render() {
    return (
      <>
        <h1>Hello</h1>
      </>
    );
  }
}

export default AppClass;
