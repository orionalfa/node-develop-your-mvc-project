import React from "react";

import "./styles.css";

import { Button } from "@material-ui/core";

function buildSelectOptions(unitsInStock) {
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      <option key={currentIndex} value={currentIndex}>
        {currentIndex}
      </option>
    );
  });
}

function CheckoutItem({
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
            {/* <div className="col-12 col-xl-4 mb-3 mb-xl-0">
              <img className="checkoutItemImg" src={img} alt="" />
            </div> */}
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                <div className="resume-row">
                  <img src={img} alt={img} />
                  <div className="col">
                    <h4 className="h5">
                      <strong>{title}</strong>
                    </h4>
                    <div className="col">
                      <p>
                        <strong>{price}€</strong>
                      </p>
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

export default CheckoutItem;
