import React, { useContext, useState } from "react";
import "./Signin.css";
import SignUp from "./SignUp";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function Signin() {
  const { auth, setAuth } = useAuth();
  // const {setAuth } = useAuth();
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { Email, Password } = formData;
      const value = await axios.post(
        "http://localhost:4001/login",
        { Email, Password },
        config
      );

      console.log(value.data, 999);

      if (value.data.success) {
        console.log("Login Success");
        localStorage.setItem("authToken", value.data.token);
        const accessToken=value?.data?.token;                       
        const role=value?.data?.role;  
        console.log(Email,Password,role,accessToken,"values");    
        setAuth({
          Email: value.data.Email,
          Password: value.data.Password,
          role: value.data.role,
          accessToken: value.data.token,
        });
        
        // console.log("required auth",auth);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        // console.log(value,"value");
        // console.log( value.data.token," value.data.token");
        // if (value.data.role === "Admin") { 
        
        //   navigate("/admin");
        // } else {
        //   navigate("/");
        // }
        navigate(from,{replace:true});
      } else {
        setError(value.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = () => {
    setError("");
  };
  return (
    <div className="bg-black text-white">
         <div className="menu-circle"></div>
      <div className="main bg-black">
       
          <div className="form-signin ">
          <form
                onSubmit={handleLogin}
                autoComplete="off"
                className="pe-5 ps-5 pt-3 pb-5 "
              >
                <h3>Login Here</h3>

                <label className="signin-label" htmlFor="username">
                  Email
                </label>
                <input
                  className="signin-input"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  onFocus={handleInputChange}
                  required
                  value={formData.Email}
                  name="Email"
                />

                <label className="signin-label" for="password">
                  Password
                </label>
                <input
                  className="signin-input"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onFocus={handleInputChange}
                  required
                  value={formData.Password}
                  name="Password"
                />
                {error && (
                  <p className="mt-3" style={{ color: "red" }}>
                    {error}
                  </p>
                )}
                <button className="signin-button">Sign In</button>
                <p class="message">
                  Not registered?{" "}
                  <Link to={"/signup"}>
                    <a href="#">Sign Up</a>
                  </Link>{" "}
                </p>
              </form>
              </div>
              </div>
            </div>
          
  );
}

export default Signin;
