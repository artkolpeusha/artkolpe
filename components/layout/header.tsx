"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function Header({
  brandName,
  logoImage,
  navItems,
}: {
  brandName: string;
  logoImage: string;
  navItems: Array<{ href: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ocean/10 bg-white/95 backdrop-blur-xl">
      <div className="museum-container flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-medium tracking-wide text-graphite logo-link">
          {brandName}
          <Image
            src={logoImage}
            alt={`${brandName} logo`}
            fill
            priority
            className="logo-image"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                  className={`relative text-sm transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean ${
                  active
                    ? "text-ocean before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-10 before:bg-ocean"
                    : "text-graphite hover:text-ocean"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
          className="grid size-11 place-items-center rounded-full border border-ocean/20 bg-white text-ocean lg:hidden"
        >
          <Menu size={20} aria-hidden />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-ocean/10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              aria-label="Mobile navigation"
              className="ml-auto flex h-full w-[min(86vw,380px)] flex-col bg-white px-8 py-7 shadow-soft"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl">{brandName}</span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                  className="grid size-11 place-items-center rounded-full border border-ocean/20 text-ocean"
                >
                  <X size={20} aria-hidden />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-ocean/15 pb-4 font-serif text-3xl text-graphite hover:text-ocean"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
