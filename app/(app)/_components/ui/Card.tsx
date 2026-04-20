import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const card = cva(
  "flex flex-col rounded-[var(--radius-lg)] border border-border",
  {
    variants: {
      variant: {
        default: "bg-surface",
        elevated: "bg-surface shadow-md",
        interactive:
          "bg-surface transition-[border-color,background-color] duration-[var(--duration-normal)] " +
          "hover:border-border-hover hover:bg-surface-hover",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type CardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof card>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...rest }, ref) => (
    <div ref={ref} className={clsx(card({ variant }), className)} {...rest}>
      {children}
    </div>
  ),
);
Card.displayName = "Card";

/* ── Sub-components ── */

type SlotProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function CardHeader({ className, children, ...rest }: SlotProps) {
  return (
    <div className={clsx("px-6 pt-6 pb-2", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardBody({ className, children, ...rest }: SlotProps) {
  return (
    <div className={clsx("px-6 py-2 flex-1", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...rest }: SlotProps) {
  return (
    <div className={clsx("px-6 pt-2 pb-6", className)} {...rest}>
      {children}
    </div>
  );
}
