import React, { useContext } from "react";
import $ from "jquery";
import { musicContext, shoppingCart } from "../../context";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

import CartItem from "../CartItem";

// Render function
function Cart() {
  const { showShoppingCart } = useContext(musicContext);
  const { cartProducts } = useContext(shoppingCart);

  if (showShoppingCart) {
    $(".shopping-cart-list").css("right", "0");
  } else {
    $(".shopping-cart-list").css("right", "-400px");
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
              unitsInStock={product.unitsStock}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Cart;
