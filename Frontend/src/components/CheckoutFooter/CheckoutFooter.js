import React from "react";
import { Grid } from "@material-ui/core/";

import "./styles.css";

export default function CheckoutFooter({ back, next }) {
  return (
    <Grid
      item
      p={10}
      xs={12}
      sm={12}
      md={12}
      className="checkout-footer-buttons"
    >
      <a className="button" href={"/" + back}>
        Back to {back}
      </a>
      <a className="button" href={"/" + next}>
        Continue to {next}
      </a>
    </Grid>
  );
}
