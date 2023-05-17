import React from "react";
import "./Project.css";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Project as ProjectType } from "../Portfolio/PortfolioItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousel from "nuka-carousel";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="project w-[49%] text-black border-b-2 border-orange pb-10 mb-10">
      <Carousel
        className="w-full h-40 cursor-grab"
        defaultControlsConfig={{
          nextButtonText: "N",
          prevButtonText: "P",
          pagingDotsStyle: {
            fill: "#ff5c00",
            marginRight: 4,
            marginLeft: 4,
          },
        }}
        enableKeyboardControls
        wrapAround
        adaptiveHeight
      >
        {project.images.map((image) => (
          <img
            src={image}
            alt="test"
            className="w-full min-h-[320px] max-h-[340px] object-cover"
          />
        ))}
      </Carousel>
      <div className="px-[6%]">
        <div className="flex align-center space-between">
          <p className="category">{project.category}</p>
          <div className="gap-x-2 align-center flex">
            {project.languages.map((language) => (
              <img
                src={language}
                alt="language"
                className="h-5 w-5 object-cover"
              />
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
        {project.openSourceLibraries && (
          <h4 className="h4 mt-5">Open Source libraries</h4>
        )}
      </div>
    </div>
  );
};

export default Project;
