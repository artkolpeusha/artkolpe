import type { QueryParams } from "@sanity/client";

import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}) {
  return client.fetch<T>(query, params);
}

export function SanityLive() {
  return null;
}
