import React, { useContext } from "react";
import "./Project.css";
import {
  faDisplay,
  faMobileScreen,
  faPlay,
  faTablet,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Project as ProjectType } from "../Portfolio/PortfolioItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousel from "nuka-carousel";
import { Context } from "../../App";

const Project = ({ project }: { project: ProjectType }) => {
  const { setCurrentYoutubeId } = useContext(Context);
  return (
    <>
      <div className="project w-[49%] text-black border-b-2 border-orange pb-10 mb-10">
        <Carousel
          className="cursor-grab"
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
            <div className="flex items-center">
              <p className="category">{project.category}</p>
              {project.desktopOnly ? (
                <FontAwesomeIcon icon={faDisplay} className="mx-2" />
              ) : project.category === "Mobile App" ? null : (
                <>
                  <FontAwesomeIcon icon={faDisplay} className="mx-2" />
                  <FontAwesomeIcon icon={faTablet} className="mr-2" />
                  <FontAwesomeIcon icon={faMobileScreen} />
                </>
              )}
            </div>
            <div className="gap-x-2 align-center flex">
              {project.languages.map((language) => (
                <img
                  src={language}
                  alt="language"
                  className="h-5 w-5 object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-x-2">
              {project.hasVideo && (
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-orange cursor-pointer"
                  onClick={() => setCurrentYoutubeId(project.youtubeId!)}
                />
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="hover:text-orange"
                  />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:text-orange"
                />
              </a>
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFigma}
                    className="hover:text-orange"
                  />
                </a>
              )}
            </div>
          </div>
          <h2
            className={`text-black text-[40px] ${
              project.live && "cursor hover:text-orange"
            }`}
            onClick={() => (project.live ? window.open(project.live) : null)}
          >
            {project.title}
          </h2>
          <p className="project-description greyish">{project.description}</p>
          {project.openSourceLibraries && (
            <h4 className="h4 mt-5">Open Source libraries</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
