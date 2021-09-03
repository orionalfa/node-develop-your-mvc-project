import React, { useContext } from "react";
import { Grid } from "@material-ui/core/";

import "../styles.css";

import CheckoutFooter from "../../../components/CheckoutFooter";
import { checkoutContext } from "../../../context";

export default function ShippingInfo() {
  const {
    shippingAddress,
    shippingMethod,
    paymentData,
    setShippingAddress,
    setShippingMethod,
    setPaymentData,
    updateShippingData,
    getShippingData,
    sendOrder,
  } = useContext(checkoutContext);

  return (
    <main>
      <form>
        <div className="form-container">
          <Grid container>
            <Grid item p={10} xs={12} sm={12} md={9} className="left-container">
              <h1>SHIPPING INFO</h1>
              <div>
                <h5>Full name:</h5>
                <input type="text" />
              </div>
              <div>
                <h5>Address</h5>
                <input type="text" />
              </div>
              <div>
                <h5>Postal Code</h5>
                <input type="text" />
              </div>
              <div>
                <h5>City</h5>
                <input type="text" />
              </div>
              <div>
                <h5>Country</h5>
                <input type="text" />
              </div>
              <div>
                <h5>Phone number</h5>
                <input type="text" />
              </div>
            </Grid>
            <Grid
              item
              p={10}
              xs={12}
              sm={12}
              md={3}
              className="right-container"
            >
              <div>Resume</div>
            </Grid>
            <CheckoutFooter back="products" next="shipping-method" />
          </Grid>
        </div>
      </form>
    </main>
  );
}
