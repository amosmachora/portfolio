import Project from "@/components/Project/Project";
import { extraProjects, projects } from "@/util/PortfolioItems";
import { ReadMore } from "../../components/ReadMore/ReadMore";
import "../../css/portfolio.css";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="portfolio">
      <div className="dice">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/dice.png"} alt="Dice" />
      </div>
      <div className="latest-portfolio flex space-between items-start">
        <div>
          <h1 className="large-heading">
            Latest <br />
            Projects
          </h1>
          <p className="my-7">
            Find below a list of my recent projects sorted in chronological
            order from <span className="orange">most recent .</span> Click any
            of them to read more.{" "}
          </p>
        </div>
        <ReadMore
          link={"contact"}
          text={"Contact"}
          className="hidden sm:flex"
        />
      </div>
      <div className="projects bg-white w-full px-[2%] sm:mt-[100px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
      <div className="mt-20 mb-[10%] px-[5%]">
        <h2 className="text-2xl mb-5">Extra Projects</h2>
        <p className="text-sm w-1/2">
          This are extra small prototype projects that i did for fun. They might
          not offer much insight but i saw no reason not to include them here.
        </p>
      </div>
      <div className="projects bg-white w-full px-[2%] grid grid-cols-1 sm:grid-cols-2 gap-10">
        {extraProjects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
