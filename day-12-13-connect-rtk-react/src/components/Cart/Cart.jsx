import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "./cartSelectors.js";

function Cart() {
  const cart = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div>
      <h2>Cart</h2>

      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}€</p>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
