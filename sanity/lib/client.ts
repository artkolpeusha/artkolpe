import { createClient } from "@sanity/client";

import { apiVersion, dataset, hasSanityEnv, projectId } from "../env";

export const isSanityConfigured = hasSanityEnv;

export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  apiVersion,
  // The site is rebuilt on publish, so freshness matters more than CDN caching here.
  useCdn: false,
  perspective: "published",
});
