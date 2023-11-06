"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Video } from "./Video";

export const ProjectPlayButton = ({ link }: { link: string }) => {
  const [videoURL, setVideoURL] = useState<null | string>(null);

  return (
    <>
      <div
        className="text-white text-sm bg-orange flex items-center gap-x-4 py-3 px-5 cursor-pointer rounded-full hover:opacity-50 transition-opacity duration-300"
        onClick={() => setVideoURL(link)}
      >
        <p>Watch Video</p>
        <FontAwesomeIcon icon={faPlay} />
      </div>
      {videoURL && <Video id={videoURL} onClick={() => setVideoURL(null)} />}
    </>
  );
};
