import "./App.css";
import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from "./Pages/Products";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
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

    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
