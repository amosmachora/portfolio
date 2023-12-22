import { assets } from "@/assets/assets";
import { calculateAge } from "@/util/utils";
import Image from "next/image";
import { ReadMore } from "./ReadMore/ReadMore";

const HomePageSlides = () => {
  return (
    <section className="slides">
      <div className="content">
        <p className="slide-sub">I am a</p>
        <h1 className="slide-title">Full Stack Web Developer</h1>
        <p className="slide-description bluish">
          Hey friend! 👋 I&apos;m Amos, your laid-back web developer with a
          serious passion for results. Clocking in at{" "}
          {calculateAge(new Date("13 December 2001"))} years old, I&apos;ve been
          on this coding journey for over 2 years – learning, freelancing, and
          turning ideas into digital reality.
        </p>
        <p className="slide-description bluish">
          Picture this: I&apos;m all about full-stack web development using the
          coolest tech tools. My mission? To create websites that not only look
          good but also bring in the big bucks. From personal portfolios that
          pop to corporate sites that skyrocket conversion rates, I&apos;ve got
          the skills to boost your online game and your revenue. Let&apos;s chat
          and turn your web presence into a money-making powerhouse.
        </p>
        <ReadMore
          text="about me page"
          link="about-me"
          className="hover:border-white sm:w-1/2"
        />
      </div>
      <Image
        alt="image-slide"
        className="img-slide"
        src={assets.desktopSetup}
        height={768}
        width={1366}
      />
    </section>
  );
};

export default HomePageSlides;
