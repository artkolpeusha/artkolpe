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

const artworks = [
  {
    fallbackId: "artwork.silent-prayer-beneath-moonlit-veil",
    title: "Silent Prayer Beneath Moonlit Veil",
    slug: "silent-prayer-beneath-moonlit-veil",
    year: "",
    medium: "",
    dimensions: "",
    collection: "Meaningful Art",
    availability: "Available",
    imageUrl: "/images/paintings/Praying tree.jpeg",
    description: `I'm excited to present my latest painting, "Silent Prayer Beneath Moonlit Veil." This piece captures a dense, shadowy forest under a serene night sky, where a falling tree's branch and its neighboring tree reach out, trying to hold on to the light as they pray together. Their solidarity reflects the power of prayer, hope, and faith in a higher power. The soft, pale moonlight weaves through the bare branches, casting a gentle glow on the vibrant pink and red flowers quietly thriving on the forest floor. This artwork is a tribute to the strength found in unity and perseverance - the quiet moments when we hold on, believe, and silently pray, even when light feels distant. May it inspire you to find resilience in stillness and to remember that hope can blossom, even beneath the darkest veils.

Through this composition, I honor the persistent power of prayer and the essential message never to lose hope, even when the world around us feels dark or fragile. It is also a reminder to approach nature with mindfulness and respect, recognizing that every living thing carries its own quiet story of perseverance. By choosing materials thoughtfully and inviting close observation, this piece encourages a deeper awareness of the subtle bonds that sustain life and the courage that emerges from them.

I often find that the quietest moments in nature hold the deepest stories. This artwork, recognized for its emotional depth and invited to be part of thoughtful international exhibitions, reflects a scene where strength and hope intertwine beneath a moonlit sky. I wanted to capture a moment of silent prayer, where a tree, its trunk angled and weary, reached out as if holding on not only to its own branch but to the adjacent tree beside it. Together, they seem to plead with the fading light above, embodying resilience and an unwavering faith in the power of hope.

The dense forest, with its tall, shadowed trees, creates a setting that feels both intimate and expansive. Moonlight filters softly through the bare branches, casting a gentle glow that illuminates the vibrant greenery and bright, scattered flowers on the forest floor. Each element is distinct yet connected - the bare branches, the slanted trunk, the luminous moon, and the colorful blossoms - all forming a quiet narrative about survival, prayer, and endurance. The work invites viewers to reflect on the strength found in connection, not only between trees but also within ourselves as we face uncertainty.`,
  },
  {
    fallbackId: "artwork.guardian-spirit-of-the-living-forest",
    title: "Guardian Spirit of the Living Forest",
    slug: "guardian-spirit-of-the-living-forest",
    year: "",
    medium: "",
    dimensions: "",
    collection: "Meaningful Art",
    availability: "Available",
    imageUrl: "/images/paintings/Guardian spirit of the living Forest.jpeg",
    description: `I am deeply moved to share my newest painting, "Guardian Spirit of the Living Forest." This work embodies the quiet yet powerful presence that dwells within the heart of the forest - the spirit that sees all: the water, the leaves, the free movement of life. Through bold, soulful brushstrokes in blues and purples, I have sought to capture not only a figure but an essence that watches over the natural world with steady, unwavering care. The shifting colors and energetic lines invite us to feel the forest's pulse and recognize the sacred responsibility we carry to protect it. May this spirit serve as a reminder that the forest is alive, watching, and calls on us to honor and preserve its fragile beauty before it is lost.

I created this piece to honor the presence and protection offered by the unseen guardians of the natural world. The artwork, recognized for its compelling energy and invited to resonate with audiences who value environmental awareness, presents a figure that embodies the spirit of the living forest. Rendered in deep blues and purples, the profile carries a quiet strength outlined by bold dark strokes, standing vividly against a background alive with color and motion.

Each brushstroke around the figure suggests an aura of vigilance and connection - lighter blues, whites, and touches of yellow radiate outward, evoking an energy that both watches and encourages care. The background shifts from a warm greenish-yellow into swirling blues and whites, reflecting the ever-changing balance of life in the forest. Thick, textured layers invite close observation, revealing the depth and intensity of this guardian's presence, a reminder that every element of the forest is intertwined and alive.

This work encourages reflection on the delicate relationship between humans and nature. It calls for respect and mindfulness, reminding us that the spirit of the forest observes our actions. The forest's resilience depends not only on its growth but also on our willingness to protect and preserve its sacred harmony. Through this portrayal, viewers are invited to find hope and strength in coexistence, embracing a responsibility that extends beyond ourselves.`,
  },
  {
    fallbackId: "artwork.right-eye-or-left-eye",
    title: "Right Eye or Left Eye",
    slug: "right-eye-or-left-eye",
    year: "",
    medium: "",
    dimensions: "",
    collection: "Meaningful Art",
    availability: "Available",
    imageUrl: "/images/paintings/Right Eye or Left Eye.jpeg",
    description: `I'm honored to present my new painting, "Right Eye or Left Eye," recently exhibited at the Biennale San Ramon in Italy. This work captures more than just a gaze - it invites you to explore how our vision shapes the world around us. The eye, detailed with a crescent-shaped eyelid and a piercing stare, rests against a textured canvas of blues and whites, where bold strokes suggest shadows or hair, balancing stillness with movement. I believe this piece reflects the idea that life, much like this eye, can be seen in many ways - what you perceive influences what becomes real. When we choose to meet challenges with calm insight, problems often become smaller, and our understanding grows deeper. I hope this painting encourages you to trust your own sight and embrace the strength that comes from truly seeing beyond the surface.

I presented this artwork at the Biennale Sanramon in Italy, a setting that deepened my exploration of vision - not just as a physical act, but as a profound lens through which we engage with life. This piece invites you to pause and consider how perception shapes reality. At its center is a close-up view of a human eye, framed by a crescent-shaped eyelid and rendered with intense detail. The eye's gaze carries quiet strength and thoughtfulness, drawing you into a space of introspection.

Around the eye, layers of blue and white brushstrokes form abstract shapes that suggest hair, shadows, or fleeting emotions. These textured forms contrast with the smooth skin adjacent to the eye, creating a dialogue between calm and movement, clarity and mystery. The shades of blue, ranging from soft to deep, enhance this tension and guide attention toward the eye's center, where light subtly dances on the iris and pupil.

Through this work, I encourage you to pause and appreciate the beauty of perspective. "Right Eye or Left Eye" is not about a definitive answer but about the journey of perception itself. It asks us to recognize that our individual viewpoints are valid, yet they are part of a larger, interconnected tapestry of human experience. When we embrace this understanding, we open ourselves to deeper empathy, collaboration, and a more harmonious existence. May this painting serve as a reminder that the way we choose to look at the world can truly transform our reality.`,
  },
  {
    fallbackId: "artwork.crimson-cry-of-the-fish",
    title: "Crimson Cry of the Fish",
    slug: "crimson-cry-of-the-fish",
    year: "",
    medium: "",
    dimensions: "",
    collection: "Meaningful Art",
    availability: "Available",
    imageUrl: "/images/paintings/Crimson Cry of the Fish.jpeg",
    description: `I created my painting, "Crimson Cry of the Fish," as a vivid plea from the heart of the natural world - a cry from a fish whose blue home is turning red with contamination. The bold yellows and reds express both energy and urgency, while the textured forms invite you to feel the life and movement within.

This painting is a reminder that our choices ripple far beyond us, shaping the world that countless creatures depend on. It calls us to listen deeply and act with care, embracing a shared responsibility to protect and restore the delicate balance of our waters. May this cry inspire us all to see the colors of our environment clearly and to honor the life they sustain.

I created this painting to bring attention to the urgent message of our natural world, recently presented at the Dubai exhibition where environmental reflection remains at the forefront. The work centers on a vivid fish rendered in striking yellow tones, its form alive with textured patterns that suggest both vitality and fragility. Flames of red and orange ripple outward from the fish's body, blending seamlessly into the background to evoke a powerful sense of transformation and distress.

This composition is a visual cry from the underwater world, a call to recognize how human impact has altered what was once a tranquil blue environment into a hostile, contaminated space. The fish becomes a symbol of life caught between struggle and survival, its fiery extensions expressing both pain and urgency. The interplay of bold, contrasting colors creates a dynamic energy that invites viewers to consider their role in preserving the delicate balance of aquatic ecosystems.

By choosing materials and techniques that emphasize depth and movement, the painting offers more than a moment captured in time - it becomes a meditation on responsibility and hope. It encourages mindful awareness about the effects of pollution, particularly plastic waste, on marine life, urging a conscious shift toward stewardship and care. This piece is not only an artistic statement but a call to empathy, inspiring a renewed commitment to protect the water that sustains us all.`,
  },
  {
    fallbackId: "artwork.duality",
    title: "Duality",
    slug: "duality",
    year: "",
    medium: "",
    dimensions: "",
    collection: "Meaningful Art",
    availability: "Available",
    imageUrl: "/images/paintings/Duality.jpeg",
    description: `I am grateful to have shared my work, "Duality," recently shown in Budapest, where it engaged viewers in a powerful dialogue about the contrasts that shape our lives. This monochromatic face, divided between light and shadow, white and black, reflects the everyday balance of opposing forces - day and night, good and bad - that together create a sense of completeness. Each half stands on its own with distinct presence, yet where they meet, the blending lips remind us that true wholeness arises not from separation but from unity. In this work, I explore the quiet harmony found within duality, inviting us to recognize that it is precisely these contrasts that make life full and meaningful. May this painting inspire you to embrace both the light and darkness around and within us, finding peace in the balance that sustains all things.

This piece captures the essence of duality - not merely as a contradiction but as the harmonious coexistence of day and night, good and bad, light and darkness - that completes and enriches the whole. It encourages a mindful appreciation of the complexities that shape our experience, suggesting that wholeness arises from embracing these contrasts rather than resisting them. More than a visual statement, the painting acts as a quiet meditation on balance, reminding us that the richness of life depends on the interplay of opposites that together create fulfillment.

I presented this striking monochromatic painting during an exhibition in Budapest, where it resonated deeply with viewers through its exploration of balance and contrast. The work centers on a stylized human face divided into two distinct halves, inviting reflection on the interconnectedness of opposing forces within life. One side, rendered in pure white with smooth, minimalistic features, conveys calm and clarity, while the other side, painted in rich black with detailed eyes and highlighted eyebrows, evokes mystery and depth. The two halves meet at the lips, blending gently in a subtle gradient that symbolizes unity and completion. Set against a solid black background, the composition amplifies the dramatic interplay of light and shadow.`,
  },
];

for (const artwork of artworks) {
  const existingId =
    (await client.fetch(
      `*[_type == "artwork" && (slug.current == $slug || title == $title)][0]._id`,
      {
        slug: artwork.slug,
        title: artwork.title,
      }
    )) || artwork.fallbackId;

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
}

console.log("Finished updating the Meaningful Art category items.");
