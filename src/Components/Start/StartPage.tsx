import React, { useEffect, useState } from "react";
import "./StartPage.css";
import { ReadMore } from "../ReadMore";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pageVariantsIn } from "../../Framer";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  arrow,
  desktopSetup,
  manLookingAtComputer,
  projects,
} from "../../Assets/assets";

const slide1 = {
  sub: "Full Stack Web Developer",
  h1: "I am a",
  desc: "So you are looking for a web developer . I am an experienced web developer for all your development...",
  linkTo: "about-me",
  img: desktopSetup,
};

const slide2 = {
  h1: "Im also an",
  sub: "aspiring android developer",
  desc: "I am actively learning kotlin and flutter to sharpen my android development skills. Stay tuned...",
  linkTo: "projects",
  img: manLookingAtComputer,
};

const StartPage = () => {
  const [slide, setSlide] = useState(slide1);
  const { ref } = useInView();
  const whiteBannerAnimation = useAnimation();

  useEffect(() => {
    document.title = `Amos™ Freelancer`;
  }, []);

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

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
    <motion.div
      variants={pageVariantsIn}
      initial="initial"
      animate="animate"
      className="start-page-div"
    >
      <AnimatePresence>
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
            <motion.p
              key={slide.h1}
              className="slide-sub"
              variants={textVariants}
            >
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
            key={slide.img}
            src={slide.img}
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="white-banner flex"
        animate={whiteBannerAnimation}
        ref={ref}
      >
        <p className="capitalize satisfied">Number of satisfied clients</p>
        <p className="my-projects">My projects</p>
        <div className="banner-center">
          <p className="number">12+</p>
          <p className="describe">
            I already have a number of satisfied clients with which i have had
            multiple successful projects. This —number is continuously growing,
            talk to me and take advantage of my unique services.
          </p>
          <p className="capitalize cooperation">
            Cooperation, communication and satisfaction with multiple companies
            around the globe
          </p>
        </div>
      </motion.div>
      <div className="my-portfolio-services">
        <div>
          <IconRound />
          <motion.p
            className="my-portfolio"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
          >
            My Portfolio <br /> services
          </motion.p>
          <motion.img
            src="https://images.pexels.com/photos/6340796/pexels-photo-6340796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People Looking at computer"
            className="people-looking-at-computer"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            whileInView={{ x: 0 }}
          />
        </div>
        <motion.div className="flex space-between">
          <motion.div
            className="flex-v"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="service-number">01</p>
            <h2 className="service-title">Experience</h2>
            <p className="bluish">
              Experience is the best teacher they say. I have been in the web
              development industry for over 4 years and i have worked with a lot
              of clients. You want the best ? you`ve got the best.
            </p>
          </motion.div>
          <motion.div
            className="flex-v"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="service-number">02</p>
            <h2 className="service-title">Quality Assurance</h2>
            <p className="bluish">
              Search Engine Optimization, Multiple device support, legacy
              browser support , Fast Loading Speeds, Data caching, you name it.
              I've got it all
            </p>
          </motion.div>
          <motion.div
            className="flex-v"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="service-number">03</p>
            <h2 className="service-title">Freelance Work</h2>
            <p className="bluish">
              I also work online, all you need is send me an email and i will
              respond as soon as possible.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="i-create-gold flex">
        <motion.img
          src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Pharmacy application"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              type: "spring",
            },
          }}
        />
        <div>
          <h2>I create Api consuming web apps</h2>
          <h3>
            Data flows from multiple sources. Work with me see how you can
            represent the data in clean UI
          </h3>
          <div className="flex align-center">
            <div className="img-container relative">
              <img src={arrow} alt="Arrow" className="center-absolutely" />
            </div>
            <p>Projects</p>
          </div>
          <p className="greyish">
            Visit my projects section to preview sites, view original design
            files and inspect the source code.
          </p>
          <ReadMore
            text="Check out my projects"
            link="projects"
            className="text-black hover:border-orange"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StartPage;

export function IconRound() {
  return (
    <div className="projects-icon">
      <img src={projects} alt="Projects" className="center-absolutely" />
    </div>
  );
}
