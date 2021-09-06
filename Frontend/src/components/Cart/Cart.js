import React, { useContext } from "react";
import $ from "jquery";
import { musicContext, shoppingCart } from "../../context";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import "./styles.css";

import CartItem from "../CartItem";

// Render function
function Cart() {
  const { showShoppingCart } = useContext(musicContext);
  const { cartProducts, handleChange, handleRemove, isCheckoutDisabled } =
    useContext(shoppingCart);

  if (showShoppingCart) {
    $(".shopping-cart-list").css("right", "0");
  } else {
    $(".shopping-cart-list").css("right", "-400px");
  }

  function test() {
    console.log("test");
  }

  return (
    <div className="shopping-cart-list">
      <ul>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <CartItem
              key={uuidv4()}
              id={product._id}
              title={product.title}
              price={product.price}
              img={product.images}
              quantity={product.quantity}
              unitsInStock={product.unitsInStock}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
      </ul>
      <div className="checkout-button">
        <Link
          to="/shipping-info"
          className={isCheckoutDisabled ? "button" : "button button-active"}
          disabled={isCheckoutDisabled}
          onClick={test}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
