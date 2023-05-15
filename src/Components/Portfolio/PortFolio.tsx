import React, { useEffect } from "react";
import "./Portfolio.css";
import { portFolioItems } from "./PortfolioItems";
import Project from "../Project/Project";
import { ReadMore } from "../ReadMore";
import { motion } from "framer-motion";
import { dice } from "../../Assets/assets";
import { pageVariantsIn } from "../../Framer";

const PortFolio = () => {
  useEffect(() => {
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
      <div className="latest-portfolio flex space-between align-flex-end">
        <h1 className="large-heading">
          Latest <br />
          Projects
        </h1>
        <ReadMore link={"contact"} text={"Contact"} />
      </div>
      <div className="projects flex justify-between bg-white w-full flex-wrap px-[2%] mt-[100px]">
        {portFolioItems.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default PortFolio;
