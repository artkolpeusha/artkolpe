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
    id: "artwork.tide-of-renewal",
    title: "Harmonious Blend",
    slug: "harmonious-blend",
    collection: "Floral Art",
    imageUrl: "/images/paintings/Harmonious Blend.jpeg",
    description: `In my ongoing journey to explore the quiet lessons nature offers, I created "Harmonious Blend" as a reflection on the peaceful balance found all around us. Here, clusters of softly hued flowers unfold in gentle white petals edged with a subtle red line, each blossom carrying the delicate strength of yellow stamens reaching outward. The vibrant background of yellow and green invites a sense of warmth and renewal, grounding the blooms as they rise with quiet elegance.

This piece grew from a simple truth I've come to cherish: harmony is not just a feeling but a way of seeing the world. Nature teaches us to find balance in diversity, to coexist with grace, and to embrace peace through unity. White, to me, symbolizes that stillness - calm and clarity amid vibrant life.

Through this work, I hope to offer a moment of reflection that encourages us to recognize the subtle harmonies woven into everyday life. When we truly look, we discover a steady rhythm of peace that invites us to live with more care, respect, and openness. It is in this shared awareness that we find the strength to create and sustain harmony both within ourselves and in the world around us.

I have long been drawn to the quiet lessons that nature offers in balance and unity, and this work continues that exploration by embracing the harmony found in the simplest forms of life. In this composition, a cluster of delicate flowers emerges with soft, inviting petals that blend white with subtle hints of purple, blue, and pink. Each petal is carefully outlined with a fine red edge, creating a vivid contrast that enhances their gentle curves. The yellow stamens stretch gracefully from the centers, adding a sense of warmth and vitality that breathes life into the scene.

The flowers rest upon slender green stems and leaves that are set against a background bathed in a luminous merge of yellow and green tones. This relationship between the background and the flora creates a seamless balance, a visual dialogue that speaks of natural order and peaceful coexistence. The composition invites reflection on the quiet power found in harmony, encouraging a mindful awareness of the interconnections that sustain growth and beauty.

This piece is grounded in the recognition that harmony is not an abstract ideal but a living presence observable in the natural world around us. The white of the petals signifies peace, while the gradual infusion of surrounding colors suggests the subtle interplay of energies that shape our environment. Through this work, I hope to inspire a deeper appreciation for the gentle rhythms of nature and to remind viewers of the peace accessible when we open ourselves to its teachings. In doing so, it affirms that harmony, like the petals softly merging in light and color, can be both vibrant and serene - a celebration of life's quiet resilience and the ongoing invitation to live with balance and grace.`,
  },
  {
    id: "artwork.hands-of-mercy",
    title: "Harvest of Light in Earth's Embrace",
    slug: "harvest-of-light-in-earths-embrace",
    collection: "Floral Art",
    imageUrl: "/images/paintings/Harvest of Light in earth’s embrace.jpeg",
    description: `I am honored to share "Harvest of Light in Earth's Embrace," a piece that continues my journey of exploring how light and knowledge transform the world around us. This vibrant painting features bold red-orange poppies and delicate white blossoms arranged in a humble, rustic vase. Against a dark background, the flowers and leaves seem to emerge with remarkable clarity and strength, capturing the powerful contrast between light and shadow.

In this work, I wanted to express the potency of light - not only as a physical force but as a symbol of understanding and awareness. Just as light reveals what darkness conceals, knowledge has the power to dispel ignorance and bring life to any space it touches. The shining rope in the composition is more than a detail; it represents the guiding thread of insight that connects us all.

This painting invites you to seek that light within and around you, to recognize the life and hope that arise when we choose to move away from darkness. It is a reminder that even in the simplest forms - flowers, light, earth - there is an enduring message of growth, clarity, and renewal that we can carry forward.

I have long sought to explore the transformative power of light and knowledge through my work, and this piece continues that journey. "Harvest of Light in Earth's Embrace" is part of an ongoing exploration where the natural world becomes a vessel for deeper reflection.

At its core, the artwork is a celebration of contrast - the vivid red-orange poppies, robust and confident, rise boldly from a rustic brown vase, their intricate dark centers anchoring their vitality. Surrounding them, delicate white flowers with bright yellow hearts bring a gentle balance, while rich green leaves weave through the composition, adding layers of depth and harmony. The flowers seem almost to pulse with life against the dark background, which serves not only to highlight their color but also to symbolize the ever-present backdrop of ignorance that light can dispel.

The work invites viewers to witness how light, here visually represented in the subtle gleam on a rope intertwined with the arrangement, becomes a metaphor for knowledge's power to erase darkness. This is not merely a still life but a narrative of hope and growth, encouraging us to seek understanding that can cut through confusion and bring clarity. The textural richness and balanced contrasts reflect the process of moving from shadow into brightness, a theme that resonates with the human spirit's continuous aspiration toward greater awareness.

"Harvest of Light in Earth's Embrace" holds space for contemplation, reminding us that even amid the weight of the earth and the shadows it casts, life reaches skyward with conviction. The painting's elements are thoughtfully united, forming a visual harmony that speaks to resilience and the quiet power found within nature and ourselves. It is a piece that inspires mindfulness, urging us to nurture the light within and around us, acknowledging the profound difference knowledge can make in dispelling darkness and fostering growth.`,
  },
];

for (const update of updates) {
  await client
    .patch(update.id)
    .set({
      title: update.title,
      slug: {
        _type: "slug",
        current: update.slug,
      },
      collection: update.collection,
      description: update.description,
      imageUrl: update.imageUrl,
    })
    .commit();

  console.log(`Updated ${update.id}`);
}

console.log("Finished updating the floral category items.");
