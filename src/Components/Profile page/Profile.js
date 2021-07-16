import React from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";
import banner_profile from "../../assets/banner-profile.svg";
import profile_image_1 from "../../assets/banner-profile-img-1.svg"
import profile_image_2 from "../../assets/banner-profile-img-2.svg"

function Profile() {
  return (
    <div className="profile">
      <div className="bgimage__profile" style={{ backgroundImage: banner_profile}}>
        <img src={profile_image_1} className="profile_image_1" alt=""/>
        <img src={profile_image_2} className="profile_image_2" alt=""/>
        <h1>Choose Profile</h1>
        <h3>Choose how you want to interact on the website</h3>
        <br></br>
        <br></br>


        <div className="buttons">
          <Link to="/signup?user_type=startup">
            <button
              className="button__startup"
              type="submit"
              size="lg"
            >STARTUP
                  </button>
          </Link>

          <Link to="/signup?user_type=investor">
            <button
              className="button__investor"
              type="submit"
              size="lg"
            >INVESTOR
                  </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile;
