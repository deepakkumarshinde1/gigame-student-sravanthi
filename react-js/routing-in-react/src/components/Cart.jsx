import { useCartContext } from "../context/cart.context";

function Cart() {
  let { cart, addToCart } = useCartContext();
  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
      <ul>
        {cart.map((product, index) => {
          return <li key={index}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
