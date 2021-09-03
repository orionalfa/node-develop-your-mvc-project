import React, { useContext, useState } from "react";
import { Grid } from "@material-ui/core/";

import "../styles.css";

import CheckoutFooter from "../../../components/CheckoutFooter";
import { checkoutContext } from "../../../context";

export default function ShippingInfo() {
  const { shippingAddress, setShippingAddress } = useContext(checkoutContext);

  const [country, setCountry] = useState(shippingAddress.country);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [streetAddress, setStreetAddress] = useState(
    shippingAddress.streetAddress,
  );
  const [contactName, setContactName] = useState(shippingAddress.contactName);
  const [contactPhone, setContactPhone] = useState(
    shippingAddress.contactPhone,
  );

  const handleChange = (e) => {
    shippingAddress[e.target.id] = e.target.value;
    setShippingAddress(shippingAddress);
    setContactName(shippingAddress.contactName);
    setCountry(shippingAddress.country);
    setCity(shippingAddress.city);
    setPostalCode(shippingAddress.postalCode);
    setStreetAddress(shippingAddress.streetAdress);
    setContactPhone(shippingAddress.contactPhone);
    console.log(shippingAddress);
  };
  return (
    <main>
      <form>
        <div className="form-container">
          <Grid container>
            <Grid item p={10} xs={12} sm={12} md={9} className="left-container">
              <h1>SHIPPING INFO</h1>
              <div>
                <h5>Full name:</h5>
                <input
                  type="text"
                  id="contactName"
                  onChange={handleChange}
                  value={contactName}
                />
              </div>
              <div>
                <h5>Address</h5>
                <input
                  type="text"
                  id="streetAddress"
                  onChange={handleChange}
                  value={streetAddress}
                />
              </div>
              <div>
                <h5>Postal Code</h5>
                <input
                  type="text"
                  id="postalCode"
                  onChange={handleChange}
                  value={postalCode}
                />
              </div>
              <div>
                <h5>City</h5>
                <input
                  type="text"
                  id="city"
                  onChange={handleChange}
                  value={city}
                />
              </div>
              <div>
                <h5>Country</h5>
                <input
                  type="text"
                  id="country"
                  onChange={handleChange}
                  value={country}
                />
              </div>
              <div>
                <h5>Phone number</h5>
                <input
                  type="text"
                  id="contactPhone"
                  onChange={handleChange}
                  value={contactPhone}
                />
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
