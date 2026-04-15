import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { logoCloud } from "@/lib/demo-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      {/* CTA strip */}
      <div className="bg-[#132238] px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] bg-white/5 p-8 text-center md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent-3 mb-3">
              Start your journey
            </p>
            <h2 className="text-3xl font-black text-balance md:text-4xl">
              Join a mentor-led path built<br />to turn learning into a career.
            </h2>
            <p className="mt-4 text-white/60 leading-7">
              Structured paths · Mentor reviews · Portfolio-ready projects · Career support
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-black text-white shadow-[0_8px_24px_rgba(227,106,47,0.50)] hover:-translate-y-0.5 transition-transform"
              >
                Apply now <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white/80 hover:bg-white/5 transition-colors"
              >
                Talk to an advisor
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="bg-background px-6 py-12">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="text-base font-black text-foreground">Augment Skills Academy</p>
            <p className="mt-3 text-sm leading-7 text-muted max-w-xs">
              Outcome-first programs for modern engineering, product, growth, and AI careers.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {logoCloud.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          {[
            {
              title: "Explore",
              links: [
                { href: "/courses", label: "Programs" },
                { href: "/blog", label: "Resources" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Career call" },
              ],
            },
            {
              title: "Learners",
              links: [
                { href: "/signup", label: "Apply" },
                { href: "/login", label: "Login" },
                { href: "/dashboard", label: "Dashboard" },
                { href: "/certificates/cert_demo_0001", label: "Certificates" },
              ],
            },
            {
              title: "Contact",
              links: [
                { href: "mailto:advisor@augmentskills.academy", label: "advisor@augmentskills.academy" },
                { href: "/contact", label: "Enterprise cohorts" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">{col.title}</p>
              <div className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted">
            © 2026 Augment Skills Academy · Built for learners who want proof of work and momentum.
          </p>
        </div>
      </div>
    </footer>
  );
}
