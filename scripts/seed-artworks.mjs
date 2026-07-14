import { readFile } from "node:fs/promises";
import process from "node:process";

import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-15";
const token = process.env.SANITY_API_TOKEN;

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

const fileUrl = new URL("../data/artworks.json", import.meta.url);
const raw = await readFile(fileUrl, "utf8");
const artworks = JSON.parse(raw);

const docs = artworks.map((artwork) => ({
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
  description: artwork.description,
  availability: artwork.availability,
  imageUrl: artwork.image,
}));

for (const doc of docs) {
  await client.createOrReplace(doc);
  console.log(`Seeded ${doc.title}`);
}

console.log(`Finished seeding ${docs.length} artwork documents.`);
