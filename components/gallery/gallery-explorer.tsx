"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Artwork } from "@/lib/artworks";
import { getSafeImageSrc } from "@/lib/media";

export function GalleryExplorer({ artworks }: { artworks: Artwork[] }) {
  const collections = useMemo(() => {
    const uniqueCollections = Array.from(
      new Set(artworks.map((artwork) => artwork.collection).filter(Boolean))
    );

    return ["All", ...uniqueCollections];
  }, [artworks]);
  const [activeCollection, setActiveCollection] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesCollection = activeCollection === "All" || artwork.collection === activeCollection;
      const matchesQuery = artwork.title.toLowerCase().includes(query.toLowerCase().trim());
      return matchesCollection && matchesQuery;
    });
  }, [activeCollection, artworks, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {collections.map((collection) => (
            <button
              key={collection}
              type="button"
              onClick={() => setActiveCollection(collection)}
              className={`relative min-h-11 rounded-full px-5 text-sm transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean ${
                activeCollection === collection
                  ? "text-paper"
                  : "border border-ocean/15 bg-white text-graphite hover:border-ocean/30 hover:text-ocean"
              }`}
            >
              {activeCollection === collection ? (
                <motion.span
                  layoutId="active-filter"
                  className="absolute inset-0 rounded-full bg-ocean"
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              ) : null}
              <span className="relative z-10">{collection}</span>
            </button>
          ))}
        </div>
        {/* <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search artworks by title</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-graphite" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title"
            className="h-12 w-full rounded-full border border-ocean/15 bg-white pl-11 pr-4 text-sm text-graphite placeholder:text-graphite/60 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/15"
          />
        </label> */}
      </div>

      <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((artwork) => (
          <Link
            key={artwork.id}
            href={`/gallery/${artwork.slug}`}
            scroll={false}
            className="artwork-card group block bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-sky/10">
              <Image
                src={getSafeImageSrc(artwork.image)}
                alt={`${artwork.title} by Usha Kolpe`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 grid place-items-center bg-ocean/0 opacity-0 transition group-hover:bg-ocean/10 group-hover:opacity-100">
                <span className="border border-paper/70 px-4 py-3 text-sm text-paper">View Details</span>
              </div>
            </div>
            <div className="p-5">
              <h2 className="font-serif text-2xl">{artwork.title}</h2>
              <p className="mt-1 text-sm text-graphite">{artwork.collection}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 border border-ocean/15 bg-white p-10 text-center text-graphite">
          No artworks match that search.
        </div>
      ) : null}
    </div>
  );
}
