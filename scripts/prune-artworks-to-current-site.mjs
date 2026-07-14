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
const currentArtworks = JSON.parse(await readFile(artworksFileUrl, "utf8"));
const currentSlugs = new Set(currentArtworks.map((artwork) => artwork.slug));

const docs = await client.fetch(`*[_type == "artwork" && defined(slug.current)]{
  _id,
  title,
  "slug": slug.current
}`);

const obsoleteDocs = docs.filter((doc) => !currentSlugs.has(doc.slug));

for (const doc of obsoleteDocs) {
  await client.delete(doc._id);
  console.log(`Deleted obsolete artwork: ${doc._id} (${doc.title})`);
}

console.log(`Removed ${obsoleteDocs.length} obsolete artwork documents.`);
