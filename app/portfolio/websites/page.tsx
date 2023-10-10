import Project from "@/components/Project/Project";
import { websites } from "@/util/PortfolioItems";
import PortFolioLayout from "../PortfolioLayout";

const page = () => {
  return (
    <PortFolioLayout>
      {websites.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </PortFolioLayout>
  );
};

export default page;
