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

const query = `{
  "siteSettings": count(*[_type == "siteSettings"]),
  "homepage": count(*[_type == "homepage"]),
  "aboutPage": count(*[_type == "aboutPage"]),
  "galleryPage": count(*[_type == "galleryPage"]),
  "awardsPage": count(*[_type == "awardsPage"]),
  "exhibitionsPage": count(*[_type == "exhibitionsPage"]),
  "advocacyPage": count(*[_type == "advocacyPage"]),
  "contactPage": count(*[_type == "contactPage"]),
  "galleryCategory": count(*[_type == "galleryCategory"]),
  "artwork": count(*[_type == "artwork"]),
  "award": count(*[_type == "award"]),
  "exhibition": count(*[_type == "exhibition"])
}`;

const result = await client.fetch(query);
console.log(JSON.stringify(result, null, 2));
