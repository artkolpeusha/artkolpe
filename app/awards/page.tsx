import { Award } from "lucide-react";
import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { getMetadataImages } from "@/lib/media";
import { getAwards, getAwardsPageContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAwardsPageContent();

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

export default async function AwardsPage() {
  const [page, awards] = await Promise.all([getAwardsPageContent(), getAwards()]);

  return (
    <main className="pt-20">
      <section className="bg-white py-20">
        <div className="museum-container">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-6xl font-medium leading-tight text-graphite md:text-7xl">
            {page.title}
          </h1>
          {page.description ? <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">{page.description}</p> : null}
        </div>
      </section>
      <section className="py-20">
        <div className="museum-container grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <Reveal key={award.id} className="border border-ocean/15 bg-white p-8 shadow-soft">
              <Award className="text-ocean" size={28} aria-hidden />
              <h2 className="mt-8 font-serif text-4xl text-graphite">{award.title}</h2>
              <p className="mt-5 leading-8 text-graphite">{award.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
