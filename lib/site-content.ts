import { cache } from "react";

import { client, isSanityConfigured } from "@/sanity/lib/client";
import { type Artwork, getAllArtworks } from "@/lib/artworks";

export type LinkItem = {
  label: string;
  href: string;
  style?: "dark" | "outline" | "light";
};

export type SeoContent = {
  title: string;
  description: string;
  image: string;
};

export type SiteSettingsContent = {
  title: string;
  description: string;
  brandName: string;
  footerBlurb: string;
  logoImage: string;
  navigation: LinkItem[];
  socialLinks: LinkItem[];
  contactEmail: string;
  copyrightText: string;
  seo: SeoContent;
};

export type HomePageContent = {
  hero: {
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    stats: Array<{ value: string; label: string }>;
    primaryImage: string;
    secondaryImage: string;
    secondaryImageCaption: string;
  };
  awardsSection: { eyebrow: string; title: string };
  aboutSection: {
    eyebrow: string;
    title: string;
    body: string;
    secondaryBody: string;
    tertiaryBody: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
  };
  philosophySection: {
    eyebrow: string;
    title: string;
    body: string;
    secondaryBody: string;
    purposeItems: string[];
  };
  focusSection: {
    eyebrow: string;
    title: string;
    body: string;
    secondaryBody: string;
    artworks: Artwork[];
  };
  latestArtworksSection: {
    eyebrow: string;
    title: string;
    ctaLabel: string;
    ctaHref: string;
    artworks: Artwork[];
  };
  exhibitionsSection: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  advocacySection: {
    eyebrow: string;
    title: string;
    body: string;
    quote: string;
    ctaLabel: string;
    ctaHref: string;
  };
  shortBioSection: {
    enabled: boolean;
    eyebrow: string;
    title: string;
    body: string;
  };
  contactCtaSection: {
    enabled: boolean;
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  seo: SeoContent;
};

export type AboutPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    secondaryBody: string;
    tertiaryBody: string;
    image: string;
  };
  statementSection: {
    eyebrow: string;
    quote: string;
    body: string;
    secondaryBody: string;
    tertiaryBody: string;
    quaternaryBody: string;
    image: string;
  };
  philosophySection: {
    eyebrow: string;
    title: string;
    body: string;
    secondaryBody: string;
    purposeItems: string[];
  };
  timelineSection: {
    eyebrow: string;
    items: string[];
  };
  seo: SeoContent;
};

export type GalleryPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  seo: SeoContent;
};

export type AwardItem = {
  id: string;
  title: string;
  description: string;
  year: string;
  link: string;
  sortOrder: number;
  featuredOnHome: boolean;
};

export type AwardsPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  seo: SeoContent;
};

export type ExhibitionItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sortOrder: number;
  featuredOnHome: boolean;
};

export type ExhibitionsPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  seo: SeoContent;
};

export type AdvocacyPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    quote: string;
    body: string;
    secondaryBody: string;
  };
  planetSection: {
    eyebrow: string;
    title: string;
    body: string;
  };
  relatedWorksSection: {
    eyebrow: string;
    artworks: Artwork[];
  };
  seo: SeoContent;
};

export type ContactPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  seo: SeoContent;
};

const defaultSeo: SeoContent = {
  title: "Usha Kolpe | International Artist Portfolio",
  description:
    "Explore the internationally acclaimed works of artist and physician Usha Kolpe, where healing, humanity, and environmental consciousness converge through art.",
  image: "/images/artworks/artwork-1.jpg",
};

