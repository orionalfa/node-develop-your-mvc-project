import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./Pages/Home";
import ProductPage from "./Pages/Products";
import SignUpPage from "./Pages/SignUp";
import ChangePasswordPage from "./Pages/ChangePwd";

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  function showCart() {
    showShoppingCart ? setShowShoppingCart(false) : setShowShoppingCart(true);
  }

  return (
    <>
      <header>
        <NavBar showCart={showCart} />
      </header>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/products"
            render={(props) => (
              <ProductPage showShoppingCart={showShoppingCart} {...props} />
            )}
          />

          <Route path="/sign-up" component={SignUpPage} />

          <Route path="/user-pwd-change" component={ChangePasswordPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
