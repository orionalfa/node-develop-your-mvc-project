import React from "react";
import ShoppingCartItem from "../ShoppingCartItem";

// Cart total price (we will need to check props to adapt code)
function getCartTotal(cart) {
    return cart.reduce((accum, item) => {
      return accum + item.price * item.quantity;
    }, 0);
  }

// Render function 
function ShoppingCart({ cartItems, handleRemove, handleChange, ...props }){
    return(
      <aside {...props}>
          
      </aside>
      )
}