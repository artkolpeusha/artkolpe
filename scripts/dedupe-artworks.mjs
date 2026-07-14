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

const docs = await client.fetch(`*[_type == "artwork" && defined(slug.current)]{
  _id,
  "slug": slug.current,
  title
}`);

const duplicatesToDelete = [];

for (const doc of docs) {
  const canonicalId = `artwork.${doc.slug}`;

  if (doc._id !== canonicalId && docs.some((item) => item._id === canonicalId)) {
    duplicatesToDelete.push(doc);
  }
}

for (const doc of duplicatesToDelete) {
  await client.delete(doc._id);
  console.log(`Deleted duplicate artwork doc: ${doc._id} (${doc.title})`);
}

console.log(`Removed ${duplicatesToDelete.length} duplicate artwork documents.`);
