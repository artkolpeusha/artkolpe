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
    id: "artwork.breath-of-the-forest",
    title: "Embrace the Flow of Life's Diversity",
    slug: "embrace-the-flow-of-lifes-diversity",
    collection: "Landscape Art",
    imageUrl: "/images/paintings/Embrace the flow of Life’s Diversity.jpeg",
    description: `I am honored to share "Embrace the Flow of Life's Diversity," a work that has been shown internationally in Berlin, Grenada, and Dubai. This piece is part of my ongoing exploration of the quiet beauty found in nature's variety - a landscape where cascading waterfalls meet lush forests, each element distinct yet harmoniously intertwined. Through soft and textured brushstrokes, I invite you to journey from the heights of flowing water down to the stillness of a tranquil pool, where mist rises gently and leaves shimmer in gentle yellow light. This artwork is a reflection of life itself: diverse, unique, and ever-changing. Just as nature embraces every tree, flower, and stream, I believe we too can embrace the differences among us. It is through acceptance and celebration of this diversity that our world becomes truly beautiful. With this painting, I hope to inspire a moment of peace and remind us all that every individual contributes to the richness of our shared existence.

I present a work that has traveled across continents, exhibited in vibrant cultural centers such as Berlin, Grenada, and Dubai, each location adding depth to its story without diminishing its core message. Though not a recent creation, this painting remains a vital expression within a broader artistic journey, continuing to resonate with its timeless theme of unity through diversity.

In this serene landscape, the eye is naturally invited to follow the graceful descent of a waterfall, tumbling over rugged cliffs into a still, reflective pool. Surrounding the water, a dense forest thrives, every tree and leaf distinguished by its unique form and color - some bursting with warm yellow highlights that soften the overall tranquility. The sky above stretches clear and blue, its calmness embracing the scene and completing the harmonious balance between earth and air, water and flora.

Each element within the composition carries its own identity, coming together like the many individuals who make up our world. The mist that rises from the cascading falls lends a delicate texture, softening edges and weaving a quiet mystery through the vivid landscape. It is in this interplay of contrasts - the solid rock and flowing water, shadow and light, stillness and movement - that the painting finds its deeper meaning. It reflects life itself: complex, varied, and perfectly imperfect.

This work is a gentle invitation to recognize and celebrate differences, to embrace the unique qualities that shape our shared experience. It offers a vision of acceptance and beauty, reminding us that just as these diverse natural elements coexist to create a tranquil sanctuary, so too can people of all kinds come together to enrich the world around them. The river's flow becomes a metaphor for life's continuous, unfolding diversity - a constant embrace of change, growth, and harmony.`,
  },
  {
    id: "artwork.human-constellation",
    title: "Whispers of the Enchanted Cascade",
    slug: "whispers-of-the-enchanted-cascade",
    collection: "Landscape Art",
    imageUrl: "/images/paintings/Harvest of Light in earth’s embrace.jpeg",
    description: `I am honored to present "Whispers of the Enchanted Cascade," a work that reflects my ongoing journey of capturing the quiet magic found in nature's hidden places. This piece invites you into a serene landscape where a gentle waterfall flows into a winding river, leading the eye toward ancient stone ruins softly embraced by lush greenery. Bathed in warm, golden sunlight, the scene carries a timeless feeling - one that speaks of stories quietly kept by the earth and the endless dance between nature and history.

Creating this artwork was a uniquely immersive experience, as I sought to bring forth an ethereal and mystical atmosphere - an invitation to step beyond the ordinary and enter a realm of beauty that transcends time. In this quiet moment of reverence and wonder, I hope to share a vision of peace and enchantment that reminds us of the deep connection we hold with the world around us. Through this piece, I want to inspire you to listen to the subtle whispers of nature and to find strength and calm in its gentle embrace.

I am pleased to share Whispers of the Enchanted Cascade, a work that reflects a moment of quiet discovery within an ancient landscape. This painting, created within the ongoing journey of my artistic practice, invites a contemplative exploration of nature's subtle magic woven with the traces of history.

At the heart of this scene flows a tranquil waterfall, its waters descending softly into a winding river that guides the eye through the composition. This gentle curve leads toward weathered stone ruins - arches standing tall, silent witnesses to time gone by. These remnants of a forgotten structure speak not only of endurance but of nature's quiet reclaiming, as lush greenery envelops every stone and branch. The interplay of sunlight here is key - bathing the scene in a warm, golden glow that softens edges and transforms the landscape into a place suspended between reality and reverie.

Creating Whispers of the Enchanted Cascade was an experience shaped by a desire to evoke what is ethereal and mysterious, yet intimately familiar. The process carried me into a trance-like space, where imagination and memory blur, and an invitation to enter a magic land unfolds. This artwork stands as a bridge to those quiet moments when the ancient and the present meet, reminding us of the layers of beauty residing just beneath the surface of the everyday.

Through this piece, I hope to offer a space of calm and wonder, a visual poem that honors nature's enduring presence and the subtle stories held in forgotten places. It is a reminder that beneath the noise of modern life, there exists a serene flow - whispers of the enchanted cascade - that calls us to slow down, notice, and reconnect.`,
  },
  {
    id: "artwork.silent-diagnosis",
    title: "Autumn's Resilient Cascade",
    slug: "autumns-resilient-cascade",
    collection: "Landscape Art",
    imageUrl: "/images/paintings/Autumn’s resilience.jpeg",
    description: `I am honored to share "Autumn's Resilient Cascade," a piece that continues my journey of exploring nature's quiet strength and enduring cycles. This work captures a waterfall framed by vibrant autumn foliage, a moment where the falling leaves boldly display their colors before the stillness of winter arrives. The flowing water, painted in soft whites and blues, moves with graceful persistence against the warm oranges and reds of the trees, reminding me that just as the season embraces change without fear, we too carry resilience within us.

Creating this scene was a meditation on the natural rhythms of letting go and renewal - how fall, though aware of the coming cold, meets it without panic and holds onto the knowledge that spring will follow. Through this artwork, I hope to inspire a quiet strength and faith in what lies ahead, encouraging us all not to lose heart in difficult times but to trust in the bright moments waiting to emerge.

I present a piece that continues to find its place within a thoughtful exploration of nature's cycles and inner strength, resonating beyond its creation to remind us of resilience and hope. Exhibited in select venues that honor reflection and natural beauty, this work invites viewers to experience the quiet power found in the changing seasons and the enduring flow of life.

The scene centers on a waterfall, its steady cascade traced in smooth transitions of white and blue, cutting through a landscape rich with the vibrant hues of autumn. Surrounding trees in fiery shades of orange, yellow, and red create a warm embrace, their colors both vivid and bold before the inevitable fall. Mist rises gently where water meets rock, adding softness to the dynamic movement that animates the composition. Tall, stately trees frame the view, grounding the scene in a timeless natural order.

This artwork expresses more than a moment in nature; it speaks to the strength inherent in change and the courage to face what lies ahead. Just as autumn does not panic before winter but honors the promise of renewal, the waterfall's persistent flow embodies a message of unwavering vitality. It encourages us to hold onto our own inner vigor, trusting that challenges are temporary and that brighter days follow. The blending of textures and colors captures this balance of calm and energy, illustrating regeneration as an enduring law, not simply a hope.

With mindful use of materials that respect the environment, this work also carries a reminder of our responsibility to protect the earth - our common home - despite the difficulties we encounter. In observing this landscape, one is invited to reflect on the quiet strength within all of us and the cycles that sustain life, urging patience, resilience, and openness to the renewal that inevitably awaits.`,
  },
  {
    id: "artwork.petals-after-rain",
    title: "Silent Witness of the Whispering Woods",
    slug: "silent-witness-of-the-whispering-woods",
    collection: "Landscape Art",
    imageUrl: "/images/paintings/Silent Witness.jpeg",
    description: `I am honored to share "Silent Witness of the Whispering Woods," a work that explores nature's enduring presence and the stories quietly held within its embrace. This landscape reveals a tranquil woodland scene where ancient trees, with their deeply textured bark and sprawling branches, stand as timeless guardians of a forgotten cabin nestled among the greenery. The calm water in the foreground not only reflects the surrounding trees but also symbolizes the ever-watchful eyes of the natural world.

This artwork is a powerful reminder that we are constantly being watched by the higher cosmos through these silent witnesses of nature. These trees have seen it all - the lives once lived, the moments of joy and sorrow, the passage of time. Nature holds all secrets and beauty, serving as a moral compass guiding us to do right. In honoring this presence, we are called to act with integrity and mindfulness, knowing that every choice is seen and carries weight.

Through soft, earthy tones and peaceful imagery, this piece invites you to listen closely to the quiet truths spoken by the natural world and to embrace the responsibility of being watched. Let this silent witness inspire you to walk your path with reverence, doing right by the earth, yourself, and all that surrounds you.

I present a work that finds its place within a continuing journey of engaging with nature's quiet presence and timeless wisdom. Exhibited among collections that celebrate reflection and the enduring bond between humans and the natural world, this piece invites you to pause and listen to the stories held silently within ancient trees and forgotten spaces. I am honored to share "Silent Witness of the Whispering Woods," a work that explores nature's enduring presence and the stories quietly held within its embrace. This landscape reveals a peaceful, tranquil woodland scene where ancient, towering trees, marked by deeply textured bark and robust, sprawling branches, stand as steadfast, timeless guardians and witnesses to the passage of time. Nestled among the greenery is a modest cabin, worn yet dignified, framed by a simple wooden fence that speaks of modest lives once lived in harmony with the land.

In the foreground, a tranquil pool of water reflects the surrounding trees and sky with calm clarity, offering a mirror to a world that continues in quiet rhythm. This calm water not only reflects the scenery but also symbolizes the ever-watchful eyes of the natural world, while the background's gentle haze lends depth and softness, wrapping the composition in an atmosphere of gentle stillness.

This painting is more than a visual homage; it is a meditation on memory, resilience, and the unseen presence that watches over all living things. The tree, central and commanding, holds the echoes of lives once rich with stories, testifying to nature's role as keeper of secrets and guide for our moral compass. It reminds us that though time moves on, the quiet dignity of the natural world remains steadfast, encouraging mindfulness and ethical living under the watchful gaze of something greater.

By embracing earthy tones - greens, browns, and muted golds - the work conveys the beauty of simplicity and groundedness. It calls us to remember that we are part of a larger whole, observed by the cosmos and called to act with care and respect. Through this scene, viewers are invited to reconnect with nature's lessons and find reassurance in its enduring watchfulness and wisdom.`,
  },
  {
    id: "artwork.language-of-color",
    title: "Reflection of the Inner Grove",
    slug: "reflection-of-the-inner-grove",
    collection: "Landscape Art",
    imageUrl: "/images/paintings/Reflection of the inner Grove.jpeg",
    description: `I am pleased to share "Reflections of the Inner Grove," a landscape that emerged from a deep meditation on self-awareness and the quiet wisdom found in nature's mirrors. This painting, exhibited in Spain and Milan, captures a tranquil pond surrounded by vibrant trees and lush foliage, where water becomes a canvas reflecting the world - and ourselves. In this serene moment, the trees seem to gaze at their own reflections, inviting us to look inward with kindness and clarity.

Through layered textures and vivid shades of green, yellow, and gentle pink, I sought to convey the richness of an inner landscape that calls us to mindfulness. This work reminds us to hold gentle awareness of our actions, to keep our inner mirror clear and honest, and to meet ourselves with respect and understanding. It is a quiet invitation to recognize that how we view ourselves shapes the path we take, and that true change begins with reflection.

May this piece encourage you to pause, breathe, and honor the connection between the world outside and the life within. Let your inner grove flourish through mindful presence and thoughtful care, growing stronger with each moment of conscious choice.

I present a work that has been honored with exhibitions in Spain and Milan, reflecting its place within an ongoing exploration of nature's quiet wisdom and the reflective spaces we carry within ourselves. This painting forms part of a broader journey that invites viewers to look deeply - not only outward toward the natural world but inward toward a personal landscape of awareness and presence.

The composition centers on a tranquil pond, its surface smooth and mirror-like, offering gentle reflections of the trees and foliage that surround it. Lush greenery in varied shades of green and yellow creates a vibrant frame, enlivened by delicate touches of pink blossoms that bring subtle warmth to the scene. Two tall trees with textured bark stand firmly on either side, anchoring the view and guiding the eye toward the bright, open sky beyond. Each brushstroke builds layers of depth, capturing the serene beauty and quiet vitality of this inner grove.

This work is inspired by the idea of water as a mirror - not only reflecting the external world but calling us to see ourselves clearly and kindly. It is a reminder to remain mindful of our actions, to be conscious of the ways in which we live and interact, knowing that all moments are observed and have meaning. The reflections on the pond become a metaphor for self-examination and acceptance, encouraging a peaceful engagement with our inner landscapes.

With a deliberate focus on texture and color, the painting communicates both stillness and life, harmony and growth. It speaks softly about the importance of mindfulness, of embracing who we are with honesty and compassion. Through this piece, I offer an invitation to pause, to look inward with gentle attention, and to find strength in the quiet presence that watches over all living things.`,
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

console.log("Finished updating the landscape category items.");
