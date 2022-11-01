import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';
import Submarine  from '../Components/Submarine.js';
import "./home.css";
import image from "../Images/profile.jpeg";

export default function Index() {

  return (
    <div className="home">
      <div className="submarine">
        <Submarine />
      </div>
      <div className="home-container">
        <div className="profile">
          <div className="profile-photo"></div>
          <p>Sebastian Borch Andersen</p>
        </div>
        <div className="profile-social">
          <SocialIcon url="https://www.linkedin.com/in/sebastian-borch-andersen" fgColor="#F4F9F9"/>
          <SocialIcon url="https://github.com/borchand" fgColor="#F4F9F9"/>
        </div>
      </div>
    </div>
  );
}