const fallbackSiteSettings: SiteSettingsContent = {
  title: "Usha Kolpe | International Artist Portfolio",
  description:
    "Explore my works as an artist and physician, where healing, humanity, and environmental consciousness converge through art.",
  brandName: "Usha Kolpe",
  footerBlurb:
    "International artist, physician, and environmental advocate creating work at the meeting point of healing, humanity, and planetary care.",
  logoImage: "/images/Logo.png",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/exhibitions", label: "Exhibitions" },
    { href: "/awards", label: "Awards" },
    { href: "/advocacy", label: "Advocacy" },
    { href: "/contact", label: "Contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
  contactEmail: "kolpesart@gmail.com",
  copyrightText: "Usha Kolpe. All rights reserved.",
  seo: defaultSeo,
};

const fallbackHomePageBase = {
  hero: {
    title: "Usha Kolpe",
    subtitle: "Internationally Acclaimed Artist | Physician | Environmental Advocate",
    quote: '"Where Healing Meets Creativity, and Art Inspires Change."',
    description:
      "Through vibrant compositions and layered textures, I explore the connections between humanity, nature, healing, and the shared experiences that unite us all.",
    primaryCta: { label: "Explore Gallery", href: "/gallery", style: "dark" as const },
    secondaryCta: { label: "About the Artist", href: "/about", style: "outline" as const },
    stats: [
      { value: "20", label: "Artwork records" },
      { value: "11", label: "Global stages" },
      { value: "4", label: "Major awards" },
    ],
    primaryImage: "/images/artist/usha-kolpe.jpeg",
    secondaryImage: "/images/artworks/usha-award.jpeg",
    secondaryImageCaption:
      "Expressive works exploring healing, nature, diversity, and human interconnectedness.",
  },
  awardsSection: { eyebrow: "Awards", title: "Recognitions" },
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
    image: "/images/artist/usha-award.jpeg",
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
    secondaryBody: "Each piece is an exploration of authenticity, vulnerability, healing, and hope.",
  },
  latestArtworksSection: {
    eyebrow: "Latest Artwork",
    title: "Selected works from a living studio practice.",
    ctaLabel: "View All Works",
    ctaHref: "/gallery",
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
  seo: defaultSeo,
};

const fallbackAboutPage: AboutPageContent = {
  hero: {
    eyebrow: "Meet Me",
    title: "Where medicine and painting become one language of care.",
    body:
      "I invite you into a vivid exploration of emotion and perception, where color and form intertwine to evoke both intimate reflection and expansive natural worlds.",
    secondaryBody:
      "As a self-taught artist and physician, I explore the relationship between healing and creativity. While medicine tends to the body, art tends to the soul.",
    tertiaryBody:
      "My experiences in medicine and art guide me to observe the world with both scientific clarity and emotional curiosity, and this union shapes the work I make.",
    image: "/images/artist/usha-kolpe.jpeg",
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
    image: "/images/artist/usha-award.jpeg",
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
    title: "About | Usha Kolpe",
    description:
      "Meet Usha Kolpe, an internationally acclaimed artist, physician, and environmental advocate.",
    image: "/images/artist/usha-kolpe.jpeg",
  },
};

const fallbackGalleryPage: GalleryPageContent = {
  eyebrow: "Gallery",
  title: "A curated archive of color, healing, humanity, and earth.",
  description:
    "Explore works by collection or search by title. Each piece opens within the gallery while preserving a dedicated artwork URL.",
  seo: {
    title: "Gallery | Usha Kolpe",
    description: "Explore Usha Kolpe's gallery of healing, humanity, nature, and expressive works.",
    image: "/images/artworks/artwork-1.jpg",
  },
};

const fallbackAwardsPage: AwardsPageContent = {
  eyebrow: "Awards",
  title: "Recognition for artistic value, social vision, and cultural contribution.",
  description:
    "Awards and recognitions honoring Usha Kolpe's international artistic practice.",
  seo: {
    title: "Awards | Usha Kolpe",
    description: "Awards and recognitions honoring Usha Kolpe's international artistic practice.",
    image: "/images/artworks/usha-award.jpeg",
  },
};

const fallbackAwards: AwardItem[] = [
  {
    id: "award-1",
    title: "International PEGASUS Award",
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    year: "",
    link: "",
    sortOrder: 1,
    featuredOnHome: true,
  },
  {
    id: "award-2",
    title: "Leaders Protagonist Award",
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    year: "",
    link: "",
    sortOrder: 2,
    featuredOnHome: true,
  },
  {
    id: "award-3",
    title: "Ambassador of Art for Artistic Value",
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    year: "",
    link: "",
    sortOrder: 3,
    featuredOnHome: true,
  },
  {
    id: "award-4",
    title: 'Youth Human Rights International "War and Peace" Contest Recipient (Washington D.C.)',
    description:
      "Recognition reflecting my commitment to using art as a force for awareness, compassion, and transformation.",
    year: "",
    link: "",
    sortOrder: 4,
    featuredOnHome: true,
  },
];

const fallbackExhibitionsPage: ExhibitionsPageContent = {
  eyebrow: "Exhibitions",
  title: "An international presence across cultural capitals.",
  description: "My art continues to connect with audiences across cultures and continents.",
  heroImage: "/images/exhibitions/global-exhibition.jpg",
  seo: {
    title: "Exhibitions | Usha Kolpe",
    description: "Selected international exhibition highlights for artist Usha Kolpe.",
    image: "/images/exhibitions/global-exhibition.jpg",
  },
};

const fallbackExhibitions: ExhibitionItem[] = [
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
  id: `exhibition-${index + 1}`,
  title,
  subtitle,
  description:
    "Selected exhibitions that have shaped my practice and carried my work into new cultural conversations around the world.",
  sortOrder: index + 1,
  featuredOnHome: true,
}));

