import Project from "@/components/Project/Project";
import { TinyProject } from "@/components/TinyProject";
import {
  extraFrontendMentorProjects,
  frontendMentorProjects,
} from "@/util/PortfolioItems";
import PortFolioLayout from "../PortfolioLayout";

const Page = () => {
  return (
    <PortFolioLayout>
      {frontendMentorProjects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
      <p className="text-orange mb-5 text-lg font-semibold">
        A bunch of mini frontend projects
      </p>
      <div className="text-black w-full flex flex-wrap">
        {extraFrontendMentorProjects.map((project, i) => (
          <TinyProject project={project} key={i} />
        ))}
      </div>
    </PortFolioLayout>
  );
};

export default Page;
