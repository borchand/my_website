import * as React from 'react';
import './Submarine.css';

const Submarine = () => {
  return (
    <div className="seaContainer">
  <div className="submarine__container">
    <div className="light"></div>
    <div className="submarine__periscope"></div>
    <div className="submarine__periscope-glass"></div>
    <div className="submarine__sail">
      <div className="submarine__sail-shadow dark1">
      </div>
      <div className="submarine__sail-shadow light1"></div>
      <div className="submarine__sail-shadow dark2"></div>
    </div>
    <div className="submarine__body">
      <div className="submarine__window one">

      </div>
      <div className="submarine__window two">

      </div>
      <div className="submarine__shadow-dark"></div>
      <div className="submarine__shadow-light"></div>
      <div className="submarine__shadow-arcLight"></div>
    </div>
    <div className="submarine__propeller">
      <div className="propeller__perspective">
      <div className="submarine__propeller-parts darkOne"></div>
      <div className="submarine__propeller-parts lightOne"></div>
      </div>        
    </div>
  </div>
  <div className="bubbles__container">
    <span className="bubbles bubble-1"></span>
    <span className="bubbles bubble-2"></span>
    <span className="bubbles bubble-3"></span>
    <span className="bubbles bubble-4"></span>
  </div>
  <div className="ground__container">
    <div className="ground ground1">
      <span className="up-1"></span>
      <span className="up-2"></span>
      <span className="up-3"></span>
      <span className="up-4"></span>
      <span className="up-5"></span>
      <span className="up-6"></span>
      <span className="up-7"></span>
      <span className="up-8"></span>
      <span className="up-9"></span>
      <span className="up-10"></span>
    </div>
    <div className="ground ground2">
      <span className="up-1"></span>
      <span className="up-2"></span>
      <span className="up-3"></span>
      <span className="up-4"></span>
      <span className="up-5"></span>
      <span className="up-6"></span>
      <span className="up-7"></span>
      <span className="up-8"></span>
      <span className="up-9"></span>
      <span className="up-10"></span>
      <span className="up-11"></span>
      <span className="up-12"></span>
      <span className="up-13"></span>
      <span className="up-14"></span>
      <span className="up-15"></span>
      <span className="up-16"></span>
      <span className="up-17"></span>
      <span className="up-18"></span>
      <span className="up-19"></span>
      <span className="up-20"></span>
    </div>
  </div>
</div>

  )
}

export default Submarine;