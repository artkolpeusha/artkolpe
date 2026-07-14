import { defineField, defineType } from "sanity";

export default defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Award Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "link", title: "Link", type: "string" }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 100 }),
    defineField({ name: "featuredOnHome", title: "Show on Homepage", type: "boolean", initialValue: true }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
});
