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

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const docs = await client.fetch(`*[_type == "artwork"] | order(_id asc){
  _id,
  title,
  "slug": slug.current,
  collection,
  "categoryTitle": category->title
}`);

console.log(JSON.stringify(docs, null, 2));
