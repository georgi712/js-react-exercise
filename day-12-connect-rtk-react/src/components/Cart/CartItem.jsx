import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeItem } from './cartSlice.js';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(decrementItem(item.id));
  };

  const incrementHandler = () => {
    dispatch(incrementItem(item.id));
  };

  const removeHandler = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
      <span>{item.name}</span>
      <span>Qty: {item.quantity}</span>

      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem;