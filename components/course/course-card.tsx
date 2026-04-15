import Link from "next/link";
import { ArrowRight, Clock3, Star, Users } from "lucide-react";
import { getCourseCareerSignal } from "@/lib/demo-data";
import { formatCurrency, formatDuration } from "@/lib/utils";
import type { CourseSummary } from "@/types";

type CourseCardProps = {
  course: CourseSummary;
};

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  "Web Development":  { bg: "#132238", text: "white", badge: "rgba(255,255,255,0.15)" },
  "Programming":      { bg: "#0f7f78", text: "white", badge: "rgba(255,255,255,0.15)" },
  "AI Engineering":   { bg: "#e36a2f", text: "white", badge: "rgba(255,255,255,0.15)" },
};

const defaultColor = { bg: "#8b5cf6", text: "white", badge: "rgba(255,255,255,0.15)" };

export function CourseCard({ course }: CourseCardProps) {
  const signal = getCourseCareerSignal(course.slug);
  const color = categoryColors[course.category] ?? defaultColor;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_4px_20px_rgba(26,18,9,0.07)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,18,9,0.12)] transition-all duration-300">
      {/* Colored header */}
      <div
        className="relative px-6 pt-6 pb-5"
        style={{ background: color.bg }}
      >
        {/* SVG wave bottom */}
        <svg
          aria-hidden
          viewBox="0 0 400 24"
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
          style={{ fill: "var(--background)" }}
        >
          <path d="M0 24 Q100 0 200 12 Q300 24 400 8 L400 24Z" />
        </svg>

        {/* Category + level badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]"
            style={{ background: color.badge, color: color.text }}
          >
            {course.category}
          </span>
          <span
            className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]"
            style={{ background: color.badge, color: color.text }}
          >
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-black text-white leading-snug">{course.title}</h3>
        <p className="mt-2 text-sm font-semibold opacity-70 pb-6" style={{ color: color.text }}>
          {signal.targetRole}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 py-5">
        <p className="text-sm leading-7 text-muted">{signal.promise}</p>

        {/* Meta row */}
        <div className="mt-5 flex flex-wrap gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-muted">
            <Clock3 size={13} className="text-accent" />
            {signal.duration} · {signal.weeklyCommitment}
          </span>
          <span className="flex items-center gap-1.5 text-muted">
            <Users size={13} className="text-accent" />
            {course.total_lessons} lessons
          </span>
          <span className="flex items-center gap-1.5 text-muted">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            {course.average_rating ? course.average_rating.toFixed(1) : "New"}
            {course.review_count > 0 && (
              <span className="text-muted/60">({course.review_count})</span>
            )}
          </span>
        </div>

        {/* Tool chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {signal.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold text-muted"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider font-semibold">Price</p>
            <p className="text-xl font-black text-foreground">
              {formatCurrency(course.price_cents / 100)}
            </p>
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black text-white transition-transform hover:scale-105"
            style={{ background: color.bg }}
          >
            Enroll <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
