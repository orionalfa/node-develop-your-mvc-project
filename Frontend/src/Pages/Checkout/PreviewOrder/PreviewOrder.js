import React, { useContext } from "react";
import CheckoutResume from "../../../components/CheckoutResume";
import { Grid } from "@material-ui/core/";
import { Button } from "@material-ui/core";
import { checkoutContext, shoppingCart } from "../../../context";

export default function ConfirmOrder() {
  const { cartProducts } = useContext(shoppingCart);

  const confirmPurchase = () => {};
  return (
    <main>
      <div>
        <Grid container>
          <Grid item p={10} xs={12} sm={12} md={9} className="left-container">
            <CheckoutResume />
          </Grid>
          <Grid item p={10} xs={12} sm={12} md={3} className="right-container">
            {cartProducts.length > 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={confirmPurchase}
              >
                Purchase
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
