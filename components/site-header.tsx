import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/courses", label: "Programs" },
  { href: "/#outcomes", label: "Outcomes" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#132238] px-4 py-2.5 text-center text-xs font-bold text-white/85">
        🎉 Applications for the{" "}
        <span className="text-accent-3">May 4, 2026 cohort</span> are now open —{" "}
        <Link href="/signup" className="underline underline-offset-2 hover:text-white transition-colors">
          Apply today
        </Link>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/brand-mark.svg"
              alt="Augment Skills Academy"
              width={40}
              height={40}
              priority
            />
            <div className="hidden sm:block">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted">
                Augment Skills
              </p>
              <p className="text-sm font-black text-foreground leading-tight">Academy</p>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted hover:bg-accent/8 hover:text-foreground transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden text-sm font-bold text-muted hover:text-foreground transition-colors md:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-full border border-border px-4 py-2 text-sm font-bold text-foreground hover:border-accent/40 transition-colors md:inline-flex"
            >
              Book a call
            </Link>
            <Link
              href="/signup"
              className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-black text-white shadow-[0_4px_16px_rgba(227,106,47,0.35)] hover:-translate-y-0.5 transition-transform"
            >
              Apply now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
