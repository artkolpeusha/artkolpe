import Link from "next/link";

export function Footer({
  brandName,
  footerBlurb,
  quickLinks,
  socialLinks,
  contactEmail,
  copyrightText,
}: {
  brandName: string;
  footerBlurb: string;
  quickLinks: Array<{ href: string; label: string }>;
  socialLinks: Array<{ href: string; label: string }>;
  contactEmail: string;
  copyrightText: string;
}) {
  return (
    <footer className="bg-white py-16 text-graphite">
      <div className="museum-container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-graphite">{brandName}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-graphite/75">{footerBlurb}</p>
        </div>
        <div>
          <p className="eyebrow text-graphite/65">Quick Links</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-graphite/75 hover:text-ocean">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow text-graphite/65">Connect</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-graphite/75">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-ocean">
                {link.label}
              </a>
            ))}
            <a href={`mailto:${contactEmail}`} className="hover:text-ocean">
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="museum-container mt-12 border-t border-ocean/15 pt-6 text-xs text-graphite/55">
        Copyright {new Date().getFullYear()} {copyrightText}
      </div>
    </footer>
  );
}
