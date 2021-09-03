import React from "react";
import { Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";

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
      <Link className="button" to={"/" + back}>
        Back to {back}
      </Link>
      <Link className="button" to={"/" + next}>
        Continue to {next}
      </Link>
    </Grid>
  );
}
