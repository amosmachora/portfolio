import React, { useState } from "react";
import "./Project.css";
import { Cube } from "../Cube";
import {
  faCaretLeft,
  faCaretRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Project as ProjectType } from "../Portfolio/PortfolioItems";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ project }: { project: ProjectType }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const changeShownImage = (direction: "positive" | "negative") => {
    const isPositiveDirection = direction === "positive";
    const lastIndex = project.images.length - 1;

    setImageIndex((prev) =>
      isPositiveDirection
        ? prev === lastIndex
          ? 0
          : prev + 1
        : prev === 0
        ? lastIndex
        : prev - 1
    );
  };

  return (
    <div className="project w-[49%] text-black border-b-2 border-orange pb-10 mb-10">
      <div className="relative overflow-hidden h-[320px] w-full">
        {project.images.length > 1 && (
          <>
            <Cube
              icon={faCaretLeft}
              onClick={() => changeShownImage("negative")}
              className="z-50 absolute h-6 w-6 top-1/2 translate-x-1/2 left-0 text-white bg-orange cursor-pointer"
            />
            <Cube
              icon={faCaretRight}
              onClick={() => changeShownImage("positive")}
              className="z-50 absolute h-6 w-6 top-1/2 translate-x-1/2 right-4 text-white bg-orange cursor-pointer"
            />
          </>
        )}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <motion.img
            src={project.images[imageIndex]}
            alt="Project"
            className="w-full cursor-pointer h-full object-cover"
          />
        </a>
      </div>
      <div className="px-[6%]">
        <div className="flex align-center space-between">
          <p className="category">{project.category}</p>
          <div className="gap-x-2 align-center flex">
            {project.languages.map((language) => (
              <FontAwesomeIcon icon={language} />
            ))}
          </div>
          <div className="flex align-center gap-x-2">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="hover:text-orange"
              />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-orange" />
            </a>
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFigma} className="hover:text-orange" />
              </a>
            )}
          </div>
        </div>
        <a href={project.live} target="_blank" rel="noreferrer">
          <h2 className="project-title cursor">{project.title}</h2>
        </a>
        <p className="project-description greyish">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
