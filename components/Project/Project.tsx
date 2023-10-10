"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCaretDown,
  faDisplay,
  faMobileScreen,
  faPlay,
  faTabletScreenButton,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "nuka-carousel";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { Project as ProjectType } from "../../util/PortfolioItems";
import "./Project.css";
import { ProjectLanguages } from "./ProjectLanguages";

const Project = ({ project }: { project: ProjectType }) => {
  const { setCurrentYoutubeId, setSmallScreenErrorModalLink } = useGlobalData();
  const screenSize = useScreenSize();

  const [toolTipMessage, setToolTipMessage] = useState<
    null | "Large screens only" | "Fully responsive!"
  >(null);

  const handleRedirect = () => {
    if (project.live) {
      if (project.desktopOnly) {
        if (screenSize === "sm" || screenSize === "md") {
          setSmallScreenErrorModalLink(project.live!);
        } else {
          window.open(project.live);
        }
      } else {
        window.open(project.live);
      }
    }
  };

  return (
    <>
      <div className="project w-[49%] text-black border-b-2 border-orange pb-10 mb-10">
        <Carousel
          className="cursor-grab w-full"
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
          {project.images.map((image, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image as unknown as string}
              alt="test"
              className="max-h-[50vh] object-cover mx-auto"
              key={i}
            />
          ))}
        </Carousel>
        <div className="px-[3%] sm:px-[6%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="category">{project.category}</p>
              <div
                className="flex relative"
                onMouseEnter={() => {
                  if (project.desktopOnly) {
                    setToolTipMessage("Large screens only");
                  } else {
                    setToolTipMessage("Fully responsive!");
                  }
                }}
                onMouseLeave={() => setToolTipMessage(null)}
              >
                {project.desktopOnly ? (
                  <FontAwesomeIcon icon={faDisplay} className="mx-2" />
                ) : project.category === "Mobile App" ? null : (
                  <>
                    <FontAwesomeIcon icon={faDisplay} className="mx-2" />
                    <FontAwesomeIcon
                      icon={faTabletScreenButton}
                      className="mr-2"
                    />
                    <FontAwesomeIcon icon={faMobileScreen} />
                  </>
                )}
                {toolTipMessage && (
                  <p className="absolute -top-5 -translate-y-full text-center text-sm z-50 w-min text-orange font-medium bg-white p-2 rounded border-orange border">
                    {toolTipMessage}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2"
                    />
                  </p>
                )}
              </div>
            </div>
            <ProjectLanguages
              className="hidden sm:flex"
              languages={project.languages}
            />
            <div className="flex items-center gap-x-2">
              {project.hasVideo && (
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-orange cursor-pointer"
                  onClick={() => setCurrentYoutubeId(project.youtubeId!)}
                />
              )}
              {project.live && (
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="hover:text-orange cursor-pointer"
                  onClick={handleRedirect}
                />
              )}
              {project.github && (
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
              )}
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
          <ProjectLanguages
            className="flex sm:hidden w-full 
            justify-around my-6"
            languages={project.languages}
          />
          <h2
            className={`text-black text-[40px] ${
              project.live && "cursor hover:text-orange"
            }`}
            onClick={handleRedirect}
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
