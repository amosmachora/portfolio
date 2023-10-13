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
      <div className="w-full h-full z-50">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="aspect-video w-11/12 sm:w-1/2 sm:h-1/2 center-absolutely"
        ></iframe>
      </div>
    </Overlay>
  );
};
