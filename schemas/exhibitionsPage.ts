import { defineField, defineType } from "sanity";

export default defineType({
  name: "exhibitionsPage",
  title: "Exhibitions Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Intro Description", type: "text", rows: 4 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroImageUrl", title: "Hero Image Fallback URL", type: "string" }),
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
      return { title: "Exhibitions Page" };
    },
  },
});
