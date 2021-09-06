import "./styles.css";
import React, { useContext, useState } from "react";
import { musicContext, shoppingCart } from "../../context";
import { useParams } from "react-router-dom";
import $ from "jquery";

export default function UpdateUserForm() {
  const { users } =useContext(musicContext);
  const {id} = useParams();
  const choosenUser = users.find(user=>user._id===id)
  const [usersUpdate, setUsersUpdate] = useState(choosenUser);


  function handleChangeUpdate(e){
    setUsersUpdate({
      ...usersUpdate,
      
      [e.target.name]:e.target.value,
      
    })
  }

  async function updateUser(e) {

    e.preventDefault()

    console.log(usersUpdate);
    $.ajax({
      url: `http://localhost:4000/users/${id}`,
      type: "PATCH",
      contentType: "application/json; charset=utf-8",
      data:JSON.stringify(usersUpdate),
      success: (res) => {
        console.log(res);
        //window.location.reload();
      },
    });
  }
return (
<main>   
<form className="row g-3" onSubmit={updateUser}>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Name</label>
    <input
    name="name" 
    type="text" 
    className="form-control" 
    id="inputAddress" 
    defaultValue={choosenUser.name}
    onChange={handleChangeUpdate}
    />
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input 
    name="email"
    type="email" 
    className="form-control" 
    id="inputEmail4"
    defaultValue={choosenUser.email} 
    onChange={handleChangeUpdate}
    />
  </div>
  
  {choosenUser.products.map((product)=>{
      return(
        <div className="col-12">
        <label for="inputAddress2" className="form-label">Product</label>
        <input 
        name={`products${product._id}`}
        type="text" 
        className="form-control" 
        id="inputAddress2" 
        defaultValue={product._id}
        onChange={handleChangeUpdate}
        disabled="true"
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