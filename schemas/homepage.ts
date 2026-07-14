import { defineArrayMember, defineField, defineType } from "sanity";

const ctaFields = [
  defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
  defineField({ name: "href", title: "Link", type: "string", validation: (Rule) => Rule.required() }),
  defineField({
    name: "style",
    title: "Style",
    type: "string",
    initialValue: "dark",
    options: { list: ["dark", "outline", "light"] },
  }),
];

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
        defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
        defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
        defineField({
          name: "primaryCta",
          title: "Primary CTA",
          type: "object",
          fields: ctaFields,
        }),
        defineField({
          name: "secondaryCta",
          title: "Secondary CTA",
          type: "object",
          fields: ctaFields,
        }),
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "value", title: "Value", type: "string", validation: (Rule) => Rule.required() }),
                defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
              ],
              preview: {
                select: { title: "label", subtitle: "value" },
              },
            }),
          ],
        }),
        defineField({
          name: "primaryImage",
          title: "Primary Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "primaryImageUrl",
          title: "Primary Image Fallback URL",
          type: "string",
          description: "Optional local path like /images/artist/usha-kolpe.jpeg",
        }),
        defineField({
          name: "secondaryImage",
          title: "Secondary Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "secondaryImageUrl",
          title: "Secondary Image Fallback URL",
          type: "string",
          description: "Optional local path like /images/artworks/usha-award.jpeg",
        }),
        defineField({ name: "secondaryImageCaption", title: "Secondary Image Caption", type: "string" }),
      ],
    }),
    defineField({
      name: "awardsSection",
      title: "Awards Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
      ],
    }),
    defineField({
      name: "aboutSection",
      title: "About Preview Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Paragraph 1", type: "text", rows: 4 }),
        defineField({ name: "secondaryBody", title: "Paragraph 2", type: "text", rows: 4 }),
        defineField({ name: "tertiaryBody", title: "Paragraph 3", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "imageUrl",
          title: "Image Fallback URL",
          type: "string",
          description: "Optional local path like /images/artist/usha-award.jpeg",
        }),
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
      name: "focusSection",
      title: "Focus Artworks Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Paragraph 1", type: "text", rows: 4 }),
        defineField({ name: "secondaryBody", title: "Paragraph 2", type: "text", rows: 4 }),
        defineField({
          name: "artworks",
          title: "Focus Artworks",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "artwork" }] })],
        }),
      ],
    }),
    defineField({
      name: "latestArtworksSection",
      title: "Latest Artworks Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
        defineField({
          name: "artworks",
          title: "Selected Artworks",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "artwork" }] })],
        }),
      ],
    }),
    defineField({
      name: "exhibitionsSection",
      title: "Exhibitions Preview Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Description", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
      ],
    }),
    defineField({
      name: "advocacySection",
      title: "Advocacy Preview Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Description", type: "text", rows: 4 }),
        defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
      ],
    }),
    defineField({
      name: "shortBioSection",
      title: "Short Bio Section",
      type: "object",
      fields: [
        defineField({ name: "enabled", title: "Show Section", type: "boolean", initialValue: false }),
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 6 }),
      ],
    }),
    defineField({
      name: "contactCtaSection",
      title: "Contact CTA Section",
      type: "object",
      fields: [
        defineField({ name: "enabled", title: "Show Section", type: "boolean", initialValue: false }),
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
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
      return { title: "Homepage" };
    },
  },
});
