import React, { useEffect, useState } from "react";
import "./StartPage.css";
import Arrow from "../../Assets/Arrow.svg";
import ArrowWhite from "../../Assets/ArrowWhite.svg";
import Projects from "../../Assets/Projects.png";

const StartPage = () => {
  const slide1 = {
    sub: "Frontend Web Developer",
    h1: "I am a",
    desc: "So you are looking for a web developer . I am an experienced web developer for all your development...",
    linkTo: "Web Developer",
    img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const slide2 = {
    sub: "Web Application Developer",
    h1: "Im also a",
    desc: "Web Applications should be fast, scalable and maintainable. Want to know how ?...",
    linkTo: "Web Applications",
    img: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const [slide, setSlide] = useState(slide1);
  const [toggler, setToggler] = useState(true);

  useEffect(() => {
    if (toggler === true) {
      setSlide(slide1);
    } else {
      setSlide(slide2);
    }
  }, [toggler]);

  return (
    <>
      <div className="slides">
        <div
          className="cube cursor cube-one"
          onClick={() => setToggler((prev) => !prev)}
        >
          <img src={Arrow} alt="Arrow" className="arrow-one" />
        </div>
        <section className="content">
          <p className="slide-sub">{slide.h1}</p>
          <h1 className="slide-title">{slide.sub}</h1>
          <p className="slide-description bluish">{slide.desc}</p>
          <div className="flex link space-between cursor">
            <p className="read-more">Read more</p>
            <img src={ArrowWhite} alt="Arrow" />
          </div>
        </section>
        <div
          className="cube cursor cube-two"
          onClick={() => setToggler((prev) => !prev)}
        >
          <img src={Arrow} alt="Arrow" className="arrow-two" />
        </div>
        <img src={slide.img} alt="image-slide" className="img-slide" />
      </div>
      <div className="white-banner flex">
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
      </div>
      <div className="my-portfolio-services">
        <div>
          <div className="projects-icon">
            <img src={Projects} alt="Projects" className="center-absolutely" />
          </div>
          <p className="my-portfolio">
            My Portfolio <br /> services
          </p>
          <img
            src="https://images.pexels.com/photos/6340796/pexels-photo-6340796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People Looking at computer"
            className="people-looking-at-computer"
          />
        </div>
        <div className="flex space-between">
          <div className="flex-v">
            <p className="service-number">01</p>
            <h2 className="service-title">Experience</h2>
            <p className="bluish">
              Experience is the best teacher they say. I have been in the web
              development industry for over 4 years and i have worked with a lot
              of clients. You want the best ? you`ve got the best.
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">02</p>
            <h2 className="service-title">Quality Assurance</h2>
            <p className="bluish">
              Search Engine Optimization, Multiple device support, legacy
              browser support , Fast Loading Speeds, Data caching, you name it.
              I've got it all
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">03</p>
            <h2 className="service-title">Freelance Work</h2>
            <p className="bluish">
              I also work online, all you need is send me an email and i will
              respond as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
