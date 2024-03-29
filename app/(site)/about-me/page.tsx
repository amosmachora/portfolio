import { assets } from "@/assets/assets";
import { IconRound } from "@/components/IconRound";
import { ReadMore } from "@/components/ReadMore/ReadMore";
import { ResultsTable } from "@/components/ResultsTable";
import { KCSE } from "@/util/Academics";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import "../../../css/about-me.css";
import "../../../css/start-page.css";
import meGraduated from "../../../public/graduated.jpg";
import me from "../../../public/me.jpg";

export const metadata: Metadata = {
  title: "About",
};

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
            I have a bachelor`s degree in Computer Science from Chuka
            University. I also graduated from highschool in 2018 with an overall
            score of <span className="text-orange">B+ (GPA 3.3)</span> here is
            the breakdown.
            <ResultsTable data={KCSE} />
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
      <section className="flex my-12 gap-x-10 flex-col items-center sm:flex-row">
        <Image
          src={meGraduated}
          alt="This is me"
          className="object-cover w-full sm:w-1/4 h-[75vh] md:h-[100vh]"
        />
        <div className="w-full sm:w-3/4">
          <h4 className="text-orange my-5 text-2xl">Campus Education</h4>
          <p className="mb-4">
            In 2023, I graduated from Chuka University with a second-class upper
            division in Computer Science, boasting a GPA of{" "}
            <span className="text-orange">3.7</span>. Throughout my academic
            journey, I excelled in subjects crucial for a career in software
            engineering, showcasing both theoretical understanding and practical
            application.
          </p>
          <p className="mb-4">
            Mastering courses such as Introduction to Programming Methodologies
            <span className="text-orange"> (3.0)</span>, Object-Oriented
            Programming <span className="text-orange">(3.7)</span>, and Database
            Systems
            <span className="text-orange"> (4.0)</span>, I honed my coding
            skills and learned to design efficient and scalable software
            solutions. Notably, achieving a GPA of{" "}
            <span className="text-orange">4.0 </span>
            in key subjects like Introduction to Database Systems, Theory of
            Computation, and Industrial Attachment demonstrated my ability to
            excel in both theoretical and hands-on aspects of software
            development.
          </p>
          <p className="mb-4">
            My dedication to software projects, including Computer System
            Projects I and II, showcased my proficiency in applying theoretical
            knowledge to real-world scenarios. Specialized subjects like
            Software Project Management{" "}
            <span className="text-orange">(3.0)</span>, Distributed Systems
            <span className="text-orange"> (4.0)</span>, and Decision Support
            Systems <span className="text-orange">(3.7)</span> further equipped
            me with the skills needed for complex software development projects.
            These achievements underscore my commitment to excellence in
            software engineering and my readiness to contribute to innovative
            and impactful projects.
          </p>
        </div>
      </section>
      <div className="my-description flex space-between">
        <h3 className="text-orange">SWE career so far</h3>
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
