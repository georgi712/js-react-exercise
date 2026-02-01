import { useDispatch, useSelector } from "react-redux";
// import CartItem from "./CartItem.jsx";
import { useEffect } from "react";
import { fetchProducts } from "./cartSlice.js";
import { selectCartError, selectCartItems, selectCartLoading } from "./cartSelectors.js";

function Cart() {
  const dispatch = useDispatch();
  
  const cart = useSelector(selectCartItems)
  const isLoading = useSelector(selectCartLoading);
  const error = useSelector(selectCartError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const renderItems = () => {
    if (isLoading) {
      return <p>Loading cart...</p>;
    }

    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }

    if (cart.length === 0) {
      return <p>Cart is empty</p>;
    }

    return cart.map(item => {
        return <p key={item.id}>{item.name} - {item.price}</p>
      })
  }

  return (
    <div>
      <h2>Cart</h2>
      {/* 
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))} */}
      {renderItems()}
    </div>
  );
}

export default Cart;