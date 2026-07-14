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
    id: "artwork.pulse-of-compassion",
    title: "Hunger",
    slug: "hunger",
    collection: "Art which received awards",
    imageUrl: "/images/paintings/Hunger.jpeg",
    description: `I am honored that my artwork "Hunger," showcased at the Venice Biennale 2022 and recognized with the Leaders Protagonists Award in Washington DC, speaks to a universal and urgent reality. In this piece, I portray hunger not as a quiet suffering but as a fiery force - an intense, raw energy that burns within. The figure's open mouth, wide with tension and silent fumes, captures the pain and release that hunger demands, while flames of yellow, orange, and red swirl around, embodying the passion and urgency behind this need.

Creating "Hunger" was an exploration of how profound emotion can ignite change. This artwork challenges us to look beyond the surface of suffering and to consider what each of us can do to extinguish that fire - to transform pain into hope and action. Through this visual language, I invite you to confront the flames within our world and find the resilience to heal and uplift. The power of this work rests in its call to awareness and the belief that from intense struggle, new light can emerge.

I created "Hunger" as a bold expression of the intense, often silent agony that hunger invokes - an experience both deeply personal and universally human. This piece was honored with the Leaders Protagonists award in Washington, DC, and exhibited at the 2022 Venice Biennale, affirming its resonance beyond borders. In this work, I chose to convey hunger not with tears or sorrow, but through the fierce, almost fiery energy that rises from within - a raw force captured in the figure's open mouth and taut expression.

The figure's closed or hollow eyes invite the viewer to look beyond outward appearances, to sense the burning ache beneath. Surrounding this central image, dynamic strokes of yellow, orange, and red come alive like flames, symbolizing the fierce pain and relentless fire that hunger ignites inside the body and spirit. This contrast between the dark skin tone and the vivid background sharpens the emotional impact, making the feeling immediate and unmistakable.

Each brushstroke is deliberate, layered to capture movement and the overwhelming surge of emotion, reflecting not only suffering but a powerful, urgent call to awareness. "Hunger" challenges us to perceive this reality beyond statistics or headlines - to feel the urgent need for compassion and action. It asks a simple yet profound question: what are we willing to do to extinguish this flame in our world? Through this painting, I offer a visual meditation on pain, resilience, and the undeniable power of human endurance.`,
  },
  {
    id: "artwork.garden-of-voices",
    title: "Vigilance",
    slug: "vigilance",
    collection: "Art which received awards",
    imageUrl: "/images/paintings/Vigilance.jpeg",
    description: `I created this artwork in response to a deep sense of vigilance and the quiet strength found in nature's watchful moments. Recognized through its inclusion in an esteemed international project exhibited in Venice and honored with the American Art Award, this piece captures the intense gaze of a tiger, inviting viewers to meet the animal's alertness and unwavering presence.

The composition focuses closely on the tiger's eye - a bright, sharp yellow orb set within a tapestry of bold orange and black stripes. Each brushstroke adds texture and life to the fur, conveying not just the physical strength of the tiger, but the essence of careful observation and inner readiness. The eye, bent downward as if the tiger has paused to drink, still remains fully alert, embodying a balance between calm and watchfulness.

This painting speaks to the necessity of being mindful and vigilant in our own lives, reminding us that all creatures offer lessons through their behavior and spirit. It invites quiet reflection on the power of focus and the importance of sustaining presence in a world that often moves too fast. Through this work, I seek to honor the strength that lies in attentiveness and the courage it takes to remain aware and grounded amid uncertainty.`,
  },
  {
    id: "artwork.threshold-of-peace",
    title: "War and Peace",
    slug: "war-and-peace",
    collection: "Art which received awards",
    imageUrl: "/images/paintings/War and Peace.jpeg",
    description: `I created "Split Horizon of the Silent Earth", which won an award at the "War and Peace" contest for Youth Human Rights International, Washington DC. This piece confronts the stark realities that shape our world - a face divided between the quiet beauty of peace and the harsh urgency of conflict. One half reveals skies unhindered, hills clothed in green, and the gentle flight of a white dove, symbols of hope and renewal. The other half reflects the deep scars of war - smoke, machines of destruction, and drops of blood marking pain that cannot be unseen.

This work is a reminder that within one face, one earth, coexist both harmony and chaos. It calls us to witness how every choice echoes through the land we share. When we protect peace, the earth answers with vibrant life and radiant calm. When we allow destruction, she weeps in silence, longing for healing.

Through this painting, I invite reflection and action - a quiet plea to honor the fragile balance where our future is written. It is not only a portrait of division but a call to embrace the power within us to shift the horizon toward a lasting, silent beauty.

Created for the "War or Peace" contest organized by Youth Human Rights International, this piece aims to amplify the silent cries of a mother Earth wounded by conflict and yet yearning for restoration. It reflects a deeply felt responsibility to honor the vulnerability of our planet and the urgent need to embrace compassion and healing. Through deliberate detail and contrasting forms, the work stands as a visual prayer for a future where harmony prevails, and the cycle of destruction is broken.`,
  },
  {
    id: "artwork.river-within",
    title: "Mystic Ocean Depth",
    slug: "mystic-ocean-depth",
    collection: "Art which received awards",
    imageUrl: "/images/paintings/Mystic Ocean Depth.jpg",
    description: `I am deeply honored that "Mystic Ocean Depth" received the prestigious International Pegasus Award in Venice, Italy, a recognition that celebrates its message of looking beyond appearances.

This artwork invites you to explore the calm ocean surface and discover the vibrant, intricate world beneath. Through vibrant blues accented with white, pink, and purple, the painting captures the delicate, precise brushstrokes that represent corals and the hidden life flourishing underwater. It's a reminder that beneath calm exteriors lie depths full of wonder and complexity.

"Mystic Ocean Depth" carries a powerful message: don't judge people by what you see on the surface. Look deeper, and you'll find extraordinary beauty and strength, both in our oceans and in the human spirit.

I approached this piece as an invitation to look beyond the surface, to explore the unseen depths where life quietly thrives. The layers of vibrant blue serve as a foundation for a world that feels both vast and intimate, where each brushstroke functions as a gesture toward the delicate structures beneath - the corals, the currents, the hidden energies. The interplay of white accents against the blues reflects moments of light breaking through, suggesting fleeting glimpses of clarity and insight within a mysterious environment.

Every element in the composition holds its own character: the swirling forms, the nuanced color shifts, the textured brushwork all work together without losing their distinct presence. This tension between individuality and harmony mirrors the ocean itself - a place of constant movement and transformation, full of nuance and life concealed beneath calmness. Through this work, I wanted to remind us that what lies beneath the surface often holds unexpected beauty and strength, whether in nature or in people.

Receiving the International Pegasus Award affirmed the ability of this painting to communicate that message - a quiet call to look deeper, to search beyond first impressions, and to recognize the richness waiting to be discovered when we do. This is a visual meditation on depth, resilience, and the powerful stories that unfold when we choose to see with more than just our eyes.`,
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

console.log("Finished updating the award category items.");
