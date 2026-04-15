import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground outline-none",
      "placeholder:text-muted/50",
      "focus:border-accent/50 focus:ring-2 focus:ring-accent/15",
      "transition-all",
      className,
    )}
    {...props}
  />
));

Input.displayName = "Input";
