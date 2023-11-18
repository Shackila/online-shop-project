import React from "react";
import "./index.css";
import LoginPageSvg from "./images/fp.svg";

const MottoCover = () => {
  return (
    <div>
      <div className="p-2.5 md:p-3 bg-mango px-20 md:px-24 shadow-lg">
        <div className="text-frog text-sm md:text-xl text-center font-serif pt-3 font-semibold">
          Carry your choices everywhere: A store in your pocket!
        </div>
        <div className="w-48 md:w-80 my-8 m-auto">
          <img src={LoginPageSvg} alt="SVG" className="py-0" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default MottoCover;
