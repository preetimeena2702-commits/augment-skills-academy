import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-accent",
        className,
      )}
      {...props}
    />
  );
}
