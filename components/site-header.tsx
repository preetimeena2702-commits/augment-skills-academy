import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/courses", label: "Programs" },
  { href: "/#outcomes", label: "Outcomes" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <>
      <div className="border-b border-border/60 bg-[#132238] px-6 py-2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/82">
        Applications for the May 4, 2026 cohort are open
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/84 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand-mark.svg"
              alt="Augment Skills Academy"
              width={44}
              height={44}
              priority
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Augment Skills Academy
              </p>
              <p className="text-sm font-semibold text-foreground">
                Mentor-led career paths
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-semibold text-muted hover:text-foreground md:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground md:inline-flex"
            >
              Book a call
            </Link>
            <Link
              href="/signup"
              className="inline-flex rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(227,106,47,0.28)]"
            >
              Apply now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
