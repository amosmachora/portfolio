"use client";

import Link from "next/link";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { Project as ProjectType } from "../../util/PortfolioItems";
import "./Project.css";
import { ProjectLanguages } from "./ProjectLanguages";

const Project = ({ project }: { project: ProjectType }) => {
  const screenSize = useScreenSize();

  const [toolTipMessage, setToolTipMessage] = useState<
    null | "Large screens only" | "Fully responsive!"
  >(null);

  return (
    <div className="project text-black border-b-2 border-orange pb-10 mb-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.images.at(0)}
        alt="test"
        className="max-h-[50vh] object-cover"
      />
      <div className="px-[3%] sm:px-[6%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="category">{project.category}</p>
            {/* <div
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
              </div> */}
          </div>
        </div>
        <ProjectLanguages
          className="flex sm:hidden w-full 
            justify-around my-6"
          languages={project.languages}
        />
        <Link
          href={`/portfolio/${project.title}`}
          className={`text-black text-[40px] ${
            project.live &&
            "cursor hover:text-orange transition-all duration-300"
          }`}
        >
          {project.title}
        </Link>
        <p className="project-description greyish">{project.description}</p>
        {project.openSourceLibraries && (
          <h4 className="h4 mt-5">Open Source libraries</h4>
        )}
      </div>
    </div>
  );
};

export default Project;
