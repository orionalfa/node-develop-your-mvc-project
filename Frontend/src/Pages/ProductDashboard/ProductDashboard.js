import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import { v4 as uuidv4 } from "uuid";
import musicContext from "../../context";
import "./styles.css";

export default function ProductDashboard() {
  const { products, removeProduct } = useContext(musicContext);

  if (!products)
    return (
      <main>
        <div>There aren't products</div>
      </main>
    );

  return (
    <main>
      <Grid container xs={12} sm={12} md={12}>
        <div className="grid-container">
          {products.map((product) => (
            <div className="product-table border border-secondary rounded mb-4">
              <div className="product-header">
                <div className="product-title ms-3">
                  {product.title} - {product.description}
                </div>
                <div>
                  <Link
                    to={`/product-formulary/${product._id}`}
                    className="button me-4"
                  >
                    Update
                  </Link>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      removeProduct(product._id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <table>
                <thead className="border-top">
                  <tr key={uuidv4()}>
                    <th key={uuidv4()}>Model Name</th>
                    <th key={uuidv4()}>Description</th>
                    <th key={uuidv4()}>Price</th>
                    <th key={uuidv4()}>Units</th>
                  </tr>
                </thead>
                <tbody>
                  {product.models.map((model) => (
                    <tr key={uuidv4()}>
                      <td key={uuidv4()}>{model.name}</td>
                      <td key={uuidv4()}>{model.modelDescription}</td>
                      <td key={uuidv4()}>{model.price}</td>
                      <td key={uuidv4()}>{model.unitsStock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Grid>
    </main>
  );
}
