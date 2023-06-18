import React from "react";
import Project from "../Project/Project";
import { frontendMentorProjects } from "./PortfolioItems";

export const FrontendMentor = () => {
  return (
    <>
      {frontendMentorProjects.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
};
