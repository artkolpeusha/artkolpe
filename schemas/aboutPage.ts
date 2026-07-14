import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "body", title: "Paragraph 1", type: "text", rows: 4 }),
        defineField({ name: "secondaryBody", title: "Paragraph 2", type: "text", rows: 4 }),
        defineField({ name: "tertiaryBody", title: "Paragraph 3", type: "text", rows: 4 }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
        defineField({ name: "imageUrl", title: "Image Fallback URL", type: "string" }),
      ],
    }),
    defineField({
      name: "statementSection",
      title: "Artist Statement Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
        defineField({ name: "body", title: "Paragraph 1", type: "text", rows: 4 }),
        defineField({ name: "secondaryBody", title: "Paragraph 2", type: "text", rows: 4 }),
        defineField({ name: "tertiaryBody", title: "Paragraph 3", type: "text", rows: 4 }),
        defineField({ name: "quaternaryBody", title: "Paragraph 4", type: "text", rows: 4 }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
        defineField({ name: "imageUrl", title: "Image Fallback URL", type: "string" }),
      ],
    }),
    defineField({
      name: "philosophySection",
      title: "Philosophy Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Paragraph 1", type: "text", rows: 4 }),
        defineField({ name: "secondaryBody", title: "Paragraph 2", type: "text", rows: 4 }),
        defineField({
          name: "purposeItems",
          title: "Purpose Items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "timelineSection",
      title: "Timeline Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({
          name: "items",
          title: "Timeline Items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
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
      return { title: "About Page" };
    },
  },
});
