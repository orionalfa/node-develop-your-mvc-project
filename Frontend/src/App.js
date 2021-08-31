import "./App.css";
import React from 'react';


import Home from "./components/Home"

import NavBar from "./components/NavBar";
import ProductPage from "./Pages/Products";
import SignUpPage from "./Pages/SignUp";
import ChangePasswordPage from "./Pages/ChangePwd";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
  <header><NavBar/></header>
     
  <BrowserRouter>
    <Switch>
      <Route 
      path="/" 
      exact 
      component={Home}
      />

      <Route 
      path="/products"
      component={ProductPage}
      />

      <Route
       path="/sign-up" 
       component={SignUpPage}     
      />

      <Route
      path="/user-pwd-change" 
      component={ChangePasswordPage}
      />
   
    </Switch>
  </BrowserRouter>
    </>
  );
}

export default App;
