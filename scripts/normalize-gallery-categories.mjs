import process from "node:process";

import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-15",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const updates = [
  {
    id: "artwork.seeds-of-tomorrow",
    collection: "Meaningful Art",
  },
  {
    id: "artwork.shared-horizon",
    collection: "Unique Art",
  },
  {
    id: "artwork.the-listening-earth",
    collection: "Meaningful Art",
  },
  {
    id: "artwork.inner-radiance",
    collection: "Emotional Art",
  },
];

for (const update of updates) {
  await client
    .patch(update.id)
    .set({
      collection: update.collection,
    })
    .commit();

  console.log(`Updated ${update.id} -> ${update.collection}`);
}

console.log("Finished normalizing gallery categories.");
