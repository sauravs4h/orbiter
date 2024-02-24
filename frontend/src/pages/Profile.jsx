import React from "react";
import "../css/Profile.css";

function Profile() {
  let firstName = "Saurav";
  let lastName = "Sharma";
  let userName = "sauravs4h";
  let email = "sauravs4h@gmail.com";
  let mobile_no = "7340165574";

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header-left">
          <img
            src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
            alt="saurav"
            className="profile-picture"
          />
        </div>
        <div className="profile-header-right">
          <div className="profile-header-top">
            <h3>{userName}</h3>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
          <div className="profile-header-middle">
            <span className="post-count">175 Posts</span>
            <span className="followers-count">224 Followers</span>
            <span className="following-count">782 Following</span>
          </div>
          <div className="profile-header-bottom">
            <h3>{firstName} {lastName}</h3>
            <h3>{email}</h3>
            <h3>{mobile_no}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
