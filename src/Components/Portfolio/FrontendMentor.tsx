import React from "react";
import Project from "../Project/Project";
import {
  frontendMentorProjects,
  extraFrontendMentorProjects,
} from "./PortfolioItems";
import { TinyProject } from "./TinyProject";

export const FrontendMentor = () => {
  return (
    <>
      {frontendMentorProjects.map((project) => (
        <Project project={project} />
      ))}
      <p className="text-orange mb-5 text-lg font-semibold">
        A bunch of mini frontend projects
      </p>
      <div className="text-black w-full flex flex-wrap">
        {extraFrontendMentorProjects.map((project) => (
          <TinyProject project={project} />
        ))}
      </div>
    </>
  );
};
