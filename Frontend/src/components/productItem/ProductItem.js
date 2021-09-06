import "./styles.css";
import React, { useState, useContext } from "react";
import { shoppingCart } from "../../context/context";

function ProductItem({
  id,
  productTitle,
  description,
  price,
  unitsInStock,
  image,
}) {
  const [state, setClass] = useState(false);
  const { addToCart } = useContext(shoppingCart);

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

  function handleAddToCart() {
    addToCart(id);
  }

  return (
    <div className={containerFlip}>
      <div className={productClass}>
        <div className="front-buttons">
          <button className="button" onClick={handleAddToCart}>
            Buy now
          </button>
          <button
            className="button"
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
          </button>
        </div>
        <img className="imageInstrument" alt={image} src={image}></img>
      </div>
      <div className={productData}>
        <div className="product-data-container">
          <h1 className="productDetails-data">{productTitle}</h1>
          <p className="productDetails-data">{description}</p>
          <p className="productDetails-data">{price} $</p>
          <p className="productDetails-data">{unitsInStock} U</p>
          <div className="buttons">
            <button className="button" onClick={handleAddToCart}>
              Buy now
            </button>
            <button
              className="button"
              onClick={() => {
                if (state === false) {
                  setClass(true);
                } else {
                  setClass(false);
                }
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
