import React from "react";
import { Button } from "@material-ui/core";

import "./styles.css";

function buildSelectOptions(unitsInStock) {
  console.log(unitsInStock);
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      <option key={currentIndex} value={currentIndex}>
        {currentIndex}
      </option>
    );
  });
}

function CartItem({
  id,
  img,
  title,
  price,
  quantity,
  unitsInStock,
  handleChange,
  handleRemove,
}) {
  function onHandleChange(event) {
    handleChange(event, id);
  }

  function onHandleRemove() {
    handleRemove(id);
  }

  return (
    <li className="col">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3 mb-xl-0">
              <img className="cartItemImg" src={img} alt="" />
            </div>
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                <div className="col">
                  <h4 className="h5">
                    <strong>{title}</strong>
                  </h4>
                </div>
                <div className="col">
                  <p>
                    <strong>{price}€</strong>
                  </p>
                </div>
                <div className="col mt-auto">
                  <div className="row">
                    <div className="col col-6 col-lg-4">
                      <select
                        className="custom-select"
                        onChange={onHandleChange}
                        onBlur={onHandleChange}
                        value={quantity}
                      >
                        {buildSelectOptions(unitsInStock)}
                      </select>
                    </div>
                    <div className="col col-6 col-lg-8">
                      <button className="button" onClick={onHandleRemove}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
