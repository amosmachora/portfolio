import React from "react";
import Project from "../Project/Project";
import { websites } from "./PortfolioItems";

export const Websites = () => {
  return (
    <>
      {websites.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
};
