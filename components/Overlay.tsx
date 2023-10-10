"use client";

import { motion } from "framer-motion";
import React from "react";

export const Overlay = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      className="fixed top-0 right-0 left-0 inset-0 flex items-center justify-center z-40 bg-black bg-opacity-30 h-screen w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
