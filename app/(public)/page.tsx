import Link from "next/link";
import { ArrowRight, Star, Users, Trophy, Briefcase, PlayCircle, CheckCircle2 } from "lucide-react";
import { CourseCard } from "@/components/course/course-card";
import { Reveal } from "@/components/reveal";
import { MarqueeRow } from "@/components/marquee-row";
import { HeroWords } from "@/components/hero-words";
import { Badge } from "@/components/ui/badge";
import {
  academyFaqs,
  learnerJourneys,
  learningPillars,
  logoCloud,
  marketingStats,
  mentorHighlights,
  pricingPlans,
  proofHighlights,
  testimonials,
} from "@/lib/demo-data";
import { listPublishedCourses } from "@/lib/courses";
import { isSupabaseConfigured } from "@/lib/env";

export const revalidate = 3600;

const placementCards = [
  { name: "Ritika S.", from: "UI/UX Designer", to: "Product Designer", company: "Northlane" },
  { name: "Joseph M.", from: "Sales Exec", to: "Growth Engineer", company: "Beamstack" },
  { name: "Ayesha K.", from: "BA Graduate", to: "Product Ops Lead", company: "OrbitPay" },
  { name: "Siddharth R.", from: "Ad-hoc marketer", to: "Growth Associate", company: "SignalOS" },
  { name: "Neha K.", from: "Frontend Dev", to: "AI Product Engineer", company: "Scope AI" },
  { name: "Kabir D.", from: "Freelancer", to: "Full-Stack Engineer", company: "Layerworks" },
  { name: "Priya V.", from: "Content Writer", to: "SEO Strategist", company: "Helio Commerce" },
  { name: "Ansh T.", from: "Intern", to: "Platform Engineer", company: "Northlane" },
];

