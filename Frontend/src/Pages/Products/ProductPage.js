import React, { useContext } from "react";

import "./styles.css";

import { Grid } from "@material-ui/core/";

import ProductItem from "../../components/productItem";
import Cart from "../../components/Cart";
import musicContext from "../../context";

function ProductPage() {
  const { hola, products, isLoaded } = useContext(musicContext);
  console.log(hola);

  // console.log(products)
  return isLoaded ? (
    <main>
      <Cart />
      <Grid container className="product-page-grid">
        {products.map((product, index) => (
          <Grid
            item
            p={10}
            xs={12}
            sm={6}
            md={3}
            key={index}
            className="product-page-product-container"
          >
            <ProductItem
              image={product.models[0].images[0]}
              productTitle={product.title}
              description={product.description}
              price={product.models[0].price}
              unitsInStock={product.models[0].unitsStock}
            ></ProductItem>
          </Grid>
        ))}
      </Grid>
    </main>
  ) : (
    <h1>Our store it's empty</h1>
  );
}

export default ProductPage;
