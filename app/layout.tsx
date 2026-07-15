import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getMetadataImages } from "@/lib/media";
import { getSiteSettings } from "@/lib/site-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"]
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

  return {
    metadataBase: new URL(siteUrl),
    title: settings.seo.title || settings.title,
    description: settings.seo.description || settings.description,
    openGraph: {
      title: settings.seo.title || settings.title,
      description: settings.seo.description || settings.description,
      type: "website",
      images: getMetadataImages(settings.seo.image)
    },
    twitter: {
      card: "summary_large_image",
      title: settings.seo.title || settings.title,
      description: settings.seo.description || settings.description,
      images: getMetadataImages(settings.seo.image)
    }
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Header brandName={settings.brandName} logoImage={settings.logoImage} navItems={settings.navigation} />
        {children}
        <Footer
          brandName={settings.brandName}
          footerBlurb={settings.footerBlurb}
          quickLinks={settings.navigation}
          socialLinks={settings.socialLinks}
          contactEmail={settings.contactEmail}
          copyrightText={settings.copyrightText}
        />
      </body>
    </html>
  );
}
