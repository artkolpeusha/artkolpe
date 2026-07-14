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

const description = `I created "Invocation of Ganesha in the Sacred Lines of Om" to honor the powerful beginning embedded in the first sound of the universe. In this piece, I embrace Ganesha not only as a symbol of wisdom and removal of obstacles but also as an expression of the sacred vibration that shapes all creation.

I created "Invocation of Ganesha in the Sacred Lines of Om" to honor the powerful beginning embedded in the first sound of the universe. In this piece, I embrace Ganesha not only as a symbol of wisdom and removal of obstacles but also as an expression of the sacred vibration that shapes all creation. The bold curves and distinct almond-shaped eye serve as a focused invitation to find clarity amidst complexity, while the vibrant colors pulse with energy and transformation. Surrounding the figure, the textured background breathes life into the composition, reminding us that growth and movement are constant companions on every path we walk.

This artwork is a meditation on mindful beginnings and the strength that comes from aligning ourselves with something greater. By blending the primordial sound "Om" and Ganesha's presence into a single painting, I hope to inspire reflection on the power of prayer, intention, and devoted attention as we move forward through life's challenges. It is my hope that this piece encourages you to pause, attune, and embrace your own journey with renewed openness and purpose.`;

await client
  .patch("artwork.blue-universe")
  .set({
    title: "Invocation of Ganesha in the Sacred Lines of Om",
    slug: {
      _type: "slug",
      current: "invocation-of-ganesha-in-the-sacred-lines-of-om",
    },
    collection: "Art uplifting Indian heritage",
    description,
    imageUrl: "/images/paintings/Invocation of Ganesha in the Sacred Lines of Om.jpeg",
  })
  .commit();

console.log("Updated artwork.blue-universe");
