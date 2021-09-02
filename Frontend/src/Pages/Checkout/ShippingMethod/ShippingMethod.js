import React from "react";
import { Grid } from "@material-ui/core/";

import "./styles.css";

import CheckoutFooter from "../../../components/CheckoutFooter";

export default function ShippingMethod() {
  return (
    <main>
      <form>
        <div className="shipping-info-container">
          <Grid container>
            <Grid
              item
              p={10}
              xs={12}
              sm={12}
              md={9}
              className="shipping-info-form"
            >
              <h1>SHIPPING METHODS</h1>
            </Grid>
            <Grid
              item
              p={10}
              xs={12}
              sm={12}
              md={3}
              className="shipping-info-resume"
            ></Grid>
            <CheckoutFooter back="products" next="shipping-method" />
          </Grid>
        </div>
      </form>
    </main>
  );
}
