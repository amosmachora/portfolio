import React, { useState } from "react";
import "./StartPage.css";
import Arrow from "../../Assets/Arrow.svg";
import ArrowWhite from "../../Assets/ArrowWhite.svg";

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

  return (
    <div className="slides">
      <div className="cube cursor cube-one" onClick={() => setSlide(slide1)}>
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
      <div className="cube cursor cube-two" onClick={() => setSlide(slide2)}>
        <img src={Arrow} alt="Arrow" className="arrow-two" />
      </div>
      <img src={slide.img} alt="image-slide" className="img-slide" />
    </div>
  );
};

export default StartPage;
