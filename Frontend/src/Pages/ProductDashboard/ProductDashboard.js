import React, { useState } from "react";

import "./styles.css";

export default function ProductDashboard() {
  const products = [
    {
      title: "Violin",
      description: "asdfa sdfasd fqwerqwer asdf",
      name: "Molitor Stradivarius",
      price: "3000000€",
      modelDescription: "Oak",
      unitsStock: "1",
      images:
        "https://tarisio.com/content/uploads/2010/07/l22161top-Molitor-e1558015014811.jpg",
    },
    {
      title: "Violin",
      description: "asdfa sdfasd fqwerqwer asdf",
      name: "Molitor Stradivarius",
      price: "3000000€",
      modelDescription: "Oak",
      unitsStock: "1",
      images:
        "https://tarisio.com/content/uploads/2010/07/l22161top-Molitor-e1558015014811.jpg",
    },
    {
      title: "Violin",
      description: "asdfa sdfasd fqwerqwer asdf",
      name: "Molitor Stradivarius",
      price: "3000000€",
      modelDescription: "Oak",
      unitsStock: "1",
      images:
        "https://tarisio.com/content/uploads/2010/07/l22161top-Molitor-e1558015014811.jpg",
    },
  ];

  const listProducts = products.map((product) => (
    <tr>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.modelDescription}</td>
      <td>{product.unitsStock}</td>
      <td>{product.images}</td>
    </tr>
  ));

  return (
    <div className="grid-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Name</th>
            <th>Price</th>
            <th>Model description</th>
            <th>Units in stock</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>{listProducts}</tbody>
      </table>
    </div>
  );
}
