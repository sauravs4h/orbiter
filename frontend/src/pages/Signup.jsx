import React, { useState } from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

//const api="http://localhost:8080"
const api="https://orbiter.onrender.com"

function Signup() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    mobile_no: "",
    password: "",
  });

  const handleInput = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    
  };

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      let payload=signupData;

      let resData=await axios.post(`${api}/user/signup`,payload);
      let result=resData.data
      alert(result.message)
      
      
    } catch (error) {
      alert(error.message)
    }
    navigate("/login"); 
  }
  return (
    <div>
      <Navbar />

      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={signupData.firstName}
              onChange={handleInput}
              placeholder="FirstName"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={signupData.lastName}
              onChange={handleInput}
              placeholder="lastName"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={signupData.userName}
              onChange={handleInput}
              placeholder="UserName"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signupData.email}
              onChange={handleInput}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile_no">Mobile Number</label>
            <input
              type="Number"
              id="mobile_no"
              name="mobile_no"
              value={signupData.mobile_no}
              onChange={handleInput}
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupData.password}
              onChange={handleInput}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
