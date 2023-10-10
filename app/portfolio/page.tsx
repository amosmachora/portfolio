import Project from "@/components/Project/Project";
import { webapps } from "@/util/PortfolioItems";
import PortFolioLayout from "./PortfolioLayout";

const Page = () => {
  return (
    <PortFolioLayout>
      {webapps.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </PortFolioLayout>
  );
};

export default Page;
