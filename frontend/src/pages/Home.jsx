import React from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import Userauth from "../components/Userauth";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>Home Page</h1>
      </div>
      
    </div>
  );
}

export default Home;
