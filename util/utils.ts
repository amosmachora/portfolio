import { createClient, groq } from "next-sanity";
import sanityConfig from "@/sanity.config";

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
  images: string[];
  category: string;
  description: string;
  title: string;
  live?: string;
  github?: string;
  languages: string[];
  openSourceLibraries?: string[];
  figma?: string;
  videoURL?: string;
  desktopOnly?: boolean;
  textParagraphs?: string[];
};

import { apiVersion, dataset, projectId } from "../sanity/env";

export async function getProjects(): Promise<SanityProjectType[]> {
  return createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
  }).fetch(
    groq`
      *[_type == "project"]{
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
      }
    `
  );
}
