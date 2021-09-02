import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import $ from "jquery";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

import musicContext from "./context";

import "./App.css";

import NavBar from "./components/NavBar";
import ProductDashboard from "./Pages/ProductDashboard";
import Home from "./Pages/Home";
import ProductPage from "./Pages/Products";
import SignUpPage from "./Pages/SignUp";
import ChangePasswordPage from "./Pages/ChangePwd";
import ShippingInfo from "./Pages/Checkout/ShippingInfo";
import ShippingMethod from "./Pages/Checkout/ShippingMethod";
import PaymentMethod from "./Pages/Checkout/PaymentMethod";
import PreviewOrder from "./Pages/Checkout/PreviewOrder";
import ConfirmOrder from "./Pages/Checkout/ConfirmOrder";

const hunel = new HunelCreditCard();
// const SHOW_SHOPPINGCART="SHOW_SHOPPINGCART";
// function reducer(state, action){
//   switch (action.type){
//     case SHOW_SHOPPINGCART:{
//         return{
//           ...state,
//           showCart:showShoppingCart ? state=false : state=true
//         }

//     }
//   }
// }
function App() {
  // const [state, dispatch] = useReducer(reducer);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getAllProducts();
  }, []);

  function showCart() {
    showShoppingCart ? setShowShoppingCart(false) : setShowShoppingCart(true);
  }
  function getAllProducts() {
    $.ajax({
      url: "http://localhost:4000/products",
      type: "GET",
      success: (res) => {
        setProducts(res.data);
        setIsLoaded(true);
      },
    });
  }

  async function removeProduct(product) {
    $.ajax({
      url: `http://localhost:4000/products/${product._id}`,
      type: "DELETE",
      success: (res) => {
        console.log(res);
        //getAllProducts();
        //window.location.reload();
      },
    });
  }

  async function updateProduct(product) {
    $.ajax({
      url: `http://localhost:4000/products/${product._id}`,
      type: "PATCH",
      data: {
        title: product.title,
      },
      success: (res) => {
        console.log(res);
        //window.location.reload();
      },
    });
  }

  return (
    <>
      <header>
        <NavBar showCart={showCart} />
      </header>
      <musicContext.Provider
        value={{
          showShoppingCart: showShoppingCart,
          hola: "holaketal",
          products: products,
          isLoaded: isLoaded,
          removeProduct: removeProduct,
          updateProduct: updateProduct,
          getAllProducts: getAllProducts,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" render={() => <ProductPage />} />
            <Route path="/user-pwd-change" component={ChangePasswordPage} />
            <Route path="/sign-up" render={() => <SignUpPage />} />
            <Route path="/product-dashboard" component={ProductDashboard} />
            <Route path="/shipping-info" render={() => <ShippingInfo />} />
            <Route path="/shipping-method" render={() => <ShippingMethod />} />
            <HunelProvider config={hunel}>
              <Route path="/payment-method" render={() => <PaymentMethod />} />
            </HunelProvider>
            <Route path="/preview-order" render={() => <PreviewOrder />} />
            <Route path="/confirm-order" render={() => <ConfirmOrder />} />
          </Switch>
        </BrowserRouter>
      </musicContext.Provider>
    </>
  );
}

export default App;
