"use client";

import { DarkOverlay } from "@/components/DarkOverlay";
import { Overlay } from "@/components/Overlay";
import { ProjectLanguages } from "@/components/Project/ProjectLanguages";
import { ReadMore } from "@/components/ReadMore/ReadMore";
import { SmallScreenModal } from "@/components/SmallScreenModal";
import { Video } from "@/components/Video";
import useScreenSize from "@/hooks/useScreenSize";
import { projects } from "@/util/PortfolioItems";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faPlay,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Carousel from "nuka-carousel";
import { useState } from "react";

const Page = () => {
  const pathName = usePathname();
  const projectTitle = decodeURIComponent(pathName.split("/").at(-1)!);
  const project = projects.find((project) => project.title === projectTitle)!;
  const screenSize = useScreenSize();

  const [currentYoutubeId, setCurrentYoutubeId] = useState<null | string>(null);
  const [smallScreenErrorModalLink, setSmallScreenErrorModalLink] = useState<
    null | string
  >(null);

  const handleRedirect = () => {
    if (project.live) {
      if (project.desktopOnly) {
        if (screenSize === "sm" || screenSize === "md") {
          setSmallScreenErrorModalLink(project.live!);
        } else {
          window.open(project.live);
        }
      } else {
        window.open(project.live);
      }
    }
  };

  return (
    <main className="mx-[2%] relative">
      <Link
        href={"/portfolio"}
        className="w-10 h-10 bg-orange text-white transition-all duration-300 absolute top-2 left-2 z-40"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="center-absolutely" />
      </Link>
      <div className="relative h-[50vh]">
        <DarkOverlay />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project?.images.at(0)}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <section className="px-[10%] py-[5%] bg-white text-[#081019]">
        <p className="category">{project?.category}</p>
        <h1 className="text-[#081019] text-5xl font-medium my-5">
          {project?.title}
        </h1>
        <p className="text-[#536375] text-sm font-light mt-6">
          {project?.description}
        </p>
        <p className="orange font-semibold border-l-4 border-orange leading-10 pl-5 mt-6">
          Tech Stack
        </p>
        <ProjectLanguages
          className="hidden sm:flex mt-5"
          languages={project?.languages!}
        />
        <div className="flex items-center justify-between mt-20">
          <p className="text-[#081019] text-xl font-medium my-5">
            Want a preview? Take a look at some of the screenshots
          </p>
          {project.hasVideo && (
            <div
              className="text-white text-sm bg-orange flex items-center gap-x-4 py-3 px-5 cursor-pointer rounded-full hover:opacity-50 transition-opacity duration-300"
              onClick={() => setCurrentYoutubeId(project.youtubeId!)}
            >
              <p>Watch Video</p>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          )}
        </div>
        {currentYoutubeId && (
          <Video
            id={currentYoutubeId}
            onClick={() => setCurrentYoutubeId(null)}
          />
        )}
        {smallScreenErrorModalLink && (
          <Overlay onClick={() => setSmallScreenErrorModalLink(null)}>
            <SmallScreenModal
              smallScreenErrorModalLink={smallScreenErrorModalLink}
            />
          </Overlay>
        )}
        <div>
          <Carousel
            defaultControlsConfig={{
              nextButtonText: "N",
              prevButtonText: "P",
              pagingDotsStyle: {
                fill: "#ff5c00",
                marginRight: 4,
                marginLeft: 4,
              },
            }}
            enableKeyboardControls
            wrapAround
          >
            {project?.images.map((image, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image as unknown as string}
                alt="test"
                className="max-h-[75vh] w-full object-cover mx-auto"
                key={i}
              />
            ))}
          </Carousel>
        </div>
        <div className="my-14">
          {project.live && (
            <div className="flex items-center gap-x-5 justify-center cursor-pointer font-semibold text-sm bg-orange w-max px-5 py-3 rounded-full mx-auto text-white">
              <p>View live</p>
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                onClick={handleRedirect}
              />
            </div>
          )}
          {project?.github && (
            <div
              onClick={() => window.open(project.github)}
              className="flex items-center gap-x-5 justify-center cursor-pointer font-semibold text-sm bg-orange w-max px-5 py-3 rounded-full mx-auto text-white my-5"
            >
              <p>View Source Code</p>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          )}
          {project?.figma && (
            <div
              onClick={() => window.open(project.figma)}
              className="flex items-center gap-x-5 justify-center cursor-pointer font-semibold text-sm bg-orange w-max px-5 py-3 rounded-full mx-auto text-white my-5"
            >
              <p>View Design File</p>
              <FontAwesomeIcon icon={faFigma} />
            </div>
          )}
        </div>
        <p className="mt-8">
          Well, that&apos;s it for me and{" "}
          <span className="text-orange lowercase">{project.title}.</span> Thanks
          for your time.
        </p>
        <ReadMore
          link="contact"
          text="Hit me up"
          className="text-[#081019] sm:w-1/4 mx-auto"
        />
      </section>
    </main>
  );
};

export default Page;
