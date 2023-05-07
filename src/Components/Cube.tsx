import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export const Cube = ({
  onClick,
  icon,
  className,
}: {
  onClick: () => void;
  icon: IconDefinition;
  className?: string;
}) => {
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="text-black center-absolutely" />
    </div>
  );
};
