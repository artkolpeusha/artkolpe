import { createClient } from "@sanity/client";

import { apiVersion, dataset, hasSanityEnv, projectId } from "../env";

const token = process.env.SANITY_API_TOKEN;

export const isSanityConfigured = hasSanityEnv;

export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  apiVersion,
  token: token || undefined,
  // The site is rebuilt on publish, so freshness matters more than CDN caching here.
  useCdn: false,
  perspective: "published",
});
