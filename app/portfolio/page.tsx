import { assets } from "@/assets/assets";
import Project from "@/components/Project/Project";
import { personalProjects } from "@/util/PortfolioItems";
import Image from "next/image";
import { ReadMore } from "../../components/ReadMore/ReadMore";
import "../../css/portfolio.css";

const Page = () => {
  return (
    <div className="portfolio">
      <div className="dice">
        <Image src={assets.dice} alt="Dice" />
      </div>
      <div className="latest-portfolio flex space-between items-start">
        <div>
          <h1 className="large-heading">
            Latest <br />
            Projects
          </h1>
          <p className="my-7">
            Find below a list of my recent projects sorted in chronological
            order from <span className="orange">most recent. </span> Click any
            of them to read more.{" "}
          </p>
        </div>
        <ReadMore
          link={"contact"}
          text={"Contact"}
          className="hidden sm:flex"
        />
      </div>
      <div className="projects bg-white w-full px-[2%] sm:mt-[100px] grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pb-10">
        {personalProjects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
