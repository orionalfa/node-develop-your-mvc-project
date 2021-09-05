import "./styles.css";
import React, { useContext, useState } from "react";
import { musicContext, shoppingCart } from "../../context";
import { useParams } from "react-router-dom";

export default function UpdateUserForm() {
    const { users, updateProduct } =
    useContext(musicContext);
    const {id} = useParams();
    const choosenUser = users.find(user=>user._id===id)
    console.log(choosenUser);
return (
<main>   
<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input 
    type="email" 
    className="form-control" 
    id="inputEmail4"
    defaultValue={choosenUser.email} 
    />
  </div>
  
  <div className="col-12">
    <label for="inputAddress" className="form-label">Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="inputAddress" 
    defaultValue={choosenUser.name}
    />
  </div>
  {choosenUser.products.map((product)=>{
      return(
        <div className="col-12">
        <label for="inputAddress2" className="form-label">Product</label>
        <input 
        type="text" 
        className="form-control" 
        id="inputAddress2" 
        defaultValue={product.title}
         />
      </div>
      )
  })}


  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
</main> 
);
}