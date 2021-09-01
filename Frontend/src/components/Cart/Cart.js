import React,{useContext} from "react";
import $ from "jquery";
import musicContext from "../../context";
import "./styles.css";
// import mockProduct from "./img/mockProduct.JPG";

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
        img="./img/mockProduct.JPG"
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
function Cart() {
  const {showShoppingCart}=useContext(musicContext)
  const mockCartItems = renderCartItems();
  console.log()
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
