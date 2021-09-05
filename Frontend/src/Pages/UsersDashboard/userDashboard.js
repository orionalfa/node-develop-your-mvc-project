import "./styles.css";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core/";
import { musicContext, shoppingCart } from "../../context";
import { Link } from "react-router-dom";


export default function UserDashboard() {
  const { users, removeUser } =
    useContext(musicContext);

  if (!users) return null;

  const usersList = users.map((user, index) => (
    <tr key={uuidv4()}>
      <td key={uuidv4()}>{user.name}</td>
      <td key={uuidv4()}>{user.email}</td>
      <td key={uuidv4()}>{
      <div key={uuidv4()}> 
      {
      user.products.map((product=>{
        {
        return(
        <div className="products_content" key={uuidv4()}>
        <p key={uuidv4()} >{product.title}</p>
        
      </div>
        )}
      }))}
      </div> 
      }
      </td>
      
      {/* <td key={uuidv4()}>{users.models[0].name}</td>
      <td key={uuidv4()}>{users.models[0].price}</td>
      <td key={uuidv4()}>{users.models[0].modelDescription}</td>
      <td key={uuidv4()}>{users.models[0].unitsStock}</td>
      <td key={uuidv4()}>{users.models[0].images}</td> */}
      <td key={uuidv4()}>
        <Link 
       
        to={`users-update/${user._id}`}>
        <button 
        className="btn btn-success"
        
        >
          Update
        </button>
        </Link>
      </td>
      <td key={uuidv4()}>
        <button 
          className="btn btn-danger"
          onClick={() => {
            removeUser(user);           
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  ));

  return (
    <main>
      <Grid item xs={12} sm={12} md={12}>
        <div className="grid-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>ShoppingCart</th>
                
              </tr>
            </thead>
            <tbody>{usersList}</tbody>
          </table>
        </div>
      </Grid>
    </main>
  );
}