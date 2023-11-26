/* eslint-disable @next/next/no-img-element */

import { getProjectMetadata } from "@/util/utils";
import { ImageResponse } from "next/server";

export const runtime = "edge";

const getPublicSans = async () => {
  const response = await fetch(
    new URL(
      "../../../../public/Public_Sans/static/PublicSans-SemiBold.ttf",
      import.meta.url
    )
  );
  const pSans = await response.arrayBuffer();
  return pSans;
};

const getDancingScript = async () => {
  const response = await fetch(
    new URL(
      "../../../../public/Dancing_Script/static/DancingScript-SemiBold.ttf",
      import.meta.url
    )
  );
  const dScript = await response.arrayBuffer();
  return dScript;
};

export async function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { image, description } = await getProjectMetadata(params.slug);
  return [
    {
      id: 1,
      size: { width: 1200, height: 600 },
      alt: description,
      contentType: "image/png",
    },
  ];
}

export default async function Image({ params }: { params: { slug: string } }) {
  const { image, description, title, images } = await getProjectMetadata(
    params.slug
  );

  return new ImageResponse(
    (
      <div tw="flex justify-between w-full p-[2%] h-full bg-[#0f172a] text-white">
        <div tw="w-1/2 justify-between flex flex-col p-5 h-full">
          <p tw="text-cyan-300">{title}</p>
          <p tw="text-2xl">{description}</p>
          <div tw="flex gap-x-5 items-center">
            <img
              src="https://amosmachora.vercel.app/me.jpg"
              alt="Amos Machora"
              tw="w-20 h-20 rounded-full mr-5 object-cover"
            />
            <p tw="text-xl" style={{ fontFamily: "DScript" }}>
              By Amos Machora
            </p>
          </div>
        </div>
        <div tw="flex w-[40%] relative">
          {images
            .slice(0, 3)
            .reverse()
            .map((img, i) => (
              <img
                src={img}
                alt={description}
                tw={`aspect-video absolute z-[${i * 10}] absolute top-${
                  i * 15
                } right-${i * 15}`}
                key={i}
              />
            ))}
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: await getPublicSans(),
          style: "normal",
          weight: 600,
        },
        {
          name: "DScript",
          data: await getDancingScript(),
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
