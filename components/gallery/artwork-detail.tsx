import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

export function ArtworkDetail({
  artwork,
  modal = false,
  onClose
}: {
  artwork: Artwork;
  modal?: boolean;
  onClose?: React.ReactNode;
}) {
  return (
    <article className={`grid bg-white ${modal ? "max-h-[88vh] overflow-y-auto lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-2"}`}>
      <div className="relative min-h-[360px] bg-white lg:min-h-[720px]">
        <Image
          src={artwork.image}
          alt={`${artwork.title} artwork by Usha Kolpe`}
          fill
          priority={modal}
          className="object-cover"
        />
      </div>
      <div className="p-7 md:p-10 lg:p-14">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{artwork.collection}</p>
            <h1 className="mt-3 font-serif text-5xl font-medium">{artwork.title}</h1>
          </div>
          {onClose}
        </div>

        <div className="mt-10 border-t border-ocean/10 pt-8">
          <p className="leading-8 text-graphite">{artwork.description}</p>
        </div>
      </div>
    </article>
  );
}
