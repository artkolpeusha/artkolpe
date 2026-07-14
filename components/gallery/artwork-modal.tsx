"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Artwork } from "@/lib/artworks";
import { ArtworkDetail } from "./artwork-detail";

export function ArtworkModal({
  artwork
}: {
  artwork: Artwork;
}) {
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") router.back();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [router]);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${artwork.title} artwork details`}
        className="fixed inset-0 z-50 grid place-items-center bg-ocean/10 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => router.back()}
      >
        <motion.div
          className="w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-soft"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <ArtworkDetail
            artwork={artwork}
            modal
            onClose={
              <button
                type="button"
                aria-label="Close artwork details"
                onClick={() => router.back()}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-ocean/15 text-graphite transition hover:border-ocean"
              >
                <X size={19} aria-hidden />
              </button>
            }
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
