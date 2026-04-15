import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "w-full rounded-[20px] border border-border bg-surface px-4 py-3.5 text-sm text-foreground outline-none",
      "focus:border-accent/40 focus:bg-surface-strong focus:ring-2 focus:ring-accent/20",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
      className,
    )}
    {...props}
  />
));

Select.displayName = "Select";
