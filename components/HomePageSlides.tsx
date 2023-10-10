"use client";

import { textVariants } from "@/framer/Framer";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReadMore } from "./ReadMore/ReadMore";

const slide1 = {
  sub: "Full Stack Web Developer",
  h1: "I am a",
  desc: "So you are looking for a web developer . I am an experienced web developer for all your development...",
  linkTo: "about-me",
  img: "/DesktopSetUp.jpg",
};

const slide2 = {
  h1: "Im also an",
  sub: "aspiring android developer",
  desc: "I am actively learning react-native to sharpen my android development skills. Stay tuned...",
  linkTo: "projects",
  img: "/ManLookingAtComputer.jpg",
};

const HomePageSlides = () => {
  const [slide, setSlide] = useState(slide1);
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (window.innerWidth < 650) {
      interval = setInterval(() => {
        setSlide((prev) =>
          prev.sub === "Full Stack Web Developer" ? slide2 : slide1
        );
      }, 10000);
    }
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div className="slides" initial="initial" animate="animate">
      <div
        className="cube cursor cube-one absolute"
        onClick={() =>
          setSlide((prev) =>
            prev.sub === "Full Stack Web Developer" ? slide2 : slide1
          )
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
          text={"Read More"}
          link={slide.linkTo}
          className="hover:border-white"
        />
      </section>
      <div
        className="cube cursor-pointer cube-two absolute"
        onClick={() =>
          setSlide((prev) =>
            prev.sub === "Full Stack Web Developer" ? slide2 : slide1
          )
        }
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-black center-absolutely"
        />
      </div>
      <motion.img
        alt="image-slide"
        className="img-slide"
        src={slide.img}
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
      />
    </motion.div>
  );
};

export default HomePageSlides;
