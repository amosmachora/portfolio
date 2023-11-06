import { sanityClient } from "@/util/utils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export const CarouselImage = ({ image }: { image: SanityImageObject }) => {
  const imageProps = useNextSanityImage(sanityClient, image);
  return (
    <Image
      src={imageProps.src}
      alt="test"
      className="aspect-video w-full object-cover mx-auto"
      height={imageProps.height}
      width={imageProps.width}
    />
  );
};
