import React from "react";
import { IconRound } from "../Start/StartPage";
import { ReadMore } from "../ReadMore";
import "./AboutMe.css";
import { pageVariantsIn } from "../../Framer";
import { motion } from "framer-motion";
import { assets } from "../../Assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

const {
  figma,
  firebase,
  firestore,
  java,
  javascriptLarge,
  me,
  mysql,
  plus,
  springBoot,
  tailwindcss,
  typescript,
  next,
} = assets;

const AboutMe = () => {
  return (
    <motion.div
      className="about-me"
      variants={pageVariantsIn}
      initial="initial"
      animate="animate"
    >
      <IconRound />
      <div className="about-me-top flex space-between">
        <h1>
          Learn <br /> more about me
        </h1>
        <ReadMore
          text="Latest projects"
          link="projects"
          className="hover:border-white"
        />
      </div>
      <div className="my-picture flex justify-between gap-x-2">
        <div>
          <p className="bluish capitalize">
            On this page <br /> you will find <br /> a brief description <br />
            of my education and professional background
          </p>
          <p className="mt-10">
            As a software engineer, I specialize in building web applications
            using technologies such as TypeScript, Tailwind CSS, ReactJs, and
            Git. I consider myself an expert in these technologies and enjoy
            staying up-to-date with the latest developments. I am also an avid
            user of VS Code, which I find to be an essential tool for my
            development workflow. I have a background in Java and SpringBoot and
            have been able to seamlessly transition to the JavaScript stack, in
            which I am currently proficient.
          </p>
          <p className="mt-10">
            I have a bachelor`s degree in Computer Science from Chuka University
            awaiting graduation late this year (2023). I also graduated from
            highschool in 2018 with an overall score of{" "}
            <span className="text-orange">B+</span> with an{" "}
            <span className="text-orange">A </span> in Mathematics an
            <span className="text-orange"> A</span> in Computer Studies an{" "}
            <span className="text-orange">A- </span> in Physics. The certificate
            is available on request.
          </p>
        </div>
        <img src={me} alt="This is me" className="me" />
      </div>
      <div className="my-description flex space-between">
        <h3 className="text-orange">More Info</h3>
        <div className="flex space-between">
          <div className="bs-about-me">
            <p>
              I am a self-taught software developer, who has taken several
              online courses on LinkedIn Learning, Coursera, and Udemy to learn
              new technologies and sharpen my skills. I have over 11
              professional certificates that back up my dedication to continuous
              learning and development.
            </p>
            <p>
              I am a strong believer in the power of open-source software and
              contribute regularly to various open-source projects. I believe in
              giving back to the community and sharing my knowledge and
              experience with other.
            </p>
            <p>
              In addition to my work as a software engineer, I am also the
              founder of Webtech Africa, a tech startup aimed at providing
              innovative solutions to African companies. I am dedicated to
              helping businesses in Africa grow with technology and am
              passionate about creating unique solutions that meet their
              specific needs.
            </p>
            <p>
              I am an individual who is driven by curiosity and continuously
              seeks new ways to push boundaries and create innovative solutions.
              I have a positive attitude towards challenges and always strive to
              find creative solutions to overcome them. I am a team player and
              enjoy working with others to achieve a common goal. I am dedicated
              to delivering high-quality work and providing excellent customer
              service. I am always looking for new opportunities to learn and
              grow as a developer, and I am excited to see where my career takes
              me next.
            </p>
          </div>
          <p className="capitalize bluish arrange">
            Let's arrange a <br /> conversation <br /> about that project!
          </p>
        </div>
      </div>
      <div className="tech-stack flex flex-col items-start relative">
        {/* <h2>
          TECHNOLOGY <br /> STACK
        </h2> */}
        <div className="flex justify-between w-full language-icons px-5 flex-wrap">
          <img src={figma} alt="figma" className="figma" />
          <FontAwesomeIcon icon={faReact} className="react" color="#5ed3f3" />
          <img src={firestore} alt="figma" />
          <FontAwesomeIcon icon={faGithub} className="github  " />
          <img src={tailwindcss} alt="figma" />
          <img src={javascriptLarge} alt="js" className="js" />
          <img src={springBoot} alt="figma" />
          <img src={firebase} alt="figma" />
          <img src={typescript} alt="figma" />
          <img src={mysql} alt="figma" />
          <img src={java} alt="figma" />
          <img src={next} alt="next" />
        </div>
        <div className="tech-stack-right mx-auto">
          <p className="tech-stack-main">
            I have a tech stack in which i have gained years of experience on
            and in which i have built most of my projects on.
          </p>
          <div className="flex languages-tools space-between align-center">
            <div>
              <div className="flex">
                <p>REACT JS</p>
                <p>UI Library / Framework</p>
              </div>
              <div className="flex">
                <p>HTML 5</p>
                <p>Markup Language</p>
              </div>
              <div className="flex">
                <p>CSS 3</p>
                <p>Styling</p>
              </div>
              <div className="flex">
                <p>Figma</p>
                <p>UI/UX Design software</p>
              </div>
              <div className="flex">
                <p>Tailwind CSS</p>
                <p>CSS Library</p>
              </div>
              <div className="flex">
                <p>Java</p>
                <p>POJO</p>
              </div>
              <div className="flex">
                <p>Spring</p>
                <p>Application framework</p>
              </div>
            </div>
            <img src={plus} alt="Plus" className="plus" />
            <div>
              <div className="flex">
                <p>NextJS</p>
                <p>Yet another JS framework</p>
              </div>
              <div className="flex">
                <p>JavaScript</p>
                <p>Dynamism</p>
              </div>
              <div className="flex">
                <p>TypeScript</p>
                <p>JavaScript with handcuffs</p>
              </div>
              <div className="flex">
                <p>Firestore</p>
                <p>Document database</p>
              </div>
              <div className="flex">
                <p>Firebase</p>
                <p>Backend as a service</p>
              </div>
              <div className="flex">
                <p>MySql</p>
                <p>Traditional database</p>
              </div>
              <div className="flex">
                <p>GIT & GitHub</p>
                <p>Version Control</p>
              </div>
            </div>
          </div>
          <p className="greyish">
            * I am a flexible and fast learning developer not afraid to take on
            any new technologies.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
