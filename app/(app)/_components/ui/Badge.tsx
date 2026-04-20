import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const badge = cva(
  "inline-flex items-center font-medium select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "text-primary-light bg-primary-light/10 border border-primary-light/30",
        secondary:
          "text-secondary-light bg-secondary-light/10 border border-secondary-light/30",
        accent:
          "text-accent bg-accent/10 border border-accent/30",
        outline:
          "text-text-strong bg-transparent border border-border-hover",
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
