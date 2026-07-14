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
    id: "artwork.blue-universe",
    title: "Invocation of Ganesha in the Sacred Lines of Om",
    slug: "invocation-of-ganesha-in-the-sacred-lines-of-om",
    collection: "Art uplifting Indian heritage",
    imageUrl: "/images/paintings/Invocation of Ganesha in the Sacred Lines of Om.jpeg",
    description: `I created "Invocation of Ganesha in the Sacred Lines of Om" to honor the powerful beginning embedded in the first sound of the universe. In this piece, I embrace Ganesha not only as a symbol of wisdom and removal of obstacles but also as an expression of the sacred vibration that shapes all creation.

I created "Invocation of Ganesha in the Sacred Lines of Om" to honor the powerful beginning embedded in the first sound of the universe. In this piece, I embrace Ganesha not only as a symbol of wisdom and removal of obstacles but also as an expression of the sacred vibration that shapes all creation. The bold curves and distinct almond-shaped eye serve as a focused invitation to find clarity amidst complexity, while the vibrant colors pulse with energy and transformation. Surrounding the figure, the textured background breathes life into the composition, reminding us that growth and movement are constant companions on every path we walk.

This artwork is a meditation on mindful beginnings and the strength that comes from aligning ourselves with something greater. By blending the primordial sound "Om" and Ganesha's presence into a single painting, I hope to inspire reflection on the power of prayer, intention, and devoted attention as we move forward through life's challenges. It is my hope that this piece encourages you to pause, attune, and embrace your own journey with renewed openness and purpose.`,
  },
  {
    id: "artwork.healing-light",
    title: "Radiance of the Cosmic Mother",
    slug: "radiance-of-the-cosmic-mother",
    collection: "Art uplifting Indian heritage",
    imageUrl: "/images/paintings/Radiance of the Cosmic Mother.jpeg",
    description: `I created "Radiance of the Cosmic Mother" as an offering to Ma Durga, the universal mother who embodies strength and infinite energy. In this piece, I focus on her serene face crowned with intricate golden headgear, each detail carefully crafted to honor her sacred presence. The warmth of the reds and golds reflects not only her regal aura but the deep power she carries as the source of life itself. Through this work, I invite you to connect with the eternal energy that sustains us, to recognize the divine strength within and around us. It is a reminder that in the quiet reverence for the mother universe - Mathru Devo Bhava - lies a source of courage and renewal we can draw from every day.

I created this piece as a tribute to the enduring strength and nurturing power embodied by the Cosmic Mother, Ma Durga. Through deliberate use of warm golden and reddish hues, I aimed to evoke a sense of radiant energy that both comforts and commands respect. The face of the deity holds a calm and steady gaze, inviting quiet contemplation while expressing an inner strength that transcends the material world.

Every element in the composition is carefully crafted to highlight its individual significance - the intricate patterns of the golden headgear, the circular motifs, and the delicate leaf-like extensions each contribute layers of meaning. Together, they create a harmonious design that honors the sacredness of the divine feminine. The application of kohl around the eyes and the small, thoughtful details such as the red bindi and nose ring serve to deepen the spiritual presence of the figure without overwhelming the viewer. This work is born from a cultural reverence encapsulated in the phrase "Matru Devo Bhava" - recognizing the mother as a source of eternal energy and resilience. It is an expression of gratitude and respect for the universal mother who sustains life and inspires strength. Through this image, I invite a moment of reflection on the profound connection between creativity, devotion, and the quiet power that resides in prayerful awareness.`,
  },
  {
    id: "artwork.earth-remembers",
    title: "Symmetry Within the Silent Cosmos",
    slug: "symmetry-within-the-silent-cosmos",
    collection: "Art uplifting Indian heritage",
    imageUrl: "/images/paintings/Symmetry Within the Silent Cosmos.jpeg",
    description: `I invite you to enter the world of "Symmetry Within the Silent Cosmos", where stillness carries profound meaning. In this piece, I have drawn Lord Krishna not in color but in stark black and white to emphasize the powerful illusion of Maya that shapes our experience. The finely detailed symmetry of the figure's face and the intricate patterns surrounding him are meant to reflect both balance and the deeper truths beneath surface appearances. The small yellow dot on the forehead draws attention to the singular light of awareness amid complexity.

Creating this artwork was a reminder to myself - and to all who observe it - not to be swept away by worldliness but to remain grounded in truth. The silence within the cosmos holds a sacred order, and I hope this drawing encourages a quiet reflection on what truly endures beyond illusion. It is an invitation to find strength in stillness and clarity within complexity.

I created this piece to explore the profound interplay between illusion and truth, embodied in the figure of Lord Krishna, the origin of Maya. Rendered in black and white, the design strips away distractions to reveal the power that lies beneath surface appearances. The symmetrical face, meticulously detailed, anchors the composition with quiet intensity, inviting the viewer to contemplate the space where perception and reality converge.

Every element in the work carries distinct significance - the sharp lines of the crown-like headgear, the precise placement of the yellow dot on the forehead, and the layered patterns of jewelry and garments all serve to heighten the figure's sacred presence. Surrounding these are repeating geometric and natural motifs, carefully balanced to create a sense of harmony that both frames and elevates the central figure. This arrangement reflects the order that underpins the cosmos, even within apparent stillness.

Through this work, I encourage a mindful pause: to recognize the allure of worldliness but remain grounded in what is true. It is a visual meditation on the strength found in truthfulness, an invitation to resist distraction and devotion to fleeting illusions. The deliberate monochrome palette amplifies this message, offering clarity and focus in a complex, often overwhelming world.`,
  },
  {
    id: "artwork.many-faces-one-sky",
    title: "Ebon Serenity with Crown of Curves",
    slug: "ebon-serenity-with-crown-of-curves",
    collection: "Art uplifting Indian heritage",
    imageUrl: "/images/paintings/Ebon Serenity with Crown of Curves,.jpeg",
    description: `I bring you "Ebon Serenity with Crown of Curves", a sculpture born from my deep belief that life itself is a living work of art. In shaping this piece, I sought to give form to a presence that watches over us - calm, assured, and kindly. The serene face and the intricate curves of the headdress are deliberate expressions of balance and quiet strength, inviting us to feel the gentle blessing that exists beyond what we see. Creating this work reminded me that even stone can hold a living energy, a silent prayer rooted in stillness. Through this sculpture, I hope to offer a moment of reflection and an awareness that we, too, carry that same dignified serenity within.

I invite you to experience my latest creation, Ebon Serenity with Crown of Curves, a sculptural work that embodies quiet strength and grace through form. In this piece, I have shaped a styled face, its dark complexion conveying a profound calm that immediately draws you in. This is no mere portrait; it is a presence that watches over, serene and knowing, inviting reflection and reverence.

The figure's headdress commands attention with its detailed, curved elements that extend outward in a balanced, symmetrical arrangement. Each curve asserts itself as a deliberate gesture, both delicate and assertive, crafting a crown that feels both regal and deeply spiritual. Framing the face are large, intricate circular earrings - each one distinct, each holding its own space - emphasizing a quiet dignity. At the center of the forehead rests a solitary ornament, placed with intention above gently arched eyebrows that soften the expression into a subtle, reassuring smile.

Around the neck, layers of beaded necklaces add texture and rhythm, reinforcing the figure's timeless aura. These beads are not just decorative; they symbolize the layers of experience and the necklaces of many lives woven together in harmony. The choice to work monochromatically in shades of black, gray, and white deepens the sense of stillness and focus, while a textured, matte background supports the composition without distraction, allowing every detail to resonate clearly.

Creating this piece as a sculpture rather than a painting was essential. Stone, with its enduring permanence and natural beauty, became my medium of choice because it reflects life itself - steady, quiet, and profound. The eyes of this sculpture are alive; their serenity and subtle smile suggest that we are observed, protected, and blessed in the presence of something greater than ourselves.

This work emerges from a place of contemplation on visibility and the power of subtle presence. In our fast-paced world, moments of quiet awareness are rare; this sculpture invites you to slow down and honor the stillness within and around us. It reminds me that art, like life, can be expressed in infinite ways - in forms that hold space for prayer, for calm, for connection that transcends words.`,
  },
  {
    id: "artwork.ocean-promise",
    title: "Ethereal Guardian of the Fiery Veil",
    slug: "ethereal-guardian-of-the-fiery-veil",
    collection: "Art uplifting Indian heritage",
    imageUrl: "/images/paintings/Ethereal Guardian of the Fiery Veil.jpeg",
    description: `I created "Ethereal Guardian of the Fiery Veil" to capture the essential spirit that governs the universe's natural order. This piece reflects the profound presence that safeguards balance, a force that moves with warmth and intensity through every element it touches. The bold profile, crowned with a distinctive headdress, rises from a swirling backdrop of fire and life - each color and line chosen to honor the power that maintains harmony and enforces divine law.

In this work, I invite you to recognize the spirit within you and follow your instincts, never deviating from the truth. Witness how strength and vigilance come alive through vibrant energy, reminding us that the spirit within all things responds to disruption with resolute purpose. It is a celebration of vitality and an invitation to recognize the quiet authority that upholds justice in the cosmos. Through this painting, I hope to inspire a deeper appreciation for the unseen guardians who sustain the world's delicate balance.

I envisioned this artwork as a vivid reflection of the primal spirit that governs the universe, embodying both its power and its order. At the center, a stylized human profile emerges with bold, graphic features, enclosed by a headdress marked by precise red and black stripes and delicate white dots. Each element stands distinctly, yet together they pulse with a sense of life and authority, as if the figure itself commands the fiery energies that surround it.

The swirling background flows seamlessly into the figure, dissolving boundaries and creating a dynamic interplay between form and environment. Through warm tones of orange, red, and yellow, with subtle hints of green, the composition radiates intense energy, evoking the continual movement of natural forces. This is a guardian of balance - an ethereal presence that enforces the harmony inherent in creation and responds to disruptions with resolute strength.

In this work, I hold space for contemplation on the invisible laws that sustain existence and the quiet, often unseen spirit that maintains cosmic order. It invites the viewer to witness the intersection of vitality and discipline, where passion is tempered by purpose. The painting is both a celebration and a reminder of the enduring flame that resides within all things, urging respect for the natural world and the energies that shape it.`,
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

console.log("Finished updating the heritage category items.");
