import React from "react";
import erro from "../assets/erro.png";
import "../index.css";

const ErroPage = () => {
  return (
    <div className="erro">
      <div className="left">
        <h1 className="h1erro"> ERROR 404.</h1>
        <h3 className="h3erro">
          <span className="spanerro"> Sorry.</span> We can't find the page
          <br />
          that you're looking for.
        </h3>
      </div>
      <div className="right">
        <img src={erro} alt="erroplanet" className="erroimg" />
      </div>
    </div>
  );
};

export default ErroPage;
