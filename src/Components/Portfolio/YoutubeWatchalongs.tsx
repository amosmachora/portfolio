import React from "react";
import Project from "../Project/Project";
import { watchalongs } from "./PortfolioItems";

export const YoutubeWatchalongs = () => {
  return (
    <>
      {watchalongs.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
};
