import { Component } from "react";
import { CartContext } from "../context/cart.context";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <CartContext.Consumer>
          {(value) => {
            return <div>This is my login page{value.cart.length}</div>;
          }}
        </CartContext.Consumer>
      </div>
    );
  }
}

export default Login;
