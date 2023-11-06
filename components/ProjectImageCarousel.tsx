"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import Carousel from "nuka-carousel";
import { CarouselImage } from "./CarouselImage";

export const ProjectImageCarousel = ({
  images,
}: {
  images: SanityImageObject[];
}) => {
  return (
    <Carousel
      defaultControlsConfig={{
        nextButtonText: (
          <FontAwesomeIcon icon={faAngleRight} className="w-5 h-5 text-white" />
        ),
        prevButtonText: (
          <FontAwesomeIcon icon={faAngleLeft} className="w-5 h-5 text-white" />
        ),
        pagingDotsStyle: {
          fill: "#ff5c00",
          marginRight: 7,
          marginLeft: 7,
        },
      }}
      enableKeyboardControls
      wrapAround
    >
      {images.map((image, i) => (
        <CarouselImage image={image} key={i} />
      ))}
    </Carousel>
  );
};
