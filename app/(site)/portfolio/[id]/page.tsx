"use client";

import { DarkOverlay } from "@/components/DarkOverlay";
import { Overlay } from "@/components/Overlay";
import { ProjectLanguages } from "@/components/Project/ProjectLanguages";
import { SmallScreenModal } from "@/components/SmallScreenModal";
import { Video } from "@/components/Video";
import useScreenSize from "@/hooks/useScreenSize";
import { personalProjects as projects } from "@/util/PortfolioItems";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faCaretDown,
  faDisplay,
  faMobileScreen,
  faPlay,
  faTabletScreenButton,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Carousel from "nuka-carousel";
import { useState } from "react";

const Page = () => {
  const pathName = usePathname();
  const projectTitle = decodeURIComponent(pathName.split("/").at(-1)!);
  const project = projects.find((project) => project.title === projectTitle)!;
  const screenSize = useScreenSize();

  const [videoURL, setVideoURL] = useState<null | string>(null);
  const [smallScreenErrorModalLink, setSmallScreenErrorModalLink] = useState<
    null | string
  >(null);
  const [toolTipMessage, setToolTipMessage] = useState<
    null | "Large screens only" | "Fully responsive!"
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
      <div className="relative h-[25vh] sm:h-[50vh]">
        <DarkOverlay />
        <Image
          src={project?.images.at(0)!}
          alt=""
          className="w-full h-full object-cover"
          height={768}
          width={1366}
        />
      </div>
      <section className="px-[5%] sm:px-[10%] py-[5%] bg-white text-[#081019]">
        <div className="flex justify-between items-center">
          <p className="category">{project?.category}</p>
          <div
            className="flex relative"
            onMouseEnter={() => {
              if (project.desktopOnly) {
                setToolTipMessage("Large screens only");
              } else {
                setToolTipMessage("Fully responsive!");
              }
            }}
            onMouseLeave={() => setToolTipMessage(null)}
          >
            {project.desktopOnly ? (
              <FontAwesomeIcon icon={faDisplay} className="mx-2" />
            ) : project.category === "Mobile App" ? null : (
              <>
                <FontAwesomeIcon icon={faDisplay} className="mx-2" />
                <FontAwesomeIcon icon={faTabletScreenButton} className="mr-2" />
                <FontAwesomeIcon icon={faMobileScreen} />
              </>
            )}
            {toolTipMessage && (
              <p className="absolute -top-5 -translate-y-full text-center text-sm z-50 w-min text-orange font-medium bg-white p-2 rounded border-orange border">
                {toolTipMessage}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2"
                />
              </p>
            )}
          </div>
        </div>
        <h1 className="text-[#081019] text-5xl font-medium my-5">
          {project?.title}
        </h1>
        <p className="text-[#536375] text-sm font-light mt-6">
          {project?.description}
        </p>
        <p className="orange font-semibold border-l-4 border-orange leading-10 pl-5 mt-14 sm:mt-6">
          Tech Stack
        </p>
        <ProjectLanguages
          className="mt-8 sm:mt-5"
          languages={project?.languages!}
        />
        <div className="flex items-center justify-between mt-10 sm:mt-20 mb-5 sm:mb-10">
          <p className="text-[#081019] text-xl font-medium my-10 sm:my-5">
            Take a look at some of the site screenshots.
          </p>
          {project.videoURL && (
            <div
              className="text-white text-sm bg-orange flex items-center gap-x-4 py-3 px-5 cursor-pointer rounded-full hover:opacity-50 transition-opacity duration-300"
              onClick={() => setVideoURL(project.videoURL!)}
            >
              <p>Watch Video</p>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          )}
        </div>
        {videoURL && <Video id={videoURL} onClick={() => setVideoURL(null)} />}
        {smallScreenErrorModalLink && (
          <Overlay onClick={() => setSmallScreenErrorModalLink(null)}>
            <SmallScreenModal
              smallScreenErrorModalLink={smallScreenErrorModalLink}
            />
          </Overlay>
        )}
        <div className="relative">
          <Carousel
            defaultControlsConfig={{
              nextButtonText: (
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="w-5 h-5 text-white"
                />
              ),
              prevButtonText: (
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="w-5 h-5 text-white"
                />
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
            {project?.images.map((image, i) => (
              <Image
                src={image as unknown as string}
                alt="test"
                className="aspect-video w-full object-cover mx-auto"
                key={i}
                height={768}
                width={1366}
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
        <div className="flex flex-col gap-y-4">
          {project.textParagraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mt-4">
          Well, that&apos;s it for me and{" "}
          <span className="text-orange lowercase">{project.title}.</span> Thanks
          for your time.
        </p>
      </section>
    </main>
  );
};

export default Page;
