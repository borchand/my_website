import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';

import "./home.css";

export default function Index() {

  return (
    <div className="gradient-background">
      <div className="main-container">
        <div className="profile">
          <div className="profile-photo"></div>
        </div>
        <div className="profile-typewriter">
          Hi, I'm&nbsp;
          <Typewriter
              words={['Sebastian', 'a data scientist student', 'a programmer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
        </div>
        <div className="profile-social">
            <SocialIcon url="https://www.linkedin.com/in/sebastian-borch-andersen" fgColor="#F4F9F9"/>
            <SocialIcon url="https://github.com/borchand" fgColor="#F4F9F9"/>
        </div>
      </div>
    </div>

    
  );
}

