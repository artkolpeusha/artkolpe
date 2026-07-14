import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { getMetadataImages, getSafeImageSrc } from "@/lib/media";
import { getAwards, getExhibitions, getHomePageContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePageContent();

  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      images: getMetadataImages(page.seo.image),
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: getMetadataImages(page.seo.image),
    },
  };
}

export default async function Home() {
  const [page, awards, exhibitions] = await Promise.all([
    getHomePageContent(),
    getAwards(),
    getExhibitions(),
  ]);

  const featuredAwards = awards.filter((item) => item.featuredOnHome).slice(0, 4);
  const featuredExhibitions = exhibitions.filter((item) => item.featuredOnHome).slice(0, 12);

  return (
    <main>
      <section className="hero-field pt-28">
        <div className="museum-container grid min-h-[calc(100vh-7rem)] gap-10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <h1 className="mt-5 font-serif text-6xl font-bold leading-[0.95] md:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-graphite">{page.hero.subtitle}</p>
            <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-graphite md:text-4xl">
              {page.hero.quote}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-graphite md:text-lg">
              {page.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href={page.hero.primaryCta.href} variant={page.hero.primaryCta.style || "dark"}>
                {page.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={page.hero.secondaryCta.href} variant={page.hero.secondaryCta.style || "outline"}>
                {page.hero.secondaryCta.label}
              </ButtonLink>
            </div>

            <div className="paint-ribbon mt-10 h-3 w-56" aria-hidden />

            <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-ocean/10 py-6">
              {page.hero.stats.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-4xl text-graphite">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-graphite">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-[0.82fr_1fr] sm:items-end">
            <Reveal className="order-2 sm:order-1" delay={120}>
              <div className="art-panel relative aspect-[3/4] overflow-hidden bg-sky/10">
                <Image
                  src={getSafeImageSrc(page.hero.primaryImage, "/images/artist/usha-kolpe.jpeg")}
                  alt={`${page.hero.title} portrait`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 85vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="order-1 sm:order-2" delay={220}>
              <div className="art-panel relative aspect-[4/5] overflow-hidden bg-sky/10">
                <Image
                  src={getSafeImageSrc(page.hero.secondaryImage, "/images/artworks/usha-award.jpeg")}
                  alt={`${page.hero.title} featured artwork`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 85vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-graphite">{page.hero.secondaryImageCaption}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ocean/10 bg-white py-12">
        <div className="museum-container">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            <div className="lg:w-48">
              <p className="eyebrow">{page.awardsSection.eyebrow}</p>
              <h2 className="mt-2 font-serif text-3xl text-graphite">{page.awardsSection.title}</h2>
            </div>
            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {featuredAwards.map((award) => (
                <Link
                  key={award.id}
                  href="/awards"
                  className="award-mark flex min-h-28 items-center justify-center border border-ocean/15 p-5 text-center font-serif text-xl leading-tight text-graphite transition hover:-translate-y-1 hover:border-ocean/50 hover:text-ocean hover:shadow-soft"
                >
                  {award.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-band py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Image
              src={getSafeImageSrc(page.aboutSection.image, "/images/artist/usha-award.jpeg")}
              alt={`${page.aboutSection.title} section image`}
              width={900}
              height={1100}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">{page.aboutSection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-5xl font-medium">{page.aboutSection.title}</h2>
            <p className="mt-6 text-lg leading-8 text-graphite">{page.aboutSection.body}</p>
            <p className="mt-5 leading-8 text-graphite">{page.aboutSection.secondaryBody}</p>
            <p className="mt-5 leading-8 text-graphite">{page.aboutSection.tertiaryBody}</p>
            <div className="mt-8">
              <ButtonLink href={page.aboutSection.ctaHref} variant="dark">
                {page.aboutSection.ctaLabel}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">{page.philosophySection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-5xl font-medium">{page.philosophySection.title}</h2>
            <p className="mt-6 text-lg leading-8 text-graphite">{page.philosophySection.body}</p>
            <p className="mt-5 leading-8 text-graphite">{page.philosophySection.secondaryBody}</p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {page.philosophySection.purposeItems.map((item, index) => (
                <div
                  key={item}
                  className="purpose-card border border-ocean/15 bg-white p-5 text-graphite"
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  <p className="font-serif text-2xl leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="editorial-band py-20">
        <div className="museum-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">{page.focusSection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-5xl font-medium">{page.focusSection.title}</h2>
            <p className="mt-6 leading-8 text-graphite">{page.focusSection.body}</p>
            <p className="mt-5 leading-8 text-graphite">{page.focusSection.secondaryBody}</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {page.focusSection.artworks.map((artwork) => (
              <Reveal key={artwork.id}>
                <Link
                  href={`/gallery/${artwork.slug}`}
                  className="artwork-card group block overflow-hidden border border-ocean/10 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-sky/10">
                    <Image
                      src={getSafeImageSrc(artwork.image)}
                      alt={`${artwork.title} artwork`}
                      fill
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="museum-container">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">{page.latestArtworksSection.eyebrow}</p>
                <h2 className="mt-3 max-w-2xl font-serif text-5xl font-medium">
                  {page.latestArtworksSection.title}
                </h2>
              </div>
              <ButtonLink href={page.latestArtworksSection.ctaHref} variant="outline">
                {page.latestArtworksSection.ctaLabel}
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.latestArtworksSection.artworks.map((artwork) => (
              <Link
                key={artwork.id}
                href={`/gallery/${artwork.slug}`}
                className="artwork-card group block overflow-hidden bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={getSafeImageSrc(artwork.image)}
                    alt={`${artwork.title} artwork`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ocean/0 transition group-hover:bg-ocean/10" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl">{artwork.title}</h3>
                  <p className="mt-1 text-sm text-graphite">{artwork.collection}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="museum-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">{page.exhibitionsSection.eyebrow}</p>
              <h2 className="mt-4 font-serif text-5xl font-medium">{page.exhibitionsSection.title}</h2>
              <p className="mt-6 leading-8 text-graphite">{page.exhibitionsSection.body}</p>
              <div className="mt-8">
                <ButtonLink href={page.exhibitionsSection.ctaHref} variant="outline">
                  {page.exhibitionsSection.ctaLabel}
                </ButtonLink>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredExhibitions.map((exhibition) => (
                <Reveal
                  key={exhibition.id}
                  className="exhibition-tile border border-ocean/15 bg-white p-5"
                >
                  <h3 className="font-serif text-3xl text-graphite">{exhibition.title}</h3>
                  <p className="mt-2 text-sm text-graphite">{exhibition.subtitle}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quote-panel py-20 text-paper">
        <div className="museum-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-paper/70">{page.advocacySection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-5xl font-medium">{page.advocacySection.title}</h2>
            <p className="mt-6 max-w-2xl leading-8 text-paper/78">{page.advocacySection.body}</p>
          </Reveal>
          <Reveal className="lg:text-right">
            <blockquote className="font-serif text-3xl leading-tight md:text-4xl">
              {page.advocacySection.quote}
            </blockquote>
            <div className="mt-8">
              <ButtonLink href={page.advocacySection.ctaHref} variant="light">
                {page.advocacySection.ctaLabel}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {page.shortBioSection.enabled ? (
        <section className="py-20">
          <div className="museum-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">{page.shortBioSection.eyebrow}</p>
              <h2 className="mt-4 font-serif text-5xl font-medium">{page.shortBioSection.title}</h2>
            </Reveal>
            <Reveal>
              <p className="text-xl leading-9 text-graphite">{page.shortBioSection.body}</p>
            </Reveal>
          </div>
        </section>
      ) : null}

      {page.contactCtaSection.enabled ? (
        <section className="bg-ocean py-24 text-paper">
          <div className="museum-container max-w-4xl text-center">
            <p className="eyebrow text-paper/70">{page.contactCtaSection.eyebrow}</p>
            <h2 className="mt-5 font-serif text-5xl font-medium">{page.contactCtaSection.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-paper/72">{page.contactCtaSection.body}</p>
            <div className="mt-9">
              <ButtonLink href={page.contactCtaSection.ctaHref} variant="light">
                {page.contactCtaSection.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
