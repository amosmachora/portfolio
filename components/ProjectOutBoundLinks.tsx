"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { SanityProjectType } from "@/util/utils";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { RedirectFromSmallScreenModal } from "./RedirectFromSmallScreenModal";

export const ProjectOutBoundLinks = ({
  project,
}: {
  project: SanityProjectType;
}) => {
  const screenSize = useScreenSize();

  const [smallScreenErrorModalLink, setSmallScreenErrorModalLink] = useState<
    null | string
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
      <div className="my-14">
        {project.live && (
          <div className="flex items-center gap-x-5 justify-center cursor-pointer font-semibold text-sm bg-orange hover:bg-opacity-70 transition-all w-3/4 sm:w-1/4 px-5 py-3 rounded-full mx-auto text-white">
            <span>Live</span>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              onClick={handleRedirect}
            />
          </div>
        )}
        {project?.github && (
          <div
            onClick={() => window.open(project.github)}
            className="flex items-center gap-x-5 justify-center cursor-pointer font-semibold text-sm bg-orange hover:bg-opacity-70 transition-all w-3/4 sm:w-1/4 px-5 py-3 rounded-full mx-auto text-white my-5"
          >
            <span>Source Code</span>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        )}
        {project?.figma && (
          <div
            onClick={() => window.open(project.figma)}
            className="flex items-center gap-x-5 justify-center cursor-pointer font-semibold text-sm bg-orange hover:bg-opacity-70 transition-all w-3/4 sm:w-1/4 px-5 py-3 rounded-full mx-auto text-white my-5"
          >
            <span>Design File</span>
            <FontAwesomeIcon icon={faFigma} />
          </div>
        )}
      </div>
      <RedirectFromSmallScreenModal
        close={() => setSmallScreenErrorModalLink(null)}
        link={smallScreenErrorModalLink}
      />
    </>
  );
};
