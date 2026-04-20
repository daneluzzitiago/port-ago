import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const container = cva("mx-auto w-full px-4 sm:px-8", {
  variants: {
    maxWidth: {
      narrow: "max-w-4xl",
      default: "max-w-7xl",
      wide: "max-w-screen-2xl",
    },
  },
  defaultVariants: { maxWidth: "wide" },
});

type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof container>;

export function Container({
  className,
  maxWidth,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div className={clsx(container({ maxWidth }), className)} {...rest}>
      {children}
    </div>
  );
}
