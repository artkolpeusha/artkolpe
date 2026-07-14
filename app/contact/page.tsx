import { Suspense } from "react";
import { Mail, Facebook, Instagram } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { getMetadataImages } from "@/lib/media";
import { getContactPageContent, getSiteSettings } from "@/lib/site-content";

const socialIcons = {
  Instagram,
  Facebook,
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPageContent();

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

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPageContent(), getSiteSettings()]);

  return (
    <main className="pt-20">
      <section className="bg-white py-20">
        <div className="museum-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="mt-4 font-serif text-6xl font-medium leading-tight text-graphite">{page.title}</h1>
            {page.description ? (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">{page.description}</p>
            ) : null}
            <div className="mt-10 space-y-4 text-graphite">
              <a href={`mailto:${settings.contactEmail}`} className="flex items-center gap-3 text-graphite hover:text-ocean">
                <Mail size={18} aria-hidden /> {settings.contactEmail}
              </a>
              {settings.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-graphite hover:text-ocean">
                    {Icon ? <Icon size={18} aria-hidden /> : null} {link.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
          <Reveal>
            <Suspense fallback={<div className="min-h-[32rem] border border-ocean/15 bg-white p-7 shadow-soft md:p-10" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
