import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const divider = cva("border-border shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },
  },
  defaultVariants: { orientation: "horizontal" },
});

type DividerProps = HTMLAttributes<HTMLHRElement> &
  VariantProps<typeof divider>;

export function Divider({
  className,
  orientation,
  ...rest
}: DividerProps) {
  return (
    <hr
      className={clsx(divider({ orientation }), className)}
      role={orientation === "vertical" ? "separator" : undefined}
      aria-orientation={orientation === "vertical" ? "vertical" : undefined}
      {...rest}
    />
  );
}
