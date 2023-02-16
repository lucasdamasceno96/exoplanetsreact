import React from "react";

import teengarden from "../assets/teengarden.png";
import "../index.css";

const Best = () => {
  return (
    <div className="nearestpage">
      <ul className="ulnearest">
        <li className="litext">
          <h3 className="h3text"> TRAPPIST-1b,</h3>
          <p className="ptext"> distance of about 40 ly </p>
        </li>
        <l1>
          <img className="planets" alt="proximab" src={teengarden} />
        </l1>
      </ul>
      <ul className="ulnearest">
        <li className="litext">
          <h3 className="h3text"> Kepler-452b </h3>
          <p className="ptext"> distance of about 1800 ly </p>
        </li>
        <l1>
          <img className="planets" alt="proximab" src={teengarden} />
        </l1>
      </ul>
    </div>
  );
};

export default Best;
