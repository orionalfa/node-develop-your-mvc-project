import React from "react";
import "./navbarStyles.css";
import CartItem from "../CartItem";

// Render Cart items (mockCartItems to test Cart)
// {handleRemove, handleChange}
function renderCartItems() {
  const mockCartItems = [];

  for (let i = 0; i < 5; i++) {
    mockCartItems.push(
      <CartItem
        key={i}
        id={i}
        title={"product " + i}
        price={100}
        img={"../../img/mockProduct.jpg"}
        quantity={5}
        unitsInStock={3}
        // handleRemove={handleRemove}
        // handleChange={handleChange}
      />,
    );
  }
  return mockCartItems;
}

function NavBar(props) {
  const mockCartItems = renderCartItems();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            NotE
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item navItem">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item navItem">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item navItem">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
            </ul>
            <div className="d-flex dropdown cartNavBar">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownCart"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
              <ul className="dropdown-menu" aria-labelledby="dropdownCart">
                {/* <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something
                  </a>
                </li> */}
                {mockCartItems}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
