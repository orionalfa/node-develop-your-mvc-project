import React, { useState } from "react";
import $ from "jquery";

import "./styles.css";

export default function LogIn(showLogin) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userEmail, setUseremail] = useState();
  const [userPassword, setPassword] = useState();

  function showLogin() {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
  }

  function LogInMethod() {
    $.ajax({
      url: "http://localhost:4000/users/sign-in",
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        email: userEmail,
        pass: userPassword,
      }),
      success: (res) => {
        console.log(res);
      },
    });
  }

  if (showLoginModal) {
    console.log("mostrar");
    $("#login-modal").css("display", "block");
  } else {
    console.log("ocultar");
    $("#login-modal").css("display", "none");
  }

  return (
    <div className="login-main-container">
      <a className="login-button" href="/sign-up">
        Register
      </a>
      <div>
        <a id="login-button" className="login-button" onClick={showLogin}>
          LogIn
        </a>
        <div id="login-modal" className="login-container">
          <div className="login-field">Username:</div>
          <div className="login-field">
            <input type="text" onChange={(e) => setUseremail(e.target.value)} />
          </div>
          <div className="login-field">Password:</div>
          <div className="login-field">
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="login-field login-buttons">
            <button onClick={() => LogInMethod()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
