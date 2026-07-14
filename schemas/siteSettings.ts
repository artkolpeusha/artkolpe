// schemas/siteSettings.ts
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "description", title: "Site Description", type: "text" }),
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "footerBlurb", title: "Footer Blurb", type: "text", rows: 4 }),
    defineField({ name: "logoImage", title: "Logo Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "logoImageUrl", title: "Logo Fallback URL", type: "string" }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [defineArrayMember({ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "href", title: "URL", type: "string" })
      ]})]
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [defineArrayMember({ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "href", title: "URL", type: "string" })
      ]})]
    }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "copyrightText", title: "Copyright Text", type: "string" }),
    defineField({
      name: "seo",
      title: "Default SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Default Meta Title", type: "string" }),
        defineField({ name: "description", title: "Default Meta Description", type: "text", rows: 3 }),
        defineField({ name: "image", title: "Default Social Share Image", type: "image", options: { hotspot: true } }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
