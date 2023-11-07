import { assets } from "@/assets/assets";
import { IconRound } from "@/components/IconRound";
import { ReadMore } from "@/components/ReadMore/ReadMore";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { KCSE } from "../../../components/KCSE";
import "../../../css/about-me.css";
import "../../../css/start-page.css";
import me from "../../../public/me.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <IconRound />
      <div className="about-me-top flex space-between">
        <h1>About Me</h1>
        <ReadMore
          text="portfolio"
          link="portfolio"
          className="hover:border-white hidden md:flex"
        />
      </div>
      <div className="my-picture flex justify-between gap-x-2">
        <div className="w-full sm:w-2/3">
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
          <h3 className="text-orange my-5 text-2xl">Education Background</h3>
          <p className="mt-10">
            I have a bachelor`s degree in Computer Science from Chuka University
            awaiting graduation late this year (2023). I also graduated from
            highschool in 2018 with an overall score of{" "}
            <span className="text-orange">B+ (GPA 3.3)</span> here is the
            breakdown.
            <KCSE />
            You can download the result slip{" "}
            <a
              className="text-orange cursor-pointer hover:font-semibold transition-all"
              href={
                "https://drive.google.com/file/d/1s3g6bnWZNMemvVRclicgOt8a0kSYAXaT/view?usp=sharing"
              }
              download
              target="_BLANK"
              rel="noreferrer"
            >
              here.
            </a>
          </p>
        </div>
        <Image
          src={me}
          alt="This is me"
          className="object-cover w-full sm:w-1/4 my-[50px] sm:mb-0 sm:mt-[40px]"
        />
      </div>
      <div className="my-description flex space-between">
        <h3 className="text-orange">More Info</h3>
        <div className="flex space-between">
          <div className="bs-about-me flex flex-col gap-y-7">
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
            Let&apos;s arrange a <br /> conversation <br /> about that project!
          </p>
        </div>
      </div>
      <div className="tech-stack flex flex-col items-start relative">
        <div className="flex justify-between w-full language-icons px-5 flex-wrap">
          <Image src={assets.figma} alt="figma" className="figma" />
          <FontAwesomeIcon icon={faReact} className="react" color="#5ed3f3" />
          <Image src={assets.firestore} alt="figma" />
          <FontAwesomeIcon icon={faGithub} className="github  " />
          <Image src={assets.tailwindcss} alt="figma" />
          <Image src={assets.javascriptLarge} alt="js" className="js" />
          <Image src={assets.springBoot} alt="spring boot" />
          <Image src={assets.firebase} alt="figma" />
          <Image src={assets.typescript} alt="figma" />
          <Image src={assets.mysql} alt="figma" />
          <Image src={assets.java} alt="figma" />
          <Image src={assets.next} alt="next" />
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
                <p>Java framework</p>
              </div>
              <div className="flex">
                <p>Clerk</p>
                <p>Authentication framework</p>
              </div>
            </div>
            <Image src={assets.plus} alt="Plus" className="plus" />
            <div>
              <div className="flex">
                <p>NextJS</p>
                <p>Yet another React framework</p>
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
              <div className="flex">
                <p>Convex</p>
                <p>Backend as a service</p>
              </div>
            </div>
          </div>
          <p className="greyish">
            * I am a flexible and fast learning developer not afraid to take on
            any new technologies.
          </p>
        </div>
        <ReadMore
          text="portfolio"
          link="portfolio"
          className="md:hidden text-black mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutMe;
