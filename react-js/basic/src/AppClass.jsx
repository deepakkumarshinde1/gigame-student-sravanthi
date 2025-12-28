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
  inc() {
    // this.setState((oldState) => {
    //   return {
    //     ...oldState,
    //     count: oldState.count + 1,
    //   };
    // });

    this.setState((oldState) => ({
      ...oldState,
      count: oldState.count + 1,
      input: "deepak",
    }));

    this.setState({ ...this.state, count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <button>INC</button>
        <h1>Hello</h1>
      </>
    );
  }
}

export default AppClass;
