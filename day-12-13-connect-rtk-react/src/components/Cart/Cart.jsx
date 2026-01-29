import { useDispatch, useSelector } from "react-redux";
// import CartItem from "./CartItem.jsx";
import { useEffect } from "react";
import { fetchProducts } from "./cartSlice.js";
import { selectCartItems } from "./cartSelectors.js";

function Cart() {
  const cart = useSelector(selectCartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  return (
    <div>
      {/* <h2>Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))} */}
      {cart.map(item => {
        return <p key={item.id}>{item.name} - {item.price}</p>
      })}
    </div>
  );
}

export default Cart;