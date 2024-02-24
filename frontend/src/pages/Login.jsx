import React, { useState, useEffect } from "react";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginRequest,
  loginRequestFailure,
  loginRequestSuccess,
} from "../redux/Auth/action";
import axios from "axios";

//const api="http://localhost:8080";
const api = "https://orbiter.onrender.com";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  let authData = useSelector((store) => {
    return store.authReducer;
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginRequest());

    try {
      let payload = data;
      let resData = await axios.post(`${api}/user/login`, payload);

      let result = resData.data;
      let token = result.token;

      dispatch(loginRequestSuccess(token));
      alert("Login Success");

      setData({ email: "", password: "" });
    } catch (error) {
      dispatch(loginRequestFailure());
      alert("Wrong credentials");
    }
  };

  return (
    <div id="loginpage">
      <div id="leftside">
        <img
          src="https://socilious.com/images/growth-analysis.gif"
          alt="Orbiter"
        />
      </div>
      <div id="rightside">
        <div className="login-form-container">
          <h2>Orbiter</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                placeholder="Email"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                placeholder="Password"
                required
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="goforsignup">
          <p>
            Don't have an account?{" "}
            <a onClick={() => navigate("/signup")}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
