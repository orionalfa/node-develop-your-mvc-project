import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";
import "./styles.css";
import musicContext from "../../context";

async function updateProduct(product) {
  console.log(product._id);
  console.log(product.title);
}

async function removeProduct(product) {
  console.log(product._id);
}

export default function ProductDashboard() {

  const { products }=useContext(musicContext)

  if (!products) return null;

  const productList = products.map((product, index) => (
    <tr key={uuidv4()}>
      <td key={uuidv4()}>
        <input
          type="text"
          value={product.title}
          onChange={() => updateProduct(product)}
        />
      </td>
      <td key={uuidv4()}>{product.description}</td>
      <td key={uuidv4()}>{product.models[0].name}</td>
      <td key={uuidv4()}>{product.models[0].price}</td>
      <td key={uuidv4()}>{product.models[0].modelDescription}</td>
      <td key={uuidv4()}>{product.models[0].unitsStock}</td>
      <td key={uuidv4()}>{product.models[0].images}</td>
      <td key={uuidv4()}>
        <button onClick={() => updateProduct(product)}>Update</button>
      </td>
      <td key={uuidv4()}>
        <button onClick={() => removeProduct(product)}>Remove</button>
      </td>
    </tr>
  ));

  return (
    <main>
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
        <tbody>{productList}</tbody>
      </table>
    </div>
    </main>
  );
}
