import Image from "next/image";
import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { getMetadataImages, getSafeImageSrc } from "@/lib/media";
import { getExhibitions, getExhibitionsPageContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getExhibitionsPageContent();

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

export default async function ExhibitionsPage() {
  const [page, exhibitions] = await Promise.all([getExhibitionsPageContent(), getExhibitions()]);

  return (
    <main className="pt-20">
      <section className="relative min-h-[72vh] overflow-hidden py-24 text-paper">
        <Image src={getSafeImageSrc(page.heroImage, "/images/exhibitions/global-exhibition.jpg")} alt={`${page.title} hero`} fill priority className="object-cover" />
        <div className="image-veil absolute inset-0" />
        <div className="museum-container relative z-10 pt-24">
          <Reveal>
            <p className="eyebrow text-paper/75">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-6xl font-medium leading-tight md:text-7xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/78">{page.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="museum-container">
          <div className="grid gap-5 md:grid-cols-3">
            {exhibitions.map((item, index) => (
              <Reveal key={item.id} className="border border-ocean/15 bg-white p-7 shadow-sm">
                <span className="text-sm text-graphite">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-8 font-serif text-3xl text-graphite">{item.title}</h2>
                <p className="mt-2 text-sm text-graphite">{item.subtitle}</p>
                <p className="mt-4 leading-7 text-graphite">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
