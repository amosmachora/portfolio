import React, { useContext, useEffect } from "react";
import "./Portfolio.css";
import dice from "../../Assets/dice.png";
import { portFolioItems } from "./PortfolioItems";
import Project from "../Project/Project";
import { ReadMore } from "../Start/StartPage";
import ArrowWhite from "../../Assets/ArrowWhite.svg";
import { Context } from "../../App";
import { pageVariantsIn } from "../../Framer";
import { motion } from "framer-motion";

const PortFolio = () => {
  const { setSmallScreen } = useContext(Context);

  useEffect(() => {
    setSmallScreen(false);
    document.title = "Projects";
  }, []);
  return (
    <motion.div
      className="portfolio"
      variants={pageVariantsIn}
      initial="initial"
      animate="animate"
    >
      <div className="dice">
        <img src={dice} alt="Dice" />
      </div>
      <div className="flex space-between align-flex-end">
        <h1 className="large-heading">
          Latest <br />
          Portfolio
        </h1>
        <ReadMore link={"contact"} text={"Contact"} Arrow={ArrowWhite} />
      </div>
      <div className="projects flex space-between">
        {portFolioItems.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default PortFolio;
