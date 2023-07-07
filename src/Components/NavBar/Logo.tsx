import React from "react";
import { motion } from "framer-motion";
import { svgVariants } from "../../Framer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const redirect = useNavigate();
  return (
    <motion.div
      className="w-12 h-12"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      onClick={() => redirect("/")}
    >
      <FontAwesomeIcon icon={faTerminal} className="w-full h-full" />
    </motion.div>
  );
};
