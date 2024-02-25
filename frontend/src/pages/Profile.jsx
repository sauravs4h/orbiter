import React, { useEffect, useState } from "react";
import "../css/Profile.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const { userName } = useParams();
  const api = "https://orbiter.onrender.com";

  const [userData, setUserData] = useState({
    firstName: "Saurav",
    lastName: "Sharma",
    userName: "sauravs4h",
    email: "sauravs4h@gmail.com",
    mobile_no: "7340165574",
  });

  useEffect(() => {
    let data = axios
      .get(`${api}/user/getuser/${userName}`)
      .then((res) => {
        let data = res.data.user;
        setUserData({firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        email: data.email,
        mobile_no: data.mobile_no,})
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(userName);

  let images = [
    "https://socilious.com/images/Networking.png",
    "https://socilious.com/images/Socilious-phone.png",
    "https://socilious.com/images/Entrechat.png",
    "https://socilious.com/images/Dinetrepreneur.jpg",
    "https://socilious.com/images/Virtual-Team.png",
    "https://socilious.com/images/Dinentrepreneurs-phone.png",
    "https://socilious.com/images/About.png",
    "https://socilious.com/images/growth-analysis.gif",
  ];

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
            <h3>{userData.userName}</h3>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
          <div className="profile-header-middle">
            <span className="post-count">175 Posts</span>
            <span className="followers-count">224 Followers</span>
            <span className="following-count">782 Following</span>
          </div>
          <div className="profile-header-bottom">
            <h3>
              {userData.firstName} {userData.lastName}
            </h3>
            <h3>{userData.email}</h3>
            <h3>{userData.mobile_no}</h3>
          </div>
        </div>
      </div>

      <div className="post-section">
        <h2 className="post-heading">Recent Posts</h2>
        <div className="post-grid">
          {images.map((el, index) => (
            <div key={index} className="post">
              <img src={el} alt={`Post ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
