import { notFound } from "next/navigation";
import { ArtworkDetail } from "@/components/gallery/artwork-detail";
import { getAdjacentArtworks, getAllArtworks, getArtwork } from "@/lib/artworks";

export async function generateStaticParams() {
  const artworks = await getAllArtworks();
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artwork = await getArtwork(slug);
  if (!artwork) return {};

  return {
    title: `${artwork.title} | Usha Kolpe`,
    description: artwork.description,
    openGraph: {
      title: `${artwork.title} | Usha Kolpe`,
      description: artwork.description,
      images: [artwork.image]
    }
  };
}

export default async function ArtworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artwork = await getArtwork(slug);
  if (!artwork) notFound();
  const { previous, next } = await getAdjacentArtworks(slug);

  return (
    <main className="pt-20">
      <section className="museum-container py-12 gallery-detailed-item">
        <ArtworkDetail artwork={artwork} />
      </section>
    </main>
  );
}
