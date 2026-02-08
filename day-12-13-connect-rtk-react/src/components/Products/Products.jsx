import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "./productsSelectors.js";
import { useEffect } from "react";
import { fetchProducts } from "./productSlice.js";
import { addToCart } from "../Cart/cartSlice.js";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const error = useSelector(selectProductsError);
  const loading = useSelector(selectProductsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderItems = () => {
    if (loading) {
      return <p>Loading products...</p>;
    }

    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }

    if (products.length === 0) {
      return <p>There are no products yet.</p>;
    }

    return products.map((product) => (
      <div key={product.id}>
        <p>
          {product.name} - {product.price}€
        </p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    ));
  };

  return (
    <div>
      <h2>Products</h2>

      {renderItems()}
    </div>
  );
}

export default Products;
