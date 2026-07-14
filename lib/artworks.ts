import { cache } from "react";

import artworks from "@/data/artworks.json";
import { client, isSanityConfigured } from "@/sanity/lib/client";

export type Artwork = {
  id: string;
  title: string;
  slug: string;
  year: string;
  medium: string;
  dimensions: string;
  collection: string;
  description: string;
  availability: "Available" | "Sold" | "Private Collection";
  image: string;
};

const fallbackArtworks = artworks as Artwork[];

const artworkQuery = `*[_type == "artwork" && defined(slug.current)] | order(sortOrder asc, year desc, _createdAt desc) {
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

function normalizeArtwork(artwork: Partial<Artwork>): Artwork | null {
  if (!artwork.slug || !artwork.title || !artwork.image) {
    return null;
  }

  return {
    id: artwork.id || artwork.slug,
    title: artwork.title,
    slug: artwork.slug,
    year: artwork.year || "",
    medium: artwork.medium || "",
    dimensions: artwork.dimensions || "",
    collection: artwork.collection || "Uncategorized",
    description: artwork.description || "",
    availability:
      artwork.availability === "Sold" || artwork.availability === "Private Collection"
        ? artwork.availability
        : "Available",
    image: artwork.image,
  };
}

const fetchArtworks = cache(async (): Promise<Artwork[]> => {
  if (!isSanityConfigured) {
    return fallbackArtworks;
  }

  try {
    const sanityArtworks = await client.fetch<Partial<Artwork>[]>(artworkQuery);
    const normalized = sanityArtworks
      .map(normalizeArtwork)
      .filter((artwork): artwork is Artwork => artwork !== null);

    return normalized.length > 0 ? normalized : fallbackArtworks;
  } catch (error) {
    console.warn("Falling back to local artwork data because the Sanity fetch failed.", error);
    return fallbackArtworks;
  }
});

export const getAllArtworks = fetchArtworks;

export async function getArtwork(slug: string) {
  const allArtworks = await fetchArtworks();
  return allArtworks.find((artwork) => artwork.slug === slug);
}

export async function getAdjacentArtworks(slug: string) {
  const allArtworks = await fetchArtworks();
  const index = allArtworks.findIndex((artwork) => artwork.slug === slug);

  if (index < 0) {
    return { previous: null, next: null };
  }

  return {
    previous: allArtworks[(index - 1 + allArtworks.length) % allArtworks.length],
    next: allArtworks[(index + 1) % allArtworks.length],
  };
}
