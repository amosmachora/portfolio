"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Project as ProjectType } from "../util/PortfolioItems";

export const TinyProject = ({ project }: { project: ProjectType }) => {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/5 border-r-2 border-b border-orange">
      <Image
        src={project.images[0] as unknown as string}
        alt={project.title + "image"}
        className="w-full object-cover"
        width={1366}
        height={768}
      />
      <div className="flex justify-between my-2 items-center px-2 flex-wrap">
        <p className="text-sm">{project.title}</p>
        <div className="flex w-full md:w-auto justify-around my-3 md:my-0">
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="text-orange cursor-pointer mr-3"
            onClick={() => (project.live ? window.open(project.live) : null)}
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="cursor-pointer"
            onClick={() =>
              project.github ? window.open(project.github) : null
            }
          />
        </div>
      </div>
    </div>
  );
};
