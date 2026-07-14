import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "dark"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
}) {
  const classes = {
    dark: "rounded-full bg-ocean px-6 py-3 text-paper shadow-soft hover:bg-ocean/90",
    light: "rounded-full bg-white px-6 py-3 text-ocean shadow-soft hover:bg-sky",
    outline: "rounded-full border border-ocean/25 bg-transparent px-6 py-3 text-ocean hover:border-ocean hover:bg-ocean/10 hover:text-ocean"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center text-sm transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean ${classes[variant]}`}
    >
      {children}
    </Link>
  );
}
