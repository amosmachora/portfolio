"use client";

import { SanityProjectType } from "@/util/utils";
import {
  faDisplay,
  faTabletScreenButton,
  faMobileScreen,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const ProjectResponsivenessIndicator = ({
  project,
}: {
  project: SanityProjectType;
}) => {
  const [toolTipMessage, setToolTipMessage] = useState<
    null | "Large screens only" | "Fully responsive!"
  >(null);

  return (
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
          <FontAwesomeIcon icon={faTabletScreenButton} className="mr-2" />
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
  );
};
