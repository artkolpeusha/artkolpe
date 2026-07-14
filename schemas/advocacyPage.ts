import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "advocacyPage",
  title: "Advocacy Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
        defineField({ name: "body", title: "Paragraph 1", type: "text", rows: 4 }),
        defineField({ name: "secondaryBody", title: "Paragraph 2", type: "text", rows: 4 }),
      ],
    }),
    defineField({
      name: "planetSection",
      title: "Art for the Planet Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Description", type: "text", rows: 4 }),
      ],
    }),
    defineField({
      name: "relatedWorksSection",
      title: "Related Works Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({
          name: "artworks",
          title: "Related Artworks",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "artwork" }] })],
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Meta Title", type: "string" }),
        defineField({ name: "description", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "image", title: "Social Share Image", type: "image", options: { hotspot: true } }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Advocacy Page" };
    },
  },
});
