import Image from "next/image";
import type { Metadata } from "next";

import { Reveal } from "@/components/ui/reveal";
import { getAboutPageContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPageContent();

  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      images: [page.seo.image],
    },
  };
}

export default async function AboutPage() {
  const page = await getAboutPageContent();

  return (
    <main className="pt-20">
      <section className="bg-white py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <Image
              src={page.hero.image}
              alt={`${page.hero.title} portrait`}
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">{page.hero.eyebrow}</p>
            <h1 className="mt-4 font-serif text-6xl font-medium leading-tight">{page.hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-graphite">{page.hero.body}</p>
            <p className="mt-5 text-lg leading-8 text-graphite">{page.hero.secondaryBody}</p>
            <p className="mt-5 text-lg leading-8 text-graphite">{page.hero.tertiaryBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="eyebrow">{page.statementSection.eyebrow}</p>
            <Image
              src={page.statementSection.image}
              alt={`${page.statementSection.eyebrow} image`}
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal>
            <blockquote className="font-serif text-4xl leading-tight text-graphite">
              {page.statementSection.quote}
            </blockquote>
            <p className="mt-7 text-lg leading-8 text-graphite">{page.statementSection.body}</p>
            <p className="mt-5 text-lg leading-8 text-graphite">{page.statementSection.secondaryBody}</p>
            <p className="mt-5 text-lg leading-8 text-graphite">{page.statementSection.tertiaryBody}</p>
            <p className="mt-5 text-lg leading-8 text-graphite">{page.statementSection.quaternaryBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">{page.philosophySection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-5xl font-medium text-graphite">{page.philosophySection.title}</h2>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-8 text-graphite">{page.philosophySection.body}</p>
            <p className="mt-5 text-lg leading-8 text-graphite">{page.philosophySection.secondaryBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.philosophySection.purposeItems.map((item) => (
                <div key={item} className="border border-ocean/15 bg-white p-5 font-serif text-2xl text-graphite">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ocean py-20 text-paper">
        <div className="museum-container">
          <p className="eyebrow text-paper/65">{page.timelineSection.eyebrow}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {page.timelineSection.items.map((item, index) => (
              <Reveal key={item} className="border border-paper/18 p-6">
                <span className="text-sm text-paper/50">0{index + 1}</span>
                <p className="mt-6 font-serif text-3xl">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
