import React from "react";
import { motion } from "framer-motion";
import { svgVariants } from "../../Framer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export const Logo = () => {
  return (
    <motion.div
      className="w-12 h-12"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <FontAwesomeIcon icon={faTerminal} className="w-full h-full" />
    </motion.div>
  );
};
