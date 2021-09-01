import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import musicContext from "./context";

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
    <musicContext.Provider
    value={{
      showShoppingCart:showShoppingCart,
      hola:"holaketal"
  }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/products"
            render={() => (
              <ProductPage />
            )}
          />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/user-pwd-change" component={ChangePasswordPage} />
        </Switch>
      </BrowserRouter>
    </musicContext.Provider>
  </>
  );
}

export default App;
