import React from "react";
import { Grid } from "@material-ui/core/";

import "../styles.css";

import CheckoutFooter from "../../../components/CheckoutFooter";

export default function ShippingMethod() {
  return (
    <main>
      <form>
        <div className="form-container">
          <Grid container>
            <Grid item p={10} xs={12} sm={12} md={9} className="left-container">
              <h1>SHIPPING METHODS</h1>
              <div className="shipping-methods-container">
                <div className="shipping-method-radio">
                  <input
                    type="radio"
                    id="cheapest"
                    name="shipping"
                    value="cheapest"
                  />
                  <label>
                    <div className="radio-info">
                      <h5>Cheapest</h5>
                      <div>Between 15-20 working days</div>
                    </div>
                    <div className="radio-price">4,99€</div>
                  </label>
                </div>
                <div className="shipping-method-radio">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    value="standard"
                  />
                  <label>
                    <div className="radio-info">
                      <h5>Standard</h5>
                      <div>Between 5-10 working days</div>
                    </div>
                    <div className="radio-price">9,99€</div>
                  </label>
                </div>
                <div className="shipping-method-radio">
                  <input
                    type="radio"
                    id="premiun"
                    name="shipping"
                    value="premiun"
                  />
                  <label>
                    <div className="radio-info">
                      <h5>Premiun</h5>
                      <div>Between 3-5 working days</div>
                    </div>
                    <div className="radio-price">19,99€</div>
                  </label>
                </div>
                <div className="shipping-method-radio">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    value="express"
                  />
                  <label>
                    <div className="radio-info">
                      <h5>Express</h5>
                      <div>from 24h to 48h</div>
                    </div>
                    <div className="radio-price">29,99€</div>
                  </label>
                </div>
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
            <CheckoutFooter back="shipping-info" next="payment-method" />
          </Grid>
        </div>
      </form>
    </main>
  );
}
