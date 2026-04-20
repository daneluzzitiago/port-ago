import { type HTMLAttributes, type ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const text = cva("leading-relaxed text-justify", {
  variants: {
    variant: {
      body: "text-text",
      muted: "text-text-muted",
      strong: "text-text-strong",
      caption: "text-text-muted text-xs uppercase tracking-widest font-bold",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl md:text-2xl",
    },
  },
  defaultVariants: { variant: "body", size: "base" },
});

type TextProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof text> & {
    as?: ElementType;
  };

export function Text({
  className,
  variant,
  size,
  as: Tag = "p",
  children,
  ...rest
}: TextProps) {
  return (
    <Tag className={clsx(text({ variant, size }), className)} {...rest}>
      {children}
    </Tag>
  );
}
