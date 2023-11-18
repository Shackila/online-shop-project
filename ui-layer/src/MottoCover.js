import React from "react";
import "./MottoCover.css";
import LoginPageSvg from "./images/fp.svg";

const MottoCover = () => {
  return (
    <div className="box">
      <div className="motto-cover">
        <div className="motto-text">
          Carry your choices everywhere: A store in your pocket
        </div>
        <div className="image-container">
          <img src={LoginPageSvg} alt="SVG" className="responsive-image" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default MottoCover;
