import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import "./styles.css";

export default function LogIn(showLogin) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  function showLogin() {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
  }

  if (showLoginModal) {
    $("#login-modal").css("display", "block");
  } else {
    $("#login-modal").css("display", "none");
  }

  return (
    <div className="login-main-container">
      <Link className="login-button" to="/sign-up">
        Register
      </Link>
      <div>
        <a id="login-button" className="login-button" onClick={showLogin}>
          LogIn
        </a>
        <div id="login-modal" className="login-container">
          <div className="login-field">Username:</div>
          <div className="login-field">
            <input type="text" />
          </div>
          <div className="login-field">Password:</div>
          <div className="login-field">
            <input type="text" />
          </div>
          <div className="login-field login-buttons">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
