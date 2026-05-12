import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const badge = cva(
  "inline-flex items-center font-mono font-medium tracking-wide select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "text-primary bg-primary/10 border border-primary/35 shadow-[0_0_18px_rgba(247,201,72,0.1)]",
        secondary:
          "text-secondary bg-secondary/10 border border-secondary/40",
        accent:
          "text-accent bg-accent/10 border border-accent/45",
        outline:
          "text-text-strong bg-surface/70 border border-border-hover",
      },
      size: {
        sm: "text-xs px-2 py-0.5 rounded-[var(--radius-sm)]",
        md: "text-xs px-3 py-1 rounded-[var(--radius-full)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badge> & {
    label: string;
  };

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, label, ...rest }, ref) => (
    <span ref={ref} className={clsx(badge({ variant, size }), className)} {...rest}>
      {label}
    </span>
  ),
);
Badge.displayName = "Badge";
