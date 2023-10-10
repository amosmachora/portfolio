import Project from "@/components/Project/Project";
import { watchalongs } from "@/util/PortfolioItems";
import PortFolioLayout from "../PortfolioLayout";

const Page = () => {
  return (
    <PortFolioLayout>
      {watchalongs.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </PortFolioLayout>
  );
};

export default Page;
