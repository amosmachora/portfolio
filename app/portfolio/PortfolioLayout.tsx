import { PortfolioNav } from "@/components/PortfolioNav";
import { ReadMore } from "../../components/ReadMore/ReadMore";
import "../../css/portfolio.css";

const PortFolioLayout = ({ children }: { children: React.ReactNode }) => {
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
            order. Click any of them to{" "}
            <span className="orange">read more.</span>
          </p>
        </div>
        <ReadMore link={"contact"} text={"Contact"} />
      </div>
      <PortfolioNav />
      <div className="projects flex justify-between bg-white w-full flex-wrap px-[2%] sm:mt-[100px]">
        {children}
      </div>
    </div>
  );
};

export default PortFolioLayout;
