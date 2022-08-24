import React from "react";
import "./Portfolio.css";
import dice from "../../Assets/dice.png";
import { portFolioItems } from "./PortfolioItems";
import Project from "../Project/Project";
import { ReadMore } from "../Start/StartPage";
import ArrowWhite from "../../Assets/ArrowWhite.svg";

const PortFolio = () => {
  return (
    <div className="portfolio">
      <div className="dice">
        <img src={dice} alt="Dice" />
      </div>
      <div className="flex space-between align-flex-end">
        <h1 className="large-heading">
          Latest <br />
          Portfolio
        </h1>
        <ReadMore link={"services"} text={"services"} Arrow={ArrowWhite} />
      </div>
      <div className="projects flex space-between">
        {portFolioItems.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortFolio;