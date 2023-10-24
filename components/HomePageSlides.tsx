"use client";

import { assets } from "@/assets/assets";
import { textVariants } from "@/framer/Framer";
import { calculateAge } from "@/util/utils";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ReadMore } from "./ReadMore/ReadMore";

const slide1 = {
  sub: "Freelance Web Developer",
  h1: "I am a",
  desc: `Hello i am Amos 👋. I am a ${calculateAge(
    new Date("13 december 2001")
  )} year old highly skilled web developer. I have over 2 years of learning experience ...`,
  linkTo: "about-me",
  img: assets.desktopSetup,
  linkText: "learn more about me",
};

const slide2 = {
  h1: "I have",
  sub: "12 +",
  desc: "completed personal and client projects. Fully developed , deployed and continuously maintained web applications. Visit my portfolio to learn more.",
  linkTo: "portfolio",
  linkText: "visit portfolio",
  img: assets.manLookingAtComputer,
};

const HomePageSlides = () => {
  const [slide, setSlide] = useState(slide1);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (window.innerWidth < 650) {
      interval = setInterval(() => {
        setSlide((prev) => (prev.h1 === "I am a" ? slide2 : slide1));
      }, 10000);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="slides" initial="initial" animate="animate">
      <div
        className="cube cursor cube-one absolute"
        onClick={() =>
          setSlide((prev) => (prev.h1 === "I am a" ? slide2 : slide1))
        }
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-black center-absolutely"
        />
      </div>
      <section className="content">
        <motion.p key={slide.h1} className="slide-sub" variants={textVariants}>
          {slide.h1}
        </motion.p>
        <motion.h1
          className="slide-title"
          key={slide.sub}
          variants={textVariants}
        >
          {slide.sub}
        </motion.h1>
        <motion.p
          className="slide-description bluish"
          key={slide.desc}
          variants={textVariants}
        >
          {slide.desc}
        </motion.p>
        <ReadMore
          text={slide.linkText}
          link={slide.linkTo}
          className="hover:border-white"
        />
      </section>
      <div
        className="cube cursor-pointer cube-two absolute"
        onClick={() =>
          setSlide((prev) => (prev.h1 === "I am a" ? slide2 : slide1))
        }
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-black center-absolutely"
        />
      </div>
      <Image
        alt="image-slide"
        className="img-slide"
        src={slide.img}
        height={768}
        width={1366}
      />
    </motion.div>
  );
};

export default HomePageSlides;
