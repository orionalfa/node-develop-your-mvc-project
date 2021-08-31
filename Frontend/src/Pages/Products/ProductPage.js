import React from "react";

import "./styles.css";
import { Grid } from "@material-ui/core/";

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
          <div className="product-page-product-box">
            xs=12 sm=6 md=3 asdf asdf asdfasd fasdfasdfasdfasdfqwerqwerq wfaf
            qwe fajknfja wnjfnaw nfañnw eñganwgn ño
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductPage;
