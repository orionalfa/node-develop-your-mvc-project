import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./styles.css";

import { Grid } from "@material-ui/core/";

import ProductItem from "../../components/productItem";
import Cart from "../../components/Cart";
import { product } from "prelude-ls";
 function getProducts(){
  $.ajax({
    url:"http://localhost:4000/products",
    type:"GET",
    success:(res)=>{
      return res.data;
    }
  })
}

function ProductPage({ showShoppingCart }) {
  const [products, setProducts]=useState([]);
  const [isLoaded, setIsLoaded]=useState(false);
  useEffect(()=>{
   $.ajax({
    url:"http://localhost:4000/products",
    type:"GET",
    success:(res)=>{
      setProducts(res.data);
      setIsLoaded(true);
    }
  })
  },[])
  console.log(products)
  return (
    <main>

      <Cart showShoppingCart={showShoppingCart} />
      <Grid container className="product-page-grid">
      {/* {isLoaded ? ( */}
        {products.map((product, index) => (
          <Grid
            item
            p={10}
            xs={12}
            sm={6}
            md={3}
            key={index}
            className="product-page-product-container"
          >
            <ProductItem
              productTitle={product.title}
              description={product.description}
              price="300E"
              unitsInStock="units in stoK"
            ></ProductItem>
          
          </Grid>
        ))}
      {/* )} */}
      </Grid>
    </main>
  );
}

export default ProductPage;
