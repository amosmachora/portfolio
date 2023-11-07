import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { createClient, groq } from "next-sanity";
import { PortableTextBlock } from "sanity";
import { apiVersion, dataset, projectId } from "../sanity/env";

export const pages = ["start-page", "about-me", "portfolio", "contact"];

export function calculateAge(birthDate: Date): number {
  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  // Check if the birthday for this year has not occurred yet
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

export type SanityProjectType = {
  _id: string;
  _createdAt: string;
  images: SanityImageObject[];
  category: string;
  description: string;
  title: string;
  languages: string[];
  mainImage: SanityImageObject;
  slug: string;
  live?: string;
  github?: string;
  openSourceLibraries?: string[];
  figma?: string;
  videoURL?: string;
  desktopOnly?: boolean;
  textParagraphs?: string[];
  content?: PortableTextBlock[];
};

export const sanityClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

export async function getProjects(): Promise<SanityProjectType[]> {
  return sanityClient.fetch(
    groq`
      *[_type == "project"] | order(_updatedAt desc){
        _id,
        _createdAt,
        _updatedAt,
        title,
        "slug": slug.current,
        mainImage,
        content,
        category,
        images,
        description,
        live,
        github,
        languages,
        openSourceLibraries,
        figma,
        videoURL,
        desktopOnly,
      }
    `
  );
}

export async function getProject(slug: string): Promise<SanityProjectType> {
  return sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      mainImage,
      content,
      category,
      images,
      description,
      live,
      github,
      languages,
      openSourceLibraries,
      figma,
      videoURL,
      desktopOnly,
    }`,
    { slug }
  );
}
