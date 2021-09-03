import React, { useState } from "react";
import { Grid } from "@material-ui/core/";
import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import { useCardForm } from "reactjs-credit-card";

import "./styles.css";

import CheckoutFooter from "../../../components/CheckoutFooter";

export default function PaymentMethod() {
  const getFormData = useCardForm();
  const [numberValid, setNumberValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const [data, isValid] = getFormData();

    if (!data.number.isValid) setNumberValid(false); //we'll set a hook to show a error if card number is invalid
    //check the general verification result and alert with special verification result
    if (!isValid)
      alert(
        `${data.holder.value} form data values invalid :) and holder also ${
          data.holder.isValid ? "valid" : "invalid"
        }`,
      );
  }

  //remove error function if focused on CardNumber
  function handleFocus() {
    setNumberValid(true);
  }

  return (
    <main>
      <div className="form-container">
        <Grid item p={10} xs={12} sm={12} md={12} className="one-container">
          <h1>PAYMENT METHOD</h1>
          <br />
          <Card fixClass="fix-new" cardClass="card-new" />
          <form onSubmit={handleSubmit}>
            <CardNumber
              placeholder="Card Number"
              className={`input-text${!numberValid ? " error" : ""}`}
              onFocus={handleFocus}
            />
            <CardHolder placeholder="Card Holder" className="input-text" />
            <div className="flex-wrapper">
              <div className="semi flex-wrapper">
                <ValidThruMonth className="input-text semi" />
                <ValidThruYear className="input-text semi" />
              </div>
              <CardSecurityCode placeholder="CVV" className="input-text semi" />
            </div>
            <button className="card-btn">Submit</button>
          </form>
          <CheckoutFooter back="shipping-method" next="preview-order" />
        </Grid>
      </div>
    </main>
  );
}