const fallbackAdvocacyPageBase = {
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
  },
  seo: {
    title: "Advocacy | Usha Kolpe",
    description: "Environmental sustainability and UN Ocean Cleanup participation in my artistic practice.",
    image: "/images/paintings/War and Peace.jpg",
  },
};

const fallbackContactPage: ContactPageContent = {
  eyebrow: "Contact",
  title:
    "If you are a collector, gallery, media partner, or collaborator, I'd be glad to hear from you.",
  description: "",
  seo: {
    title: "Contact | Usha Kolpe",
    description: "Contact Usha Kolpe's studio for collectors, galleries, media inquiries, and collaborations.",
    image: "/images/artworks/artwork-1.jpg",
  },
};

const artworkProjection = `{
  "id": coalesce(_id, slug.current),
  title,
  "slug": slug.current,
  year,
  medium,
  dimensions,
  "collection": coalesce(category->title, collection),
  description,
  availability,
  "image": coalesce(image.asset->url, imageUrl)
}`;

function mergeSeo(seo?: Partial<SeoContent>): SeoContent {
  return {
    title: seo?.title || defaultSeo.title,
    description: seo?.description || defaultSeo.description,
    image: seo?.image || defaultSeo.image,
  };
}

function withFallback<T>(value: T | null | undefined, fallback: T): T {
  return value ?? fallback;
}

