import { useState } from "react";
import { Overlay } from "./Overlay";
import ReactPlayer from "react-player/youtube";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Video = ({
  id,
  onClick,
}: {
  id: string;
  onClick?: () => void;
}) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Overlay onClick={onClick}>
      <div className="w-11/12 md:w-1/2 center-absolutely aspect-video absolute -z-20 top-0 left-0">
        <ReactPlayer
          url={id}
          className="react-player"
          width="100%"
          height="100%"
          playing={isShowing}
          loop
          controls={true}
          onReady={() => setIsShowing(true)}
        />
      </div>
      {!isShowing && (
        <div className="w-11/12 md:w-1/2 center-absolutely aspect-video absolute -z-20 top-0 left-0">
          <FontAwesomeIcon
            icon={faSpinner}
            className="h-5 w-5 center-absolutely text-orange"
            spin
          />
        </div>
      )}
    </Overlay>
  );
};
