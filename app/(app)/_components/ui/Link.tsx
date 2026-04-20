import { type AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const link = cva(
  "transition-colors duration-[var(--duration-fast)] inline-flex items-center gap-1",
  {
    variants: {
      variant: {
        default:
          "text-primary-light hover:text-primary-lighter underline underline-offset-2",
        nav: "text-text-muted hover:text-text-strong no-underline text-[0.65rem] sm:text-xs font-bold uppercase tracking-tight sm:tracking-widest",
        "nav-active":
          "text-primary-light no-underline text-[0.65rem] sm:text-xs font-bold uppercase tracking-tight sm:tracking-widest",
        accent:
          "text-accent hover:opacity-80 no-underline text-xs font-bold uppercase tracking-widest",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link>;

export function Link({ className, variant, children, ...rest }: LinkProps) {
  return (
    <a className={clsx(link({ variant }), className)} {...rest}>
      {children}
    </a>
  );
}
