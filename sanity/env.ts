export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-15";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const hasSanityEnv = Boolean(projectId && dataset);

export const missingSanityEnv = [
  !projectId ? "NEXT_PUBLIC_SANITY_PROJECT_ID" : null,
  !dataset ? "NEXT_PUBLIC_SANITY_DATASET" : null,
].filter(Boolean) as string[];
