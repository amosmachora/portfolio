import React from "react";
import { Overlay } from "./Overlay";

export const Video = ({
  id,
  onClick,
}: {
  id: string;
  onClick?: () => void;
}) => {
  return (
    <Overlay onClick={onClick}>
      <div className="w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-1/2 h-1/2 center-absolutely"
        ></iframe>
      </div>
    </Overlay>
  );
};
