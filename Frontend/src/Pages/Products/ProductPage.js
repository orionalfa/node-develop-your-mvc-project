import React from "react";

import "./styles.css";
import { Grid } from "@material-ui/core/";
import ProductItem from "../../components/productItem";

function ProductPage() {
  return (
    <Grid container>
      {Array.from(Array(12)).map((_, index) => (
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
            productTitle="Violin"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
            price="300E"
            unitsInStock="units in stoK"
          ></ProductItem>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductPage;
