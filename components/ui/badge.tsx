import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted dark:bg-white/8",
        className,
      )}
      {...props}
    />
  );
}
