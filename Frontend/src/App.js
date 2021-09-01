import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

import Home from "./Pages/Home";
import ProductPage from "./Pages/Products";
import SignUpPage from "./Pages/SignUp";
import ChangePasswordPage from "./Pages/ChangePwd";
import ProductDashboard from "./Pages/ProductDashboard";

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
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home showShoppingCart={showShoppingCart} {...props} />
              )}
            />

            <Route
              path="/products"
              render={(props) => (
                <ProductPage showShoppingCart={showShoppingCart} {...props} />
              )}
            />

            <Route
              path="/sign-up"
              render={(props) => (
                <SignUpPage showShoppingCart={showShoppingCart} {...props} />
              )}
            />

            <Route path="/user-pwd-change" component={ChangePasswordPage} />

            <Route path="/product-dashboard" component={ProductDashboard} />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
