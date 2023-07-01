import React, { useEffect } from "react";
import "./Portfolio.css";
import { ReadMore } from "../ReadMore";
import { motion } from "framer-motion";
import { assets } from "../../Assets/assets";
import { pageVariantsIn } from "../../Framer";
import { Link, Outlet, useLocation } from "react-router-dom";

const { dice } = assets;

const PortFolio = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  const { pathname } = useLocation();

  const currentPage = pathname.split("/")[pathname.split("/").length - 1];

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
      <div className="latest-portfolio flex space-between items-start">
        <h1 className="large-heading">
          Latest <br />
          Projects
        </h1>
        <ReadMore link={"contact"} text={"Contact"} />
      </div>
      <div className="flex justify-between md:w-1/2 mx-auto my-5 gap-x-4">
        <Link
          to="web-applications"
          className={`cursor-pointer pb-2 w-max ${
            (currentPage === "projects" ||
              currentPage === "web-applications") &&
            "border-b-2 border-orange"
          }`}
        >
          Web Apps & Websites
        </Link>
        <Link
          to="frontend-mentor"
          className={`cursor-pointer pb-2 w-max ${
            currentPage === "frontend-mentor" && "border-b-2 border-orange"
          }`}
        >
          Frontend Mentor
        </Link>
        {/* <Link
          to="websites"
          className={`cursor-pointer pb-2 w-max ${
            currentPage === "websites" && "border-b-2 border-orange"
          }`}
        >
          Landing pages
        </Link> */}
        <Link
          to="youtube-watchalongs"
          className={`cursor-pointer pb-2 w-max ${
            currentPage === "youtube-watchalongs" && "border-b-2 border-orange"
          }`}
        >
          Youtube Watchalongs
        </Link>
      </div>
      <div className="projects flex justify-between bg-white w-full flex-wrap px-[2%] mt-[100px]">
        <Outlet />
      </div>
    </motion.div>
  );
};

export default PortFolio;
