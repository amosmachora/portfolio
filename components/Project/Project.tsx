"use client";

import Link from "next/link";
import { Project as ProjectType } from "../../util/PortfolioItems";
import "./Project.css";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="project text-black border-b-2 border-orange pb-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.images.at(0)}
        alt="test"
        className="max-h-[50vh] object-cover"
      />
      <div className="px-[3%] sm:px-[6%]">
        <p className="category">{project.category}</p>
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
      </div>
    </div>
  );
};

export default Project;
