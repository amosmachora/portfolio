import React, { useContext, useEffect, useState } from "react";
import "./StartPage.css";
import Arrow from "../../Assets/Arrow.svg";
import ArrowWhite from "../../Assets/ArrowWhite.svg";
import Projects from "../../Assets/Projects.png";
import PharmaOne from "../../Assets/Pharmaone.png";
import Arrow2 from "../../Assets/Arrow.png";
import { Context } from "../../App";
import DesktopSetup from "../../Assets/DesktopSetUp.jpg";
import ManLookingAtComputer from "../../Assets/ManLookingAtComputer.jpg";
import { ReadMore } from "../ReadMore";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pageVariantsIn } from "../../Framer";

const StartPage = () => {
  const [slide, setSlide] = useState({
    sub: "Frontend Web Developer",
    h1: "I am a",
    desc: "So you are looking for a web developer . I am an experienced web developer for all your development...",
    linkTo: "about-me",
    img: DesktopSetup,
  });

  const { setSmallScreen } = useContext(Context);
  const imageAnimation = useAnimation();
  const { ref, inView } = useInView();
  const whiteBannerAnimation = useAnimation();

  const slide1 = {
    sub: "Frontend Web Developer",
    h1: "I am a",
    desc: "So you are looking for a web developer . I am an experienced web developer for all your development...",
    linkTo: "about-me",
    img: DesktopSetup,
  };

  const slide2 = {
    sub: "Web Application Developer",
    h1: "Im also a",
    desc: "Web Applications should be fast, scalable and maintainable. Want to know how ?...",
    linkTo: "portfolio",
    img: ManLookingAtComputer,
  };

  useEffect(() => {
    setSmallScreen(false);
    document.title = `Amos™ Freelancer`;
    window.scrollTo(0, 0);
  }, [setSmallScreen]);

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        // type: "spring",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      whiteBannerAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
    if (!inView) {
      whiteBannerAnimation.start({
        x: "-50vw",
      });
    }
  }, [inView]);

  const [isInView, setIsInView] = useState(false);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (window.innerWidth < 650) {
      interval = setInterval(() => {
        setSlide((prev) =>
          prev.sub === "Frontend Web Developer" ? slide2 : slide1
        );
      }, 10000);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={pageVariantsIn} initial="initial" animate="animate">
      <AnimatePresence>
        <motion.div
          className="slides"
          initial="initial"
          animate="animate"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <div
            className="cube cursor cube-one"
            onClick={() =>
              setSlide((prev) =>
                prev.sub === "Frontend Web Developer" ? slide2 : slide1
              )
            }
          >
            <img src={Arrow} alt="Arrow" className="arrow-one" />
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
              Arrow={ArrowWhite}
              text={"Read More"}
              link={slide.linkTo}
            />
          </section>
          <div
            className="cube cursor cube-two"
            onClick={() =>
              setSlide((prev) =>
                prev.sub === "Frontend Web Developer" ? slide2 : slide1
              )
            }
          >
            <img src={Arrow} alt="Arrow" className="arrow-two" />
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
          <p className="number">67+</p>
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
      <motion.div
        className="i-create-gold flex"
        whileInView={() => setIsInView(true)}
      >
        <motion.img
          src={PharmaOne}
          alt="Pharmacy application"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              type: "spring",
            },
          }}
          whileHover={{
            borderRadius: "5%",
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
              <img src={Arrow2} alt="Arrow" className="center-absolutely" />
            </div>
            <p>Portfolio</p>
          </div>
          <p className="greyish">
            Visit my portfolio to preview sites, view original design files and
            inspect the source code.
          </p>
          <ReadMore
            text={"Read More"}
            border={"black"}
            link={"portfolio"}
            Arrow={Arrow}
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
      <img src={Projects} alt="Projects" className="center-absolutely" />
    </div>
  );
}
