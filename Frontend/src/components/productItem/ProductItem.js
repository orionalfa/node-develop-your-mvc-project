import "./styles.css";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
// import image from "../../img/violin.jpg";

function ProductItem({ productTitle, description, price, unitsInStock, image}) {
  const [state, setClass] = useState(false);
  let productClass = "productImage";
  let productData = "productDetails_hide";
  let buttonText = "Show details";
  let containerFlip = "noFlip";

  if (state === true) {
    containerFlip = "flip";
    productClass = "productImage_hide";
    productData = "productDetails";
    buttonText = "Back to Image";
  }

  return (
    <div className={containerFlip}>
      <Button
        onClick={() => {
          if (state === false) {
            setClass(true);
          } else {
            setClass(false);
          }
        }}
        variant="contained"
        color="primary"
      >
        {buttonText}
      </Button>
      <div className={productClass}>
        <img className="imageInstrument" alt={image} src={image}></img>
      </div>
      <div className={productData}>
        <h1 className="productDetails-data">{productTitle}</h1>
        <p className="productDetails-data">{description}</p>
        <p className="productDetails-data">{price} $</p>
        <p className="productDetails-data">{unitsInStock} U</p>
        <Button variant="contained" color="primary">
          Buy now
        </Button>
      </div>
    </div>
  );
}
export default ProductItem;
