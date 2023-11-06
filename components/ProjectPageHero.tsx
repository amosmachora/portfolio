"use client";

import { sanityClient } from "@/util/utils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { DarkOverlay } from "./DarkOverlay";

export const ProjectPageHero = ({
  image,
  alt,
}: {
  image: SanityImageObject;
  alt: string;
}) => {
  const mainImageProps = useNextSanityImage(sanityClient, image);

  return (
    <div className="relative h-[25vh] sm:h-[50vh]">
      <DarkOverlay />
      <Image
        src={mainImageProps.src}
        width={mainImageProps.width}
        height={mainImageProps.height}
        className="w-full h-full object-cover"
        alt={alt}
      />
    </div>
  );
};
