import React from "react";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div>
        <h3 onClick={() => navigate("/")}>Orbiter</h3>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>login</button>
        <button onClick={() => navigate("/private")}>Private Page</button>
      </div>
    </nav>
  );
}

export default Navbar;
