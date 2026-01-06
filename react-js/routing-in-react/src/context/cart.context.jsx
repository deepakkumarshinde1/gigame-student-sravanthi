import { createContext, useContext, useState } from "react";

// create context
export const CartContext = createContext({});
// create a hooks
export function useCartContext() {
  return useContext(CartContext);
}
// create a wrapper component
export function CartContextProvider(props) {
  let [cart, setCart] = useState([]);
  let addToCart = () => {
    setCart([...cart, { name: `Dell ${Math.floor(Math.random() * 100)}` }]);
  };
  let shared = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={shared}>{props.children}</CartContext.Provider>
  );
}
