"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
    "disabled:opacity-50 disabled:pointer-events-none " +
    "active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        secondary: "bg-secondary text-white hover:bg-secondary-hover",
        ghost: "bg-transparent text-text hover:text-white hover:bg-surface",
        outline:
          "bg-transparent text-primary-light border border-primary-light/30 " +
          "hover:bg-primary-light/10 hover:text-primary-lighter",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-[var(--radius-md)]",
        md: "h-10 px-5 text-sm rounded-[var(--radius-md)]",
        lg: "h-12 px-7 text-base rounded-[var(--radius-lg)]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      loading = false,
      disabled,
      children,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={clsx(button({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      {children}
      {rightIcon}
    </button>
  ),
);
Button.displayName = "Button";
