import { Variants } from "framer-motion";

export const svgVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { duration: 1, delay: 1 },
  },
};

export const socialsVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

export const navMiddleVariants = {
  initial: {
    y: -250,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 120,
    },
  },
};

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const pageVariantsIn: Variants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
  },
};