const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  title,
  description,
  brandName,
  footerBlurb,
  "logoImage": coalesce(logoImage.asset->url, logoImageUrl),
  navigation[]{label, href},
  socialLinks[]{label, href},
  contactEmail,
  copyrightText,
  seo{
    title,
    description,
    "image": image.asset->url
  }
}`;

const homepageQuery = `*[_id == "homepage"][0]{
  hero{
    title,
    subtitle,
    quote,
    description,
    primaryCta{label, href, style},
    secondaryCta{label, href, style},
    stats[]{value, label},
    "primaryImage": coalesce(primaryImage.asset->url, primaryImageUrl),
    "secondaryImage": coalesce(secondaryImage.asset->url, secondaryImageUrl),
    secondaryImageCaption
  },
  awardsSection{eyebrow, title},
  aboutSection{
    eyebrow,
    title,
    body,
    secondaryBody,
    tertiaryBody,
    ctaLabel,
    ctaHref,
    "image": coalesce(image.asset->url, imageUrl)
  },
  philosophySection{
    eyebrow,
    title,
    body,
    secondaryBody,
    purposeItems
  },
  focusSection{
    eyebrow,
    title,
    body,
    secondaryBody,
    artworks[]->${artworkProjection}
  },
  latestArtworksSection{
    eyebrow,
    title,
    ctaLabel,
    ctaHref,
    artworks[]->${artworkProjection}
  },
  exhibitionsSection{
    eyebrow,
    title,
    body,
    ctaLabel,
    ctaHref
  },
  advocacySection{
    eyebrow,
    title,
    body,
    quote,
    ctaLabel,
    ctaHref
  },
  shortBioSection{
    enabled,
    eyebrow,
    title,
    body
  },
  contactCtaSection{
    enabled,
    eyebrow,
    title,
    body,
    ctaLabel,
    ctaHref
  },
  seo{
    title,
    description,
    "image": image.asset->url
  }
}`;

const aboutPageQuery = `*[_id == "aboutPage"][0]{
  hero{
    eyebrow,
    title,
    body,
    secondaryBody,
    tertiaryBody,
    "image": coalesce(image.asset->url, imageUrl)
  },
  statementSection{
    eyebrow,
    quote,
    body,
    secondaryBody,
    tertiaryBody,
    quaternaryBody,
    "image": coalesce(image.asset->url, imageUrl)
  },
  philosophySection{
    eyebrow,
    title,
    body,
    secondaryBody,
    purposeItems
  },
  timelineSection{
    eyebrow,
    items
  },
  seo{
    title,
    description,
    "image": image.asset->url
  }
}`;

const simplePageQuery = (id: string) => `*[_id == "${id}"][0]{
  eyebrow,
  title,
  description,
  seo{
    title,
    description,
    "image": image.asset->url
  }
}`;

const exhibitionsPageQuery = `*[_id == "exhibitionsPage"][0]{
  eyebrow,
  title,
  description,
  "heroImage": coalesce(heroImage.asset->url, heroImageUrl),
  seo{
    title,
    description,
    "image": image.asset->url
  }
}`;

const advocacyPageQuery = `*[_id == "advocacyPage"][0]{
  hero{
    eyebrow,
    title,
    quote,
    body,
    secondaryBody
  },
  planetSection{
    eyebrow,
    title,
    body
  },
  relatedWorksSection{
    eyebrow,
    artworks[]->${artworkProjection}
  },
  seo{
    title,
    description,
    "image": image.asset->url
  }
}`;

const awardsQuery = `*[_type == "award"] | order(sortOrder asc, _createdAt asc){
  "id": _id,
  title,
  description,
  year,
  link,
  sortOrder,
  featuredOnHome
}`;

const exhibitionsQuery = `*[_type == "exhibition"] | order(sortOrder asc, _createdAt asc){
  "id": _id,
  title,
  subtitle,
  description,
  sortOrder,
  featuredOnHome
}`;

const getSiteSettingsCached = cache(async (): Promise<SiteSettingsContent> => {
  if (!isSanityConfigured) return fallbackSiteSettings;

  try {
    const content = await client.fetch<Partial<SiteSettingsContent> | null>(siteSettingsQuery);
    if (!content) return fallbackSiteSettings;

    return {
      title: content.title || fallbackSiteSettings.title,
      description: content.description || fallbackSiteSettings.description,
      brandName: content.brandName || fallbackSiteSettings.brandName,
      footerBlurb: content.footerBlurb || fallbackSiteSettings.footerBlurb,
      logoImage: content.logoImage || fallbackSiteSettings.logoImage,
      navigation: content.navigation?.filter((item) => item?.label && item?.href) || fallbackSiteSettings.navigation,
      socialLinks: content.socialLinks?.filter((item) => item?.label && item?.href) || fallbackSiteSettings.socialLinks,
      contactEmail: content.contactEmail || fallbackSiteSettings.contactEmail,
      copyrightText: content.copyrightText || fallbackSiteSettings.copyrightText,
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local site settings because the Sanity fetch failed.", error);
    return fallbackSiteSettings;
  }
});

export const getSiteSettings = getSiteSettingsCached;

const getHomePageCached = cache(async (): Promise<HomePageContent> => {
  const allArtworks = await getAllArtworks();
  const featured = allArtworks.slice(0, 4);
  const focusWorks = allArtworks.slice(0, 2);
  const fallbackHomePage: HomePageContent = {
    ...fallbackHomePageBase,
    focusSection: {
      ...fallbackHomePageBase.focusSection,
      artworks: focusWorks,
    },
    latestArtworksSection: {
      ...fallbackHomePageBase.latestArtworksSection,
      artworks: featured,
    },
  };

  if (!isSanityConfigured) return fallbackHomePage;

  try {
    const content = await client.fetch<Partial<HomePageContent> | null>(homepageQuery);
    if (!content) return fallbackHomePage;

    return {
      hero: {
        ...fallbackHomePage.hero,
        ...content.hero,
        primaryCta: withFallback(content.hero?.primaryCta, fallbackHomePage.hero.primaryCta),
        secondaryCta: withFallback(content.hero?.secondaryCta, fallbackHomePage.hero.secondaryCta),
        stats: content.hero?.stats?.length ? content.hero.stats : fallbackHomePage.hero.stats,
      },
      awardsSection: { ...fallbackHomePage.awardsSection, ...content.awardsSection },
      aboutSection: { ...fallbackHomePage.aboutSection, ...content.aboutSection },
      philosophySection: {
        ...fallbackHomePage.philosophySection,
        ...content.philosophySection,
        purposeItems: content.philosophySection?.purposeItems?.length
          ? content.philosophySection.purposeItems
          : fallbackHomePage.philosophySection.purposeItems,
      },
      focusSection: {
        ...fallbackHomePage.focusSection,
        ...content.focusSection,
        artworks: content.focusSection?.artworks?.length ? content.focusSection.artworks : focusWorks,
      },
      latestArtworksSection: {
        ...fallbackHomePage.latestArtworksSection,
        ...content.latestArtworksSection,
        artworks: content.latestArtworksSection?.artworks?.length
          ? content.latestArtworksSection.artworks
          : featured,
      },
      exhibitionsSection: { ...fallbackHomePage.exhibitionsSection, ...content.exhibitionsSection },
      advocacySection: { ...fallbackHomePage.advocacySection, ...content.advocacySection },
      shortBioSection: { ...fallbackHomePage.shortBioSection, ...content.shortBioSection },
      contactCtaSection: { ...fallbackHomePage.contactCtaSection, ...content.contactCtaSection },
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local homepage content because the Sanity fetch failed.", error);
    return fallbackHomePage;
  }
});

export const getHomePageContent = getHomePageCached;

const getAboutPageCached = cache(async (): Promise<AboutPageContent> => {
  if (!isSanityConfigured) return fallbackAboutPage;

  try {
    const content = await client.fetch<Partial<AboutPageContent> | null>(aboutPageQuery);
    if (!content) return fallbackAboutPage;

    return {
      hero: { ...fallbackAboutPage.hero, ...content.hero },
      statementSection: { ...fallbackAboutPage.statementSection, ...content.statementSection },
      philosophySection: {
        ...fallbackAboutPage.philosophySection,
        ...content.philosophySection,
        purposeItems: content.philosophySection?.purposeItems?.length
          ? content.philosophySection.purposeItems
          : fallbackAboutPage.philosophySection.purposeItems,
      },
      timelineSection: {
        ...fallbackAboutPage.timelineSection,
        ...content.timelineSection,
        items: content.timelineSection?.items?.length ? content.timelineSection.items : fallbackAboutPage.timelineSection.items,
      },
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local about page content because the Sanity fetch failed.", error);
    return fallbackAboutPage;
  }
});

export const getAboutPageContent = getAboutPageCached;

const getGalleryPageCached = cache(async (): Promise<GalleryPageContent> => {
  if (!isSanityConfigured) return fallbackGalleryPage;

  try {
    const content = await client.fetch<Partial<GalleryPageContent> | null>(simplePageQuery("galleryPage"));
    if (!content) return fallbackGalleryPage;

    return {
      eyebrow: content.eyebrow || fallbackGalleryPage.eyebrow,
      title: content.title || fallbackGalleryPage.title,
      description: content.description || fallbackGalleryPage.description,
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local gallery page content because the Sanity fetch failed.", error);
    return fallbackGalleryPage;
  }
});

export const getGalleryPageContent = getGalleryPageCached;

const getAwardsPageCached = cache(async (): Promise<AwardsPageContent> => {
  if (!isSanityConfigured) return fallbackAwardsPage;

  try {
    const content = await client.fetch<Partial<AwardsPageContent> | null>(simplePageQuery("awardsPage"));
    if (!content) return fallbackAwardsPage;

    return {
      eyebrow: content.eyebrow || fallbackAwardsPage.eyebrow,
      title: content.title || fallbackAwardsPage.title,
      description: content.description || fallbackAwardsPage.description,
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local awards page content because the Sanity fetch failed.", error);
    return fallbackAwardsPage;
  }
});

export const getAwardsPageContent = getAwardsPageCached;

const getAwardsCached = cache(async (): Promise<AwardItem[]> => {
  if (!isSanityConfigured) return fallbackAwards;

  try {
    const content = await client.fetch<AwardItem[]>(awardsQuery);
    return content.length > 0 ? content : fallbackAwards;
  } catch (error) {
    console.warn("Falling back to local awards content because the Sanity fetch failed.", error);
    return fallbackAwards;
  }
});

export const getAwards = getAwardsCached;

const getExhibitionsPageCached = cache(async (): Promise<ExhibitionsPageContent> => {
  if (!isSanityConfigured) return fallbackExhibitionsPage;

  try {
    const content = await client.fetch<Partial<ExhibitionsPageContent> | null>(exhibitionsPageQuery);
    if (!content) return fallbackExhibitionsPage;

    return {
      eyebrow: content.eyebrow || fallbackExhibitionsPage.eyebrow,
      title: content.title || fallbackExhibitionsPage.title,
      description: content.description || fallbackExhibitionsPage.description,
      heroImage: content.heroImage || fallbackExhibitionsPage.heroImage,
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local exhibitions page content because the Sanity fetch failed.", error);
    return fallbackExhibitionsPage;
  }
});

export const getExhibitionsPageContent = getExhibitionsPageCached;

const getExhibitionsCached = cache(async (): Promise<ExhibitionItem[]> => {
  if (!isSanityConfigured) return fallbackExhibitions;

  try {
    const content = await client.fetch<ExhibitionItem[]>(exhibitionsQuery);
    return content.length > 0 ? content : fallbackExhibitions;
  } catch (error) {
    console.warn("Falling back to local exhibitions content because the Sanity fetch failed.", error);
    return fallbackExhibitions;
  }
});

export const getExhibitions = getExhibitionsCached;

const getAdvocacyPageCached = cache(async (): Promise<AdvocacyPageContent> => {
  const allArtworks = await getAllArtworks();
  const relatedFallback = allArtworks
    .filter((artwork) => artwork.collection === "Environmental Series")
    .slice(0, 3);

  const fallbackAdvocacyPage: AdvocacyPageContent = {
    ...fallbackAdvocacyPageBase,
    relatedWorksSection: {
      ...fallbackAdvocacyPageBase.relatedWorksSection,
      artworks: relatedFallback,
    },
  };

  if (!isSanityConfigured) return fallbackAdvocacyPage;

  try {
    const content = await client.fetch<Partial<AdvocacyPageContent> | null>(advocacyPageQuery);
    if (!content) return fallbackAdvocacyPage;

    return {
      hero: { ...fallbackAdvocacyPage.hero, ...content.hero },
      planetSection: { ...fallbackAdvocacyPage.planetSection, ...content.planetSection },
      relatedWorksSection: {
        ...fallbackAdvocacyPage.relatedWorksSection,
        ...content.relatedWorksSection,
        artworks: content.relatedWorksSection?.artworks?.length
          ? content.relatedWorksSection.artworks
          : relatedFallback,
      },
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local advocacy page content because the Sanity fetch failed.", error);
    return fallbackAdvocacyPage;
  }
});

export const getAdvocacyPageContent = getAdvocacyPageCached;

const getContactPageCached = cache(async (): Promise<ContactPageContent> => {
  if (!isSanityConfigured) return fallbackContactPage;

  try {
    const content = await client.fetch<Partial<ContactPageContent> | null>(simplePageQuery("contactPage"));
    if (!content) return fallbackContactPage;

    return {
      eyebrow: content.eyebrow || fallbackContactPage.eyebrow,
      title: content.title || fallbackContactPage.title,
      description: content.description || fallbackContactPage.description,
      seo: mergeSeo(content.seo),
    };
  } catch (error) {
    console.warn("Falling back to local contact page content because the Sanity fetch failed.", error);
    return fallbackContactPage;
  }
});

export const getContactPageContent = getContactPageCached;