export default async function HomePage() {
  const courses = await listPublishedCourses();
  const featured = courses.filter((c) => c.featured).slice(0, 3);
  const isDemoMode = !isSupabaseConfigured();

  return (
    <main className="overflow-x-hidden pb-16">

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-8 md:pt-20 md:pb-12">
        {/* Background blobs */}
        <div
          aria-hidden
          className="blob pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #e36a2f 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="blob-delay pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #0f7f78 0%, transparent 70%)" }}
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left */}
          <Reveal className="space-y-7">
            {isDemoMode && (
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                Demo mode — connect Supabase to go live
              </div>
            )}

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
                38,000+ learners transformed
              </p>
              <h1 className="text-5xl font-bold leading-[1.08] md:text-6xl lg:text-7xl text-balance">
                Launch your{" "}
                <HeroWords
                  words={["Tech Career", "AI Skills", "Next Role", "Portfolio"]}
                  className="text-accent"
                />
                <br />
                with mentors
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted md:text-xl">
                Structured learning paths, weekly mentor reviews, and portfolio-first projects
                built to get you to your next role — not just through a course.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(227,106,47,0.40)] hover:-translate-y-0.5 transition-transform"
              >
                Start your application <ArrowRight size={18} />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-7 py-4 text-base font-bold text-foreground hover:border-accent/40 transition-colors"
              >
                <PlayCircle size={18} className="text-accent" />
                Explore programs
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: <Users size={16} />, value: "38k+", label: "Learners" },
                { icon: <Trophy size={16} />, value: "4.8★", label: "Avg rating" },
                { icon: <Briefcase size={16} />, value: "320+", label: "Hiring partners" },
                { icon: <Star size={16} />, value: "2.4×", label: "Career jump" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-accent">{s.icon}</span>
                  <span className="font-bold text-foreground">{s.value}</span>
                  <span className="text-sm text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — placement card stack */}
          <Reveal delay={0.1}>
            <div className="relative">
              {/* Main card */}
              <div className="rounded-[32px] bg-[#132238] p-7 text-white shadow-2xl">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                    Career acceleration
                  </span>
                  <span className="text-xs text-white/50">Next cohort — May 4</span>
                </div>
                <h2 className="text-2xl font-bold leading-snug mb-4">
                  From any background<br />to your dream role
                </h2>
                {/* Mini placements */}
                <div className="space-y-3">
                  {placementCards.slice(0, 3).map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white flex-shrink-0">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{p.name}</p>
                        <p className="text-xs text-white/55 truncate">
                          {p.from} → <span className="text-accent-3">{p.to}</span>
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-white/40 flex-shrink-0">{p.company}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["#e36a2f", "#0f7f78", "#f6c46e", "#8b5cf6"].map((c, i) => (
                      <div key={i} className="h-7 w-7 rounded-full border-2 border-[#132238]" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="text-sm text-white/60">+380k learners transformed</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-4 -bottom-4 rounded-2xl bg-accent px-4 py-3 text-white shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wide opacity-75">Completion</p>
                <p className="text-2xl font-black">92%</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LOGO CLOUD ── */}
      <section className="border-y border-border/60 bg-surface/60 py-5">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-muted">
            Our learners now work at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {logoCloud.map((logo) => (
              <span key={logo} className="text-sm font-bold text-muted/60 hover:text-foreground transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACEMENT MARQUEE ── */}
      <section className="py-10 overflow-hidden">
        <Reveal>
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-muted">
            Real learner transformations
          </p>
        </Reveal>
        <MarqueeRow cards={placementCards} />
        <div className="mt-4">
          <MarqueeRow cards={[...placementCards].reverse()} reverse />
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <Badge>Why it works</Badge>
            <h2 className="mt-4 text-4xl font-bold text-balance">
              A system designed around getting you hired, not just educated
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Every path combines structured lessons, mentor reviews, portfolio artifacts,
              and career support into one outcome-first experience.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {learningPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div className={`group relative overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1 ${i === 0 ? "bg-[#132238] text-white" :
                  i === 1 ? "bg-accent text-white" :
                    "bg-accent-2 text-white"
                }`}>
                {/* SVG decoration */}
                <svg aria-hidden className="absolute -right-8 -top-8 h-32 w-32 opacity-10" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="currentColor" />
                </svg>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-60">
                  {pillar.eyebrow}
                </p>
                <h3 className="text-xl font-bold leading-snug text-balance">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 opacity-75">{pillar.description}</p>
                <ArrowRight size={20} className="mt-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <Badge>Programs</Badge>
              <h2 className="mt-4 text-4xl font-bold text-balance">
                Pick your specialization path
              </h2>
            </div>
            <Link href="/courses" className="hidden items-center gap-1 text-sm font-bold text-accent hover:underline md:inline-flex">
              All programs <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((course, i) => (
            <Reveal key={course.id} delay={i * 0.05}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/courses" className="inline-flex items-center gap-1 text-sm font-bold text-accent">
            View all programs <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── LEARNER TRANSFORMATIONS ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="mb-10 text-center">
            <Badge>Success stories</Badge>
            <h2 className="mt-4 text-4xl font-bold">Real people. Real results.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Not testimonials. Actual before/after career journeys from learners who shipped work and got hired.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {learnerJourneys.map((story, i) => (
            <Reveal key={story.name} delay={i * 0.06}>
              <div className="rounded-3xl border border-border bg-surface p-6 hover:-translate-y-1 transition-transform">
                {/* Avatar placeholder */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-black text-white"
                    style={{ background: ["#e36a2f", "#0f7f78", "#8b5cf6"][i % 3] }}
                  >
                    {story.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{story.name}</p>
                    <p className="text-xs text-muted">{story.track}</p>
                  </div>
                </div>
                {/* Before / After */}
                <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl border border-border bg-background p-3">
                    <p className="font-bold uppercase tracking-wider text-muted/60 mb-1">Before</p>
                    <p className="font-semibold text-foreground leading-snug">{story.before}</p>
                  </div>
                  <div className="rounded-xl bg-[#132238] p-3 text-white">
                    <p className="font-bold uppercase tracking-wider text-white/50 mb-1">After</p>
                    <p className="font-semibold leading-snug text-accent-3">{story.after}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-muted">"{story.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── MENTORS ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="mb-10">
            <Badge>Mentors</Badge>
            <h2 className="mt-4 text-4xl font-bold text-balance">
              Learn from practitioners who've been there
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {mentorHighlights.map((mentor, i) => (
            <Reveal key={mentor.name} delay={i * 0.05}>
              <div className="group rounded-3xl border border-border bg-surface p-7 hover:-translate-y-1 transition-transform">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-black text-white"
                    style={{ background: ["#132238", "#e36a2f", "#0f7f78"][i % 3] }}
                  >
                    {mentor.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
                    {mentor.stat}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{mentor.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-2">{mentor.role}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{mentor.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-10 text-center">
            <Badge>Pricing</Badge>
            <h2 className="mt-4 text-4xl font-bold">Simple, transparent pricing</h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div className={`rounded-3xl p-8 ${i === 1
                  ? "bg-[#132238] text-white ring-2 ring-accent/40"
                  : "border border-border bg-surface"
                }`}>
                {i === 1 && (
                  <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}
                <p className={`text-sm font-bold uppercase tracking-[0.18em] ${i === 1 ? "text-white/60" : "text-muted"}`}>
                  {plan.name}
                </p>
                <p className="mt-4 text-5xl font-black">{plan.price}</p>
                <p className={`mt-1 text-sm ${i === 1 ? "text-white/60" : "text-muted"}`}>{plan.cadence}</p>
                <p className={`mt-4 text-sm leading-7 ${i === 1 ? "text-white/75" : "text-muted"}`}>{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className={i === 1 ? "text-accent-3 flex-shrink-0" : "text-accent flex-shrink-0"} />
                      <span className={i === 1 ? "text-white/80" : "text-muted"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${i === 1
                      ? "bg-accent text-white shadow-[0_8px_24px_rgba(227,106,47,0.4)]"
                      : "border-2 border-foreground/15 text-foreground hover:border-accent/40"
                    }`}
                >
                  Get started <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="mb-10 text-center">
            <Badge>Reviews</Badge>
            <h2 className="mt-4 text-4xl font-bold">What learners say</h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-surface p-6 hover:-translate-y-1 transition-transform">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-muted">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-black text-accent">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <div className="mb-10 text-center">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-4xl font-bold">Questions we always get</h2>
          </div>
        </Reveal>
        <div className="space-y-3">
          {academyFaqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.04}>
              <details className="group rounded-2xl border border-border bg-surface px-6 py-4 open:pb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  {faq.question}
                  <span className="text-accent group-open:rotate-45 transition-transform text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#132238] px-8 py-12 text-white md:px-14">
            {/* SVG bg pattern */}
            <svg aria-hidden className="absolute inset-0 h-full w-full opacity-5" style={{ fill: "none", stroke: "white", strokeWidth: 1 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #e36a2f, transparent 70%)" }} />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-3 mb-3">Applications open</p>
                <h2 className="text-3xl font-black text-balance md:text-4xl">
                  Ready to transform your career?<br />May 4 cohort starts soon.
                </h2>
                <p className="mt-4 text-white/65 leading-7 max-w-xl">
                  Join 38,000+ learners who made the leap. Structured paths, mentor reviews,
                  and a community that keeps you moving.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:flex-col">
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-black text-white shadow-[0_8px_30px_rgba(227,106,47,0.50)] hover:-translate-y-0.5 transition-transform">
                  Apply now <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white/80 hover:bg-white/5 transition-colors">
                  Talk to an advisor
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}