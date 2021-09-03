import "./App.css";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

import { musicContext } from "./context";
import { shoppingCart } from "./context";

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
  const [cartProducts, setCartProducts] = useState([]);
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(true);

  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  function showCart() {
    showShoppingCart ? setShowShoppingCart(false) : setShowShoppingCart(true);
  }

  function getAllProducts() {
    return $.ajax({
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
        //window.location.reload();
      },
    });
  }

  function buildNewCartItem(product) {
    if (product.quantity >= product.models[0].unitsStock) {
      return product;
    }

    return {
      _id: product._id,
      title: product.title,
      price: product.models[0].price,
      images: product.models[0].images[0],
      quantity: 1,
      unitsInStock: product.models[0].unitsStock,
    };
  }

  function addToCart(productId) {
    const prevCartItem = cartProducts.find(
      (product) => product._id === productId,
    );
    const foundProduct = products.find((product) => product._id === productId);

    if (prevCartItem) {
      const updatedCartItems = cartProducts.map((item) => {
        if (item._id !== productId) {
          return item;
        }

        if (item.quantity >= item.unitsInStock) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });

      setCartProducts(updatedCartItems);
      console.log(cartProducts);
      return;
    }

    const updatedProduct = buildNewCartItem(foundProduct);

    setCartProducts((prevState) => [...prevState, updatedProduct]);
    console.log(cartProducts);

    if (cartProducts) {
      setIsCheckoutDisabled(false);
    }
  }

  function handleChange(event, productId) {
    const updatedCartItems = cartProducts.map((item) => {
      if (item._id === productId && item.quantity <= item.unitsInStock) {
        return {
          ...item,
          quantity: Number(event.target.value),
        };
      }

      return item;
    });

    setCartProducts(updatedCartItems);
  }

  function handleRemove(productId) {
    const updatedCartItems = cartProducts.filter(
      (item) => item._id !== productId,
    );

    setCartProducts(updatedCartItems);

    if (cartProducts.length === 1) {
      setIsCheckoutDisabled(true);
    }
  }

  return (
    <>
      <Router>
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
          <shoppingCart.Provider
            value={{
              cartProducts: cartProducts,
              isCheckoutDisabled: isCheckoutDisabled,
              addToCart: addToCart,
              handleChange: handleChange,
              handleRemove: handleRemove,
            }}
          >
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/products" render={() => <ProductPage />} />
              <Route path="/user-pwd-change" component={ChangePasswordPage} />
              <Route path="/sign-up" render={() => <SignUpPage />} />
              <Route path="/product-dashboard" component={ProductDashboard} />
              <Route path="/shipping-info" render={() => <ShippingInfo />} />
              <Route
                path="/shipping-method"
                render={() => <ShippingMethod />}
              />
              <HunelProvider config={hunel}>
                <Route
                  path="/payment-method"
                  render={() => <PaymentMethod />}
                />
              </HunelProvider>
              <Route path="/preview-order" render={() => <PreviewOrder />} />
              <Route path="/confirm-order" render={() => <ConfirmOrder />} />
            </Switch>
          </shoppingCart.Provider>
        </musicContext.Provider>
      </Router>
    </>
  );
}

export default App;
