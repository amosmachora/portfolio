import { ProjectLanguages } from "@/components/Project/ProjectLanguages";
import { ProjectImageCarousel } from "@/components/ProjectImageCarousel";
import { ProjectOutBoundLinks } from "@/components/ProjectOutBoundLinks";
import { ProjectPageHero } from "@/components/ProjectPageHero";
import { ProjectPlayButton } from "@/components/ProjectPlayButton";
import { ProjectResponsivenessIndicator } from "@/components/ProjectResponsivenessIndicator";
import { getFirstImageUrl, getProject } from "@/util/utils";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "@portabletext/react";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // fetch data
  const project = await getProject(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const imageURL = await getFirstImageUrl(slug);

  return {
    title: project.title,
    openGraph: {
      images: [imageURL, ...previousImages],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  return (
    <main className="mx-[2%] relative">
      <Link
        href={"/portfolio"}
        className="w-10 h-10 bg-orange text-white transition-all duration-300 absolute top-2 left-2 z-40"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="center-absolutely" />
      </Link>
      <ProjectPageHero alt={project.title} image={project.mainImage} />
      <section className="px-[5%] sm:px-[10%] py-[5%] bg-white text-[#081019] single-project">
        <div className="flex justify-between items-center">
          <p className="category">{project?.category}</p>
          <ProjectResponsivenessIndicator project={project} />
        </div>
        <h1 className="text-[#081019] text-5xl font-medium my-5">
          {project?.title}
        </h1>
        <p className="text-[#536375] text-sm font-light mt-6">
          {project?.description}
        </p>
        <p className="orange font-semibold border-l-4 border-orange leading-10 pl-5 mt-14 sm:mt-6">
          Tech Stack
        </p>
        <ProjectLanguages
          className="mt-8 sm:mt-5"
          languages={project.languages}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 sm:mt-20 mb-5 sm:mb-10">
          <p className="text-[#081019] text-xl font-medium my-10 sm:my-2">
            Take a look at some of the site screenshots.
          </p>
          {project.videoURL && <ProjectPlayButton link={project.videoURL} />}
        </div>
        <div className="relative">
          <ProjectImageCarousel images={project.images} />
        </div>
        <ProjectOutBoundLinks project={project} />
        {project.content && <PortableText value={project.content} />}
      </section>
    </main>
  );
};

export default Page;
