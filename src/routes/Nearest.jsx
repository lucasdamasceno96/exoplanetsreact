import React from "react";
import proximab from "../assets/proximab.png";
import teengarden from "../assets/teengarden.png";
import "../index.css";

const Nearest = () => {
  return (
    <div className="nearestpage">
      <ul className="ulnearest">
        <li className="litext">
          <h3 className="h3text"> Proxima Centauri b </h3>
          <p className="ptext"> distance of about 4.2 ly </p>
        </li>
        <l1>
          <img className="planets" alt="proximab" src={proximab} />
        </l1>
      </ul>
      <ul className="ulnearest">
        <li className="litext">
          <h3 className="h3text"> Teegarden b </h3>
          <p className="ptext"> distance of about 12 ly </p>
        </li>
        <l1>
          <img className="planets" alt="proximab" src={proximab} />
        </l1>
      </ul>
    </div>
  );
};

export default Nearest;
