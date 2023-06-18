import React from "react";
import Project from "../Project/Project";
import { webapps } from "./PortfolioItems";

export const WebApps = () => {
  return (
    <>
      {webapps.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
};
