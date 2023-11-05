import { type SchemaTypeDefinition } from "sanity";

const project: SchemaTypeDefinition<"object"> = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "live",
      title: "Live",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub",
      type: "url",
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "openSourceLibraries",
      title: "Open Source Libraries",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "figma",
      title: "Figma",
      type: "url",
    },
    {
      name: "videoURL",
      title: "video URL",
      type: "string",
    },
    {
      name: "desktopOnly",
      title: "Desktop Only",
      type: "boolean",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
};
