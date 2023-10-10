"use client";

import { socialsVariants } from "@/framer/Framer";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const Socials = ({ className }: { className: string }) => {
  return (
    <motion.div
      className={`socials flex justify-center items-center flex-wrap gap-x-1 ${className}`}
      variants={socialsVariants}
      initial="initial"
      animate="animate"
    >
      <a
        href="https://github.com/amosmachora"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="ease-in-out hover:text-orange w-4 h-4"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/amos-machora"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="ease-in-out hover:text-orange w-4 h-4"
        />
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/16018684/amos-machora"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faStackOverflow}
          className="ease-in-out hover:text-orange w-4 h-4"
        />
      </a>
      <a
        href="https://medium.com/@amosmachora"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faMedium}
          className="ease-in-out hover:text-orange w-4 h-4"
        />
      </a>
      <a
        href="https://www.codewars.com/users/amosmachora"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer block"
      >
        <FontAwesomeIcon
          icon={faCode}
          className="ease-in-out hover:text-orange w-4 h-4"
        />
      </a>
      <a
        href="https://www.frontendmentor.io/profile/AmohPrince"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          height="2500"
          viewBox="136.85 110.11 225.33 222.9"
          width="1961"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 frontend-mentor"
        >
          <path d="m254.2 123v155.67" fill="#ffffff" />
          <path
            d="m244.2 123v155.67c0 12.87 20 12.89 20 0v-155.67c0-12.87-20-12.89-20 0zm112.54 44.79c-20 9.33-40 18.67-60 28-1.67.78-1.6 3.52 0 4.32 19.33 9.67 38.67 19.33 58 29 2.87 1.43 5.41-2.88 2.52-4.32-19.33-9.67-38.67-19.33-58-29v4.32c20-9.33 40-18.67 60-28 2.92-1.36.38-5.67-2.52-4.32z"
            fill="#ffffff"
          />
          <path
            d="m138.18 223.14c11.34 53.74 54.41 96.35 108.32 107.04 9.04 1.79 18.28 2.8 27.5 2.82 6.43.01 6.44-9.99 0-10-50.08-.06-96.35-29.49-117.24-75.11-4.01-8.75-6.96-18-8.94-27.41-1.33-6.29-10.97-3.63-9.64 2.66z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </motion.div>
  );
};
