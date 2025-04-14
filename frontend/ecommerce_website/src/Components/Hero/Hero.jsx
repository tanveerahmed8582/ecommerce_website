import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import women from "../../assets/p8.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals! Best Prices!</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" height=" 50px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img
            src={arrow_icon}
            alt=""
            height="30px"
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>

      <div className="hero-right">
        <img src={women} alt="" height="550px" />
      </div>
    </div>
  );
};

export default Hero;
