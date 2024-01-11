import React, { useState } from "react";
import "./Signin.css";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
function Signin() {
 
  return (
    <div>
     
        <div className="video-bg">
        <video width="320" height="240" autoPlay muted loop>
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="main">
        <div className="header">
          <div className="menu-circle"></div>
        </div>
        <div className="wrapper">
          <div className="main-container">
            <div className="content-wrapper">
              <div className="content-section"></div>

              <form autoComplete="off" className="pe-5 ps-5 pt-3 pb-5 form-signin">
        <h3>Login Here</h3>

        <label className='signin-label'for="username">Username</label>
        <input className="signin-input" type="text" placeholder="Email" id="username"/>

        <label className='signin-label'for="password">Password</label>
        <input className="signin-input" type="password" placeholder="Password" id="password"/>
        <button className="signin-button">Sign In</button>
        <p class="message">Not registered? <Link to={'/signup'} ><a  href="#">Sign Up</a></Link> </p>
    </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Signin;
