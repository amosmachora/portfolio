import Image from "next/image";
import Link from "next/link";
import "./Project.css";
import { SanityProjectType, sanityClient } from "@/util/utils";
import { useNextSanityImage } from "next-sanity-image";

const Project = ({ project }: { project: SanityProjectType }) => {
  const imageProps = useNextSanityImage(sanityClient, project.mainImage);

  return (
    <div className="project text-black border-b-2 border-orange pb-10">
      <Image
        src={imageProps.src}
        width={imageProps.width}
        height={imageProps.height}
        alt={project.title}
        className="max-h-[50vh] object-cover"
      />
      <div className="px-[3%] sm:px-[6%]">
        <p className="category">{project.category}</p>
        <Link
          href={`/portfolio/${project.slug}`}
          className={`text-black text-[40px] ${
            project.live &&
            "cursor hover:text-orange transition-all duration-300"
          }`}
        >
          {project.title}
        </Link>
        <p className="project-description greyish">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
