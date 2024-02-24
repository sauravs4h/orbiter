import React from "react";
import "../css/Profile.css"

function Profile() {
  let firstName = "saurav";
  let lastName = "Sharma";
  let userName = "sauravs4h";
  let email = "sauravs4h@gmail.com";
  let mobile_no = 7340165574;

  return (
    <div>
      <div className="header">
        <div className="headerleft">
          <img
            src="https://instagram.fjai1-4.fna.fbcdn.net/v/t51.2885-19/146842709_412203473393518_7977264176446510686_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fjai1-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=iYBIfbmOFe4AX95sLZ2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDa1b9htPnCrJ3-ABthb7b_-Qs3fYqAqj-ZxSfxu68C8A&oe=65DED665&_nc_sid=8b3546"
            alt="saurav"
          />
        </div>
        <div className="headerRight">
          <div className="headerRightline1">
            <h3>{userName}</h3>
            <button>Edit Profile</button>
          </div>
          <div className="headerRightline2">
            <h3>175 Post</h3>
            <h3>224 followers</h3>
            <h3>782 following</h3>
          </div>
          <h3>
            {firstName} {lastName}
          </h3>
          <h3>{email}</h3>
          <h3>{mobile_no}</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
