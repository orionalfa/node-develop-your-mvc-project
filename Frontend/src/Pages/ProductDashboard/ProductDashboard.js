import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core/";
//import $ from "jquery";
import "./styles.css";
import musicContext from "../../context";

function getProductList(products) {
  const productList = [];
  products.forEach((product) => {
    product.models.forEach((model) => {
      productList.push({
        productId: product._id,
        title: product.title,
        description: product.description,
        modelId: model._id,
        modelName: model.name,
        modelPrice: model.price,
        modelDescription: model.modelDescription,
        modelUnits: model.unitsStock,
        modelImages: model.images,
      });
    });
  });
  return productList;
}

export default function ProductDashboard() {
  const { products, removeModel, updateProduct, getAllProducts } =
    useContext(musicContext);

  if (!products) return null;

  const productList = getProductList(products);

  return (
    <main>
      <Grid container xs={12} sm={12} md={12}>
        <div className="grid-container">
          {products.map((product) => (
            <div className="product-table border border-secondary rounded mb-4">
              <div className="product-header">
                <div>
                  {product.title} - {product.description} Update Remove
                </div>
                <div>
                  <button>Update</button>
                  <button>Remove</button>
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>Model Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Units</th>
                    <th>Images</th>
                  </tr>
                </tbody>
                {/* // <tbody>
              //     <tr key={uuidv4()}>
              //       <td key={uuidv4()}>{product.title}</td>
              //       <td key={uuidv4()}>{product.description}</td>
              //       <td key={uuidv4()}>{product.modelName}</td>
              //       <td key={uuidv4()}>{product.modelPrice}</td>
              //       <td key={uuidv4()}>{product.modelDescription}</td>
              //       <td key={uuidv4()}>{product.modelUnits}</td>
              //       <td key={uuidv4()}>{product.modelImages}</td>
              //       <td key={uuidv4()}>
              //         <button onClick={() => updateProduct(product.productId)}>
              //           Update
              //         </button>
              //       </td>
              //       <td key={uuidv4()}>
              //         <button
              //           onClick={() => {
              //             removeModel(product.modelId);
              //           }}
              //         >
              //           Remove
              //         </button>
              //       </td>
              //     </tr>
              // </tbody> */}
              </table>
            </div>
          ))}
        </div>
      </Grid>
    </main>
  );
}
