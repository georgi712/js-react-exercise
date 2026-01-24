import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total: {totalPrice.toFixed(2)}€</p>
    </div>
  );
}

export default Cart;