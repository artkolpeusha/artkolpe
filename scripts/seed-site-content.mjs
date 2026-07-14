import { readFile } from "node:fs/promises";
import process from "node:process";

import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

function clean(value) {
  return String(value || "").replace(/^"(.*)"$/, "$1");
}

const projectId = clean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
const dataset = clean(process.env.NEXT_PUBLIC_SANITY_DATASET);
const apiVersion = clean(process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-15");
const token = clean(process.env.SANITY_API_TOKEN);

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing Sanity configuration. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const artworksFileUrl = new URL("../data/artworks.json", import.meta.url);
const artworks = JSON.parse(await readFile(artworksFileUrl, "utf8"));

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Usha Kolpe | International Artist Portfolio",
  description:
    "Explore my works as an artist and physician, where healing, humanity, and environmental consciousness converge through art.",
  brandName: "Usha Kolpe",
  footerBlurb:
    "International artist, physician, and environmental advocate creating work at the meeting point of healing, humanity, and planetary care.",
  logoImageUrl: "/images/Logo.png",
  navigation: [
    { _key: "nav-home", label: "Home", href: "/" },
    { _key: "nav-about", label: "About", href: "/about" },
    { _key: "nav-gallery", label: "Gallery", href: "/gallery" },
    { _key: "nav-exhibitions", label: "Exhibitions", href: "/exhibitions" },
    { _key: "nav-awards", label: "Awards", href: "/awards" },
    { _key: "nav-advocacy", label: "Advocacy", href: "/advocacy" },
    { _key: "nav-contact", label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { _key: "social-instagram", label: "Instagram", href: "https://instagram.com" },
    { _key: "social-facebook", label: "Facebook", href: "https://facebook.com" },
  ],
  contactEmail: "kolpesart@gmail.com",
  copyrightText: "Usha Kolpe. All rights reserved.",
  seo: {
    _type: "object",
    title: "Usha Kolpe | International Artist Portfolio",
    description:
      "Explore the internationally acclaimed works of artist and physician Usha Kolpe, where healing, humanity, and environmental consciousness converge through art.",
  },
};

const homepage = {
  _id: "homepage",
  _type: "homepage",
  hero: {
    title: "Usha Kolpe",
    subtitle: "Internationally Acclaimed Artist | Physician | Environmental Advocate",
    quote: '"Where Healing Meets Creativity, and Art Inspires Change."',
    description:
      "Through vibrant compositions and layered textures, I explore the connections between humanity, nature, healing, and the shared experiences that unite us all.",
    primaryCta: { label: "Explore Gallery", href: "/gallery", style: "dark" },
    secondaryCta: { label: "About the Artist", href: "/about", style: "outline" },
    stats: [
      { _key: "stat-1", value: "40", label: "Artwork records" },
      { _key: "stat-2", value: "11", label: "Global stages" },
      { _key: "stat-3", value: "4", label: "Major awards" },
    ],
    primaryImageUrl: "/images/artist/usha-kolpe.jpeg",
    secondaryImageUrl: "/images/artworks/usha-award.jpeg",
    secondaryImageCaption:
      "Expressive works exploring healing, nature, diversity, and human interconnectedness.",
  },
  awardsSection: {
    eyebrow: "Awards",
    title: "Recognitions",
  },
  aboutSection: {
    eyebrow: "About the Artist",
    title: "Meet Me",
    body:
      "I invite you into a vivid exploration of emotion and perception, where color and form intertwine to evoke both intimate reflection and expansive natural worlds.",
    secondaryBody:
      "As a self-taught artist and physician, I explore the powerful connection between healing and creativity. While medicine heals the body, art heals the soul.",
    tertiaryBody:
      "I blend scientific rigor with emotional intuition, allowing both worlds to shape the messages that emerge in each piece.",
    ctaLabel: "Learn More",
    ctaHref: "/about",
    imageUrl: "/images/artist/usha-award.jpeg",
  },
  philosophySection: {
    eyebrow: "Philosophy & Purpose",
    title: "Art as a catalyst for change.",
    body:
      "My work is diverse and not confined to a single style or theme. Instead, it reflects the many facets of life and the interconnectedness of the universe.",
    secondaryBody:
      "Through painting, I hope to inspire a healthier, more inclusive, and more harmonious world for all.",
    purposeItems: [
      "Peace",
      "Compassion",
      "Inclusivity",
      "Environmental Awareness",
      "Human Connection",
      "Shared Responsibility",
    ],
  },
  focusSection: {
    eyebrow: "Expressions in Focus",
    title: "Color, texture, movement, and the extraordinary within the ordinary.",
    body:
      "Through color, texture, and movement, I invite viewers to pause, reflect, and reconnect with themselves, with others, and with the world around them.",
    secondaryBody:
      "Each piece is an exploration of authenticity, vulnerability, healing, and hope.",
    artworks: [
      { _key: "focus-1", _type: "reference", _ref: "artwork.invocation-of-ganesha-in-the-sacred-lines-of-om" },
      { _key: "focus-2", _type: "reference", _ref: "artwork.radiance-of-the-cosmic-mother" },
    ],
  },
  latestArtworksSection: {
    eyebrow: "Latest Artwork",
    title: "Selected works from a living studio practice.",
    ctaLabel: "View All Works",
    ctaHref: "/gallery",
    artworks: [
      { _key: "latest-1", _type: "reference", _ref: "artwork.invocation-of-ganesha-in-the-sacred-lines-of-om" },
      { _key: "latest-2", _type: "reference", _ref: "artwork.radiance-of-the-cosmic-mother" },
      { _key: "latest-3", _type: "reference", _ref: "artwork.symmetry-within-the-silent-cosmos" },
      { _key: "latest-4", _type: "reference", _ref: "artwork.ethereal-guardian-of-the-fiery-veil" },
    ],
  },
  exhibitionsSection: {
    eyebrow: "Exhibitions & Recognition",
    title: "International presence across cultures and continents.",
    body:
      "My work has been shown on some of the world's prominent stages, connecting with audiences across cultures and continents.",
    ctaLabel: "View Exhibitions",
    ctaHref: "/exhibitions",
  },
  advocacySection: {
    eyebrow: "Environmental Advocacy",
    title: "Art for the planet.",
    body:
      "Protecting our planet is a central focus of my artistic expression. As an active participant in the United Nations Ocean Cleanup Project, I am deeply committed to protecting and nurturing Mother Earth.",
    quote: '"Protecting our planet is part of preserving beauty."',
    ctaLabel: "Explore Advocacy",
    ctaHref: "/advocacy",
  },
  shortBioSection: {
    enabled: false,
    eyebrow: "Short Bio",
    title: "A concise studio introduction for collectors, curators, and media.",
    body:
      "I am an internationally acclaimed self-taught artist and medical professional whose expressive works explore themes of healing, nature, diversity, and human interconnectedness. Exhibited globally and recognized with international awards, I use art as a powerful medium to inspire awareness, compassion, and positive social change while advocating for environmental sustainability.",
  },
  contactCtaSection: {
    enabled: false,
    eyebrow: "Collectors | Galleries | Collaborations | Media",
    title: "Begin a conversation with the studio.",
    body:
      "For acquisitions, exhibition opportunities, curatorial requests, and meaningful collaborations.",
    ctaLabel: "Contact the Studio",
    ctaHref: "/contact",
  },
  seo: {
    _type: "object",
    title: "Usha Kolpe | International Artist Portfolio",
    description:
      "Explore the internationally acclaimed works of artist and physician Usha Kolpe, where healing, humanity, and environmental consciousness converge through art.",
  },
};

const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  hero: {
    eyebrow: "Meet Me",
    title: "Where medicine and painting become one language of care.",
    body:
      "I invite you into a vivid exploration of emotion and perception, where color and form intertwine to evoke both intimate reflection and expansive natural worlds.",
    secondaryBody:
      "As a self-taught artist and physician, I explore the relationship between healing and creativity. While medicine tends to the body, art tends to the soul.",
    tertiaryBody:
      "My experiences in medicine and art guide me to observe the world with both scientific clarity and emotional curiosity, and this union shapes the work I make.",
    imageUrl: "/images/artist/usha-kolpe.jpeg",
  },
  statementSection: {
    eyebrow: "Artist Statement",
    quote:
      "My work is inspired by the beauty of nature, the diversity of people, and the complexity of the world.",
    body:
      "I speak through color, form, and gesture, inviting viewers into a space where change, compassion, and social harmony can coexist.",
    secondaryBody:
      "As a social artist, I aim to increase awareness, embrace diversity, and spread peace through every creation.",
    tertiaryBody:
      "I draw inspiration from the ordinary, uncovering meaning in everyday scenes while honoring the connection we share as people and as guardians of the planet.",
    quaternaryBody:
      "I hope my work reaches viewers on both emotional and intellectual levels, inviting a renewed sense of shared responsibility.",
    imageUrl: "/images/artist/usha-award.jpeg",
  },
  philosophySection: {
    eyebrow: "Philosophy & Purpose",
    title: "Art as a catalyst for change.",
    body:
      "My work is diverse and not confined to a single style or theme. Instead, it reflects the many facets of life and the world we inhabit. The variety in my art mirrors the complexity and interconnectedness of the universe, a concept that deeply inspires me.",
    secondaryBody:
      "I believe art has the unique ability to touch hearts and minds, encouraging collective commitment toward positive change.",
    purposeItems: [
      "Peace",
      "Compassion",
      "Inclusivity",
      "Environmental Awareness",
      "Human Connection",
      "Shared Responsibility",
    ],
  },
  timelineSection: {
    eyebrow: "Timeline",
    items: [
      "Physician",
      "Discovered Painting",
      "International Exhibitions",
      "Awards",
      "Environmental Advocacy",
    ],
  },
  seo: {
    _type: "object",
    title: "About | Usha Kolpe",
    description:
      "Meet Usha Kolpe, an internationally acclaimed artist, physician, and environmental advocate.",
  },
};

const galleryPage = {
  _id: "galleryPage",
  _type: "galleryPage",
  eyebrow: "Gallery",
  title: "A curated archive of color, healing, humanity, and earth.",
  description:
    "Explore works by collection or search by title. Each piece opens within the gallery while preserving a dedicated artwork URL.",
  seo: {
    _type: "object",
    title: "Gallery | Usha Kolpe",
    description: "Explore Usha Kolpe's gallery of healing, humanity, nature, and expressive works.",
  },
};

const awardsPage = {
  _id: "awardsPage",
  _type: "awardsPage",
  eyebrow: "Awards",
  title: "Recognition for artistic value, social vision, and cultural contribution.",
  description:
    "Awards and recognitions honoring Usha Kolpe's international artistic practice.",
  seo: {
    _type: "object",
    title: "Awards | Usha Kolpe",
    description:
      "Awards and recognitions honoring Usha Kolpe's international artistic practice.",
  },
};

const exhibitionsPage = {
  _id: "exhibitionsPage",
  _type: "exhibitionsPage",
  eyebrow: "Exhibitions",
  title: "An international presence across cultural capitals.",
  description: "My art continues to connect with audiences across cultures and continents.",
  heroImageUrl: "/images/exhibitions/global-exhibition.jpg",
  seo: {
    _type: "object",
    title: "Exhibitions | Usha Kolpe",
    description: "Selected international exhibition highlights for artist Usha Kolpe.",
  },
};

const advocacyPage = {
  _id: "advocacyPage",
  _type: "advocacyPage",
  hero: {
    eyebrow: "Advocacy",
    title: "Environmental sustainability as a creative responsibility.",
    quote:
      '"Protecting our planet is not separate from creating beauty; it is part of preserving it."',
    body:
      "Protecting our planet is a central focus of my artistic expression. As an active participant in the United Nations Ocean Cleanup Project, I am deeply committed to protecting and nurturing Mother Earth.",
    secondaryBody:
      "My paintings reflect this dedication by addressing environmental urgency, pollution, and the need for sustainable care of our planet.",
  },
  planetSection: {
    eyebrow: "Art for the Planet",
    title: "Awareness, responsibility, and care for future generations.",
    body:
      "Through my art, I strive to raise awareness about limiting environmental damage and encouraging people to take responsibility for preserving the natural world for future generations.",
  },
  relatedWorksSection: {
    eyebrow: "Related Works",
    artworks: [
      { _key: "advocacy-1", _type: "reference", _ref: "artwork.war-and-peace" },
      { _key: "advocacy-2", _type: "reference", _ref: "artwork.guardian-spirit-of-the-living-forest" },
      { _key: "advocacy-3", _type: "reference", _ref: "artwork.crimson-cry-of-the-fish" },
    ],
  },
  seo: {
    _type: "object",
    title: "Advocacy | Usha Kolpe",
    description:
      "Environmental sustainability and UN Ocean Cleanup participation in my artistic practice.",
  },
};

const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  eyebrow: "Contact",
  title:
    "If you are a collector, gallery, media partner, or collaborator, I'd be glad to hear from you.",
  description: "",
  seo: {
    _type: "object",
    title: "Contact | Usha Kolpe",
    description:
      "Contact Usha Kolpe's studio for collectors, galleries, media inquiries, and collaborations.",
  },
};

const awardDocs = [
  {
    _id: "award.international-pegasus-award",
    _type: "award",
    title: "International PEGASUS Award",
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    sortOrder: 1,
    featuredOnHome: true,
  },
  {
    _id: "award.leaders-protagonist-award",
    _type: "award",
    title: "Leaders Protagonist Award",
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    sortOrder: 2,
    featuredOnHome: true,
  },
  {
    _id: "award.ambassador-of-art-for-artistic-value",
    _type: "award",
    title: "Ambassador of Art for Artistic Value",
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    sortOrder: 3,
    featuredOnHome: true,
  },
  {
    _id: "award.youth-human-rights-international-war-and-peace-contest",
    _type: "award",
    title: 'Youth Human Rights International "War and Peace" Contest Recipient (Washington D.C.)',
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    sortOrder: 4,
    featuredOnHome: true,
  },
];

const exhibitionDocs = [
  ["Venice Biennale", "Italy"],
  ["Times Square", "New York"],
  ["London", "United Kingdom"],
  ["Venice", "Italy"],
  ["Rome", "Italy"],
  ["Sanremo", "Italy"],
  ["Athens", "Greece"],
  ["Tokyo", "Japan"],
  ["Dubai", "United Arab Emirates"],
  ["Madrid", "Spain"],
  ["Switzerland", "Europe"],
  ["Grenada", "Caribbean"],
].map(([title, subtitle], index) => ({
  _id: `exhibition.${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
  _type: "exhibition",
  title,
  subtitle,
  description:
    "Selected exhibitions that have shaped my practice and carried my work into new cultural conversations around the world.",
  sortOrder: index + 1,
  featuredOnHome: true,
}));

const categoryTitles = [...new Set(artworks.map((artwork) => artwork.collection))];

const categoryDocs = categoryTitles.map((title, index) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return {
    _id: `galleryCategory.${slug}`,
    _type: "galleryCategory",
    title,
    slug: {
      _type: "slug",
      current: slug,
    },
    sortOrder: index + 1,
  };
});

const artworkDocs = artworks.map((artwork, index) => {
  const categorySlug = artwork.collection.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return {
    _id: `artwork.${artwork.slug}`,
    _type: "artwork",
    title: artwork.title,
    slug: {
      _type: "slug",
      current: artwork.slug,
    },
    year: artwork.year,
    medium: artwork.medium,
    dimensions: artwork.dimensions,
    collection: artwork.collection,
    category: {
      _type: "reference",
      _ref: `galleryCategory.${categorySlug}`,
    },
    description: artwork.description,
    availability: artwork.availability,
    imageUrl: artwork.image,
    sortOrder: index + 1,
  };
});

const singletonDocs = [
  siteSettings,
  homepage,
  aboutPage,
  galleryPage,
  awardsPage,
  exhibitionsPage,
  advocacyPage,
  contactPage,
];

for (const doc of categoryDocs) {
  await client.createOrReplace(doc);
  console.log(`Seeded category: ${doc.title}`);
}

for (const doc of artworkDocs) {
  await client.createOrReplace(doc);
}
console.log(`Seeded ${artworkDocs.length} artworks.`);

for (const doc of singletonDocs) {
  await client.createOrReplace(doc);
  console.log(`Seeded singleton: ${doc._id}`);
}

for (const doc of awardDocs) {
  await client.createOrReplace(doc);
}
console.log(`Seeded ${awardDocs.length} awards.`);

for (const doc of exhibitionDocs) {
  await client.createOrReplace(doc);
}
console.log(`Seeded ${exhibitionDocs.length} exhibitions.`);

console.log("Finished seeding site content.");
