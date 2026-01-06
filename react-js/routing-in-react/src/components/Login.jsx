import { Component } from "react";
import { CartContext } from "../context/cart.context";

class Login extends Component {
  render() {
    return (
      <div>
        <CartContext.Consumer>
          {(value) => {
            return <div>{value.cart.length}</div>;
          }}
        </CartContext.Consumer>
      </div>
    );
  }
}

export default Login;
