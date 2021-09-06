import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

//Components
import LogIn from "../LogIn";

function NavBar({ showCart }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border sticky-top personalized-navbar-style">
        <div className="container-fluid">
          <img className="logotype-Invert" src="./img/logotype.png"></img>
          <Link to="/" className="navbar-brand logo">
            NotE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navItem">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item navItem">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item navItem">
                <Link className="nav-link" to="/product-dashboard">
                  ProductDashboard
                </Link>
              </li>
              <li className="nav-item navItem">
                <Link className="nav-link" to="/users-dashboard">
                  UsersDashboard
                </Link>
              </li>
              {/* <li className="nav-item navItem">
                <div className="nav-link checkout">
                  ¡¡TMP!! - Checkout
                  <ul>
                    <li>
                      <Link to="/shipping-info">ShippingInfo</Link>
                    </li>
                    <li>
                      <Link to="/shipping-method">ShippingMethod</Link>
                    </li>
                    <li>
                      <Link to="/payment-method">PaymentMethod</Link>
                    </li>
                    <li>
                      <Link to="/preview-order">PreviewOrder</Link>
                    </li>
                    <li>
                      <Link to="/confirm-order">ConfirmOrder</Link>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
            <LogIn />
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownCart"
              aria-expanded="false"
              onClick={showCart}
            >
              <span className="shopping-cart-button">Shopping Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
