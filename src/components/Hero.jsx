import React from "react";
import "../index.css";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="heropage">
      <div className="lefthero">
        <h1 className="h1hero">Do you believe in alien life ?</h1>
        <h2 className="h2hero">
          There are more than 5K of exoplanets in our solar system.
        </h2>
        <p className="phero">
          This means it's possible there is life in other planets. Check the
          other pages do learn more about.
        </p>
      </div>
      <div className="righthero">
        <img src={hero} alt="blueplanet" className="heroplanet" />
      </div>
    </div>
  );
};

export default Hero;
