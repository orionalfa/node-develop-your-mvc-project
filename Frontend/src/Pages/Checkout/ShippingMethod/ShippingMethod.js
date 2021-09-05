import React, { useContext } from "react";
import { Grid } from "@material-ui/core/";

import "../styles.css";

import CheckoutFooter from "../../../components/CheckoutFooter";
import CheckoutResume from "../../../components/CheckoutResume";

import { checkoutContext, shoppingCart } from "../../../context";

export default function ShippingMethod() {
  const { shippingMethod, setShippingMethod } = useContext(checkoutContext);
  const { cartProducts } = useContext(shoppingCart);
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var totalAmount = 0;

  cartProducts.forEach((product) => {
    totalAmount += product.price;
  });
  const handleChange = (e) => {
    setShippingMethod(e.target.value);
    // console.log(shippingMethod);
  };

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
                    onChange={handleChange}
                    checked={shippingMethod == "cheapest" ? "checked" : ""}
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
                    onChange={handleChange}
                    checked={shippingMethod == "standard" ? "checked" : ""}
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
                    id="premium"
                    name="shipping"
                    value="premium"
                    onChange={handleChange}
                    checked={shippingMethod == "premium" ? "checked" : ""}
                  />
                  <label>
                    <div className="radio-info">
                      <h5>Premium</h5>
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
                    onChange={handleChange}
                    checked={shippingMethod == "express" ? "checked" : ""}
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
              <CheckoutResume />
            </Grid>
            <CheckoutFooter back="shipping-info" next="payment-method" />
          </Grid>
        </div>
      </form>
    </main>
  );
}
