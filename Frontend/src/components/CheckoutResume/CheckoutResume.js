import React, { useContext } from "react";

import "./styles.css";

import { shoppingCart } from "../../context";
import CheckoutItem from "../CheckoutItem";
import { v4 as uuidv4 } from "uuid";

export default function CheckoutResume() {
  const { cartProducts } = useContext(shoppingCart);
  var totalAmount = 0;

  cartProducts.forEach((product) => {
    totalAmount += product.price;
  });

  return (
    <ul>
      {cartProducts.length > 0 && (
        <li className="col">
          <h2>Importe total: {totalAmount}€</h2>
        </li>
      )}
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <CheckoutItem
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
  );
}
