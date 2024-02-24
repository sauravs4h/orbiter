import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Privatepage from "../pages/Privatepage";
import Userauth from "./Userauth";

function PageRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/private" element={<Userauth children={<Privatepage/>}/>}/>
    </Routes>
  )
}

export default PageRoute




