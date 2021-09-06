import "./styles.css";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core/";
import { musicContext, shoppingCart } from "../../context";

// async function updateProduct(product) {
//   console.log(product._id);
//   console.log(product.title);
// }

export default function UserDashboard() {
  const { users, removeUser, updateProduct } =
    useContext(musicContext);

  if (!users) return null;

  const usersList = users.map((user, index) => (
    <tr key={uuidv4()}>
      <td key={uuidv4()}>{user.name}</td>
      <td key={uuidv4()}>{user.email}</td>
      <td key={uuidv4()}>{user.cart[0]}</td>
      {/* <td key={uuidv4()}>{users.models[0].name}</td>
      <td key={uuidv4()}>{users.models[0].price}</td>
      <td key={uuidv4()}>{users.models[0].modelDescription}</td>
      <td key={uuidv4()}>{users.models[0].unitsStock}</td>
      <td key={uuidv4()}>{users.models[0].images}</td> */}
      <td key={uuidv4()}>
        <button onClick={() => updateProduct(user)}>Update</button>
      </td>
      <td key={uuidv4()}>
        <button
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