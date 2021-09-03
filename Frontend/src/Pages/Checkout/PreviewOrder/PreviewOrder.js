import React, { useContext } from "react";
import { checkoutContext } from "../../../context";

export default function PreviewOrder() {
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
  return <div></div>;
}
