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

const artwork = {
  id: "artwork.peace-please",
  title: "Peace Please",
  slug: "peace-please",
  year: "2022",
  medium: "Acrylic and ink",
  dimensions: "28 x 40 in",
  collection: "Art which received awards",
  availability: "Available",
  imageUrl: "/images/paintings/Peace Please.jpeg",
  description: `I created "Peace Please" as a profound plea in a time when the world feels fractured and fragile. The Statue of Liberty, a symbol of hope and freedom, here turns inward, covering her face in silent sorrow, unable to witness the destruction around her. Her arms bear the words "PEACE PLEASE" and "NO WAR PLEASE," a straightforward call that must be heard beyond borders and differences.

This painting was first shown in Times Square and later in Zurich, spaces where many voices gather, yet where such a message can sometimes feel unheard. Through this work, I invite us to pause, reflect, and acknowledge the weight of our collective unrest. The city skyline behind her reminds us of the heartbeats of countless lives waiting for peace amid turmoil.

"Peace Please" is not just an image; it is a moment of shared humanity, a quiet but urgent appeal to nurture understanding and healing. In creating it, I was reminded that true strength often lives in vulnerability, and that hope persists even in the face of despair. May this work inspire each of us to carry the call for peace into our own worlds.

I created this artwork in response to a world deeply shaken by conflict, as a heartfelt call for healing and peace that transcends borders. Recognized through its presentation in iconic locations such as Times Square and Zurich, this piece speaks to the universality of our shared desire to end suffering and embrace harmony. At its center stands the Statue of Liberty, a timeless emblem of freedom, portrayed not in triumph, but in quiet distress, her face veiled by her hands. This gesture reveals a profound anguish, an unwillingness to confront the devastation unfolding beyond her gaze.

The statue's familiar green tones and the radiant golden spikes of her crown remain vivid, contrasting the soft hues of the city skyline and pale sky that frame her figure. Inscribed upon her arms, the phrases "PEACE PLEASE" and "NO WAR PLEASE" serve as direct, unyielding appeals that break through the silence. Each element within the composition exists with clarity and purpose, inviting contemplation on the fragile state of peace and the heavy burden of violence that continues to weigh on humanity.

This work is a space for reflection and a reminder of the resilience found in hope, even amid sorrow. It honors the enduring spirit that calls for compassion and collective responsibility, urging viewers to listen attentively to the quiet yet powerful plea for a more peaceful future. Through this image, the complexities of grief and longing are laid bare, opening a path toward empathy and renewed commitment to healing our shared world.`,
};

const existingId =
  (await client.fetch(
    `*[_type == "artwork" && (slug.current == $slug || title == $title)][0]._id`,
    {
      slug: artwork.slug,
      title: artwork.title,
    }
  )) || artwork.id;

await client.createIfNotExists({
  _id: existingId,
  _type: "artwork",
});

await client
  .patch(existingId)
  .set({
    title: artwork.title,
    slug: {
      _type: "slug",
      current: artwork.slug,
    },
    year: artwork.year,
    medium: artwork.medium,
    dimensions: artwork.dimensions,
    collection: artwork.collection,
    availability: artwork.availability,
    description: artwork.description,
    imageUrl: artwork.imageUrl,
  })
  .commit();

console.log(`Updated ${existingId}`);
