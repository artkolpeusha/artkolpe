import type { Metadata } from "next";

import { GalleryExplorer } from "@/components/gallery/gallery-explorer";
import { getAllArtworks } from "@/lib/artworks";
import { getGalleryPageContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getGalleryPageContent();

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

export default async function GalleryPage() {
  const [page, artworks] = await Promise.all([getGalleryPageContent(), getAllArtworks()]);

  return (
    <main className="pt-20">
      <section className="bg-white py-20">
        <div className="museum-container">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-6xl font-medium leading-tight text-graphite md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">{page.description}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="museum-container">
          <GalleryExplorer artworks={artworks} />
        </div>
      </section>
    </main>
  );
}
