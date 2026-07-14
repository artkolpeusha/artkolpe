import { createClient } from "@sanity/client";

import { apiVersion, dataset, hasSanityEnv, projectId } from "../env";

export const isSanityConfigured = hasSanityEnv;

export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  apiVersion,
  useCdn: true,
  perspective: "published",
});
