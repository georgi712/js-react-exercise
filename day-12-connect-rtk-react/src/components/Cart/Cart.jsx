import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";

function Cart() {
  const cart = useSelector(state => state.cart.cart);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;