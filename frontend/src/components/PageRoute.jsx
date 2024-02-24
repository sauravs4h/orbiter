import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Privatepage from "../pages/Privatepage";
import Userauth from "./Userauth";
import Profile from "../pages/Profile";

function PageRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      {/* <Route path="/profile" element={<Userauth children={<Profile/>}/>}/> */}
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default PageRoute




