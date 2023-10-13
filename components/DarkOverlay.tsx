"use client";

import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export const DarkOverlay = ({
  children,
  close,
  className,
}: {
  children?: React.ReactNode;
  close?: () => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={twMerge(
        "w-full h-full absolute top-0 right-0 z-30 bg-black bg-opacity-25",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      onClick={close}
    >
      {children}
    </motion.div>
  );
};
