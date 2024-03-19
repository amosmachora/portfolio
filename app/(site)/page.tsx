import HomePageSlides from "@/components/HomePageSlides";
import { IconRound } from "@/components/IconRound";
import Project from "@/components/Project/Project";
import { ReadMore } from "@/components/ReadMore/ReadMore";
import { getNumberOfProjects, getProjects } from "@/util/utils";
import Image from "next/image";
import "../../css/start-page.css";
import arrow from "../../public/Arrow.png";

export default async function Home() {
  const numberOfProjects = await getNumberOfProjects();

  const projects = await getProjects();
  return (
    <main className="start-page-div">
      <HomePageSlides />
      <div className="white-banner flex">
        <p className="capitalize satisfied">
          Number of completed personal and client projects
        </p>
        <p className="my-projects">My projects</p>
        <div className="banner-center">
          <p className="number">{numberOfProjects}+</p>
          <p className="describe">
            The number of personal and freelance projects i have successfully
            completed in my freelance development career. This number is
            continuously growing, talk to me and take advantage of my unique
            services.
          </p>
          <p className="capitalize cooperation">
            <span className="text-xl text-black font-semibold">
              Core Values
            </span>{" "}
            <br />
            Cooperation, communication and satisfaction with multiple companies
            around the globe
          </p>
        </div>
      </div>
      <div className="my-portfolio-services">
        <div>
          <IconRound />
          <p className="my-portfolio">
            Why hire <br /> me?
          </p>
          <Image
            src="https://images.pexels.com/photos/6340796/pexels-photo-6340796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People Looking at computer"
            className="people-looking-at-computer"
            width={1260}
            height={750}
          />
        </div>
        <div className="flex space-between">
          <div className="flex-v">
            <p className="service-number">01</p>
            <h2 className="service-title">Experience</h2>
            <p className="bluish">
              Experience is the best teacher they say. I have been in the web
              development industry for over 2 years and i have worked with a lot
              of clients.You want a site fast? You get a site fast.So the
              question is; do you want the best?
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">02</p>
            <h2 className="service-title">Quality Assurance</h2>
            <p className="bluish">
              Search Engine Optimization, Multiple device support, legacy
              browser support , Fast Loading Speeds, Data caching, Payment
              integrations, you name it.
            </p>
          </div>
          <div className="flex-v">
            <p className="service-number">03</p>
            <h2 className="service-title">Creative Problem-Solving</h2>
            <p className="bluish">
              In addition to my extensive experience and commitment to quality
              assurance, I bring a passion for creative problem-solving to every
              project. Web development often presents unique challenges, and my
              ability to think innovatively and find effective solutions sets me
              apart. Whether it&apos;s optimizing user experiences, overcoming
              technical hurdles, or implementing cutting-edge design elements, I
              thrive on turning challenges into opportunities. By hiring me,
              you&apos;re not just getting a developer; you&apos;re gaining a
              problem solver dedicated to making your project a success.
            </p>
          </div>
        </div>
      </div>
      <div className="i-create-gold p-[3%]">
        <div>
          <h2>So what have i done before?</h2>
          <h3>
            I have worked with clients to build fast scalable responsive and
            highly dynamic sites.
          </h3>
          <h3>
            Harnessing the power of NextJS , and Backend as a Service providers
            like convex and firebase it has never been easier to create full
            stack apps. Check out some of my previous projects in my portfolio.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {projects.slice(0, 4).map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-5">
          <div>
            <div className="flex align-center mb-3">
              <div className="img-container relative">
                <Image src={arrow} alt="Arrow" className="center-absolutely" />
              </div>
              <p>Portfolio Page</p>
            </div>
            <p className="greyish">
              Visit my portfolio page to view more projects, view original
              design files and check out the source code.
            </p>
          </div>
          <ReadMore
            text="View More Projects"
            link="portfolio"
            className="text-black hover:border-orange sm:w-[20%]"
          />
        </div>
      </div>
    </main>
  );
}
