import { type HTMLAttributes, type ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const heading = cva("font-bold tracking-tight", {
  variants: {
    size: {
      "6xl": "text-5xl md:text-6xl leading-[1.1]",
      "5xl": "text-4xl md:text-5xl leading-[1.1]",
      "4xl": "text-3xl md:text-4xl leading-[1.15]",
      "3xl": "text-2xl md:text-3xl leading-[1.2]",
      "2xl": "text-xl md:text-2xl leading-[1.25]",
      xl: "text-lg md:text-xl leading-[1.3]",
    },
    tone: {
      white: "text-white",
      strong: "text-text-strong",
      primary: "text-primary-lightest",
    },
  },
  defaultVariants: { size: "4xl", tone: "white" },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof heading> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };

export function Heading({
  className,
  level = 2,
  size,
  tone,
  children,
  ...rest
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;
  return (
    <Tag className={clsx(heading({ size, tone }), className)} {...rest}>
      {children}
    </Tag>
  );
}
