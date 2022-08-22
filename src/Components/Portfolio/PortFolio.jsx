import React from "react";
import "./Portfolio.css";
import dice from "../../Assets/dice.png";
import { portFolioItems } from "./PortfolioItems";

const PortFolio = () => {
  return (
    <div className="portfolio">
      <div className="dice">
        <img src={dice} alt="Dice" />
      </div>
      <h1 className="large-heading">
        Latest <br />
        Portfolio
      </h1>
    </div>
  );
};

export default PortFolio;
