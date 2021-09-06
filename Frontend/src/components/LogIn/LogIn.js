import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import "./styles.css";

export default function LogIn(showLogin) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userExistData, setuserExistData ]=useState({
    email:"",
    pass:""
  })
  const [isLoggedin, setisLoggedin] = useState(true);

  function showLogin() {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
  }
  function handleChangeExistingUser(e){
    setuserExistData({
      ...userExistData,
      [e.target.name] : e.target.value
    })
  }
  function LogInMethod(e) {
    e.preventDefault();
    $.ajax({
      url: "http://localhost:4000/users/sign-in",
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        email: userExistData.email,
        pass: userExistData.pass,
      }),
      success: (res) => {
        console.log(res);
        setisLoggedin(false);
      },
    });
  }

  if (showLoginModal) {
    $("#login-modal").css("display", "block");
  } else {
    $("#login-modal").css("display", "none");
  }

  // const isLoggedin = true;

  return (
    
    <div className="login-main-container">
    {isLoggedin ? (
      <>
    <Link className="login-button" to="/sign-up">
            Register
          </Link>
      <div>
        <a id="login-button" className="login-button" onClick={showLogin}>
          LogIn
        </a>

        <div id="login-modal" className="login-container">
          <form onSubmit={LogInMethod}>
          <div className="login-field">Email:</div>
          <div className="login-field">
            <input 
            name="email"
            defaultValue=""
            type="text" 
            onChange={handleChangeExistingUser} 
            />
          </div>
          <div className="login-field">Password:</div>
          <div className="login-field">
            <input 
            name="pass"
            defaultValue=""
            type="text" 
            onChange={handleChangeExistingUser} 
            />
          </div>
          <div className="login-field login-buttons">
            <button type="submit" className="btn btn-primary">Login</button>

          </div>
          </form>
        </div>
      </div>
      </>
      
      ) : (
        <Link className="login-button" to="/logout">
          Logout
        </Link>
       
      )}
    </div>
  );
}
