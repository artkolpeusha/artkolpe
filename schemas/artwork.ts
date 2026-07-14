// schemas/artwork.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "medium", title: "Medium", type: "string" }),
    defineField({ name: "dimensions", title: "Dimensions", type: "string" }),
    defineField({
      name: "category",
      title: "Gallery Category",
      type: "reference",
      to: [{ type: "galleryCategory" }],
      description: "Assign this artwork to a category that can be managed separately in the CMS.",
    }),
    defineField({
      name: "collection",
      title: "Legacy Category Label",
      type: "string",
      description: "Optional fallback used by older records while content is being migrated.",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "availability", title: "Availability", type: "string", options: { list: ["Available", "Sold", "Private Collection"] } }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "imageUrl",
      title: "Fallback Image Path",
      type: "string",
      description: "Optional local image path such as /images/artworks/artwork-1.jpg while content is being migrated.",
    }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 100 }),
  ]
});
