import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate,useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
function StoreLogin() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/storelogin";

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        Name: "",
        Password: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
      };
      const handleInputChange = () => {
        setError("");
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
          const { Name, Password } = formData;
          
          const value = await axios.post(
            "http://localhost:4001/loginstore",
            { Name, Password },
            config
          );
    
          console.log(value.data, 999);
          if (value.data.success) {
            console.log("Login Success");
            localStorage.setItem("authToken", value.data.token);
            const accessToken=value?.data?.token;                       
            const role=value?.data?.role;  
               const Name= value.data.Name
            console.log(Name,role,accessToken,"values");    
            setAuth({
              Name:value.data.Name,
              role: value.data.role,
              accessToken: value.data.token,
            }); 
            if (value.data.role === "Store") { 
        
              navigate("/store");
            } else {
              navigate("/unauthorize");
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            navigate(from,{replace:true});
            // navigate(from,{replace:true});
          } else {
            setError(value.data.message);
          }
        }
        catch (error) {
          console.log(error);
        }
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
                <h3>Store Login</h3>

                <label className="signin-label" htmlFor="username">
                  Name
                </label>
                <input
                  className="signin-input"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  onFocus={handleInputChange}
                  required
                  value={formData.Name}
                  name="Name"
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
              </form>
              </div>
              </div>
            </div>
  )
}

export default StoreLogin