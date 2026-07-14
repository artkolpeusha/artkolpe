import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { getMetadataImages, getSafeImageSrc } from "@/lib/media";
import { getAdvocacyPageContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAdvocacyPageContent();

  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      images: getMetadataImages(page.seo.image),
    },
  };
}

export default async function AdvocacyPage() {
  const page = await getAdvocacyPageContent();

  return (
    <main className="pt-20">
      <section className="bg-ocean py-24 text-paper">
        <div className="museum-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-paper/70">{page.hero.eyebrow}</p>
            <h1 className="mt-4 font-serif text-6xl font-medium leading-tight md:text-7xl">
              {page.hero.title}
            </h1>
          </Reveal>
          <Reveal>
            <blockquote className="font-serif text-4xl leading-tight">{page.hero.quote}</blockquote>
            <p className="mt-7 leading-8 text-paper/76">{page.hero.body}</p>
            <p className="mt-5 leading-8 text-paper/76">{page.hero.secondaryBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">{page.planetSection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-5xl font-medium text-graphite">{page.planetSection.title}</h2>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-8 text-graphite">{page.planetSection.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="museum-container">
          <p className="eyebrow">{page.relatedWorksSection.eyebrow}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.relatedWorksSection.artworks.map((artwork) => (
              <Reveal key={artwork.id}>
                <Link href={`/gallery/${artwork.slug}`} className="group block bg-white shadow-sm transition hover:bg-sky/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={getSafeImageSrc(artwork.image)} alt={`${artwork.title} artwork`} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="bg-white p-5 text-graphite">
                    <h2 className="font-serif text-2xl">{artwork.title}</h2>
                    <p className="mt-1 text-sm text-graphite/70">{artwork.year}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
