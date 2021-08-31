import React from "react";
import $ from "jquery";

import "./styles.css";
import mockProduct from "../../img/mockProduct.JPG";

import CartItem from "../CartItem";

function renderCartItems() {
  const mockCartItems = [];

  for (let i = 0; i < 5; i++) {
    mockCartItems.push(
      <CartItem
        key={i}
        id={i}
        title={"product " + i}
        price={100}
        img={mockProduct}
        quantity={5}
        unitsInStock={3}
        // handleRemove={handleRemove}
        // handleChange={handleChange}
      />,
    );
  }
  return mockCartItems;
}

// Render function
function Cart({ showShoppingCart }) {
  const mockCartItems = renderCartItems();

  if (showShoppingCart) {
    console.log("mostrar");
    $(".shopping-cart-list").css("right", "0");
  } else {
    console.log("ocultar");
    $(".shopping-cart-list").css("right", "-400px");
  }

  return (
    <div className="shopping-cart-list">
      <ul>{mockCartItems}</ul>
    </div>
  );
}

export default Cart;
