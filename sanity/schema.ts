import { type SchemaTypeDefinition } from "sanity";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
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
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "youtubeId",
      title: "YouTube ID",
      type: "string",
    },
    {
      name: "desktopOnly",
      title: "Desktop Only",
      type: "boolean",
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
};
