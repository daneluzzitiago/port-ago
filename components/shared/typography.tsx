import { Colors } from "@/app/colors";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type CustomVariant = "body" | "h1" | "h2" | "h3" | "h4" | "p" | "caption";

interface CustomTypographyProps extends Omit<TypographyProps, "variant"> {
  variant?: CustomVariant;
}

const variantStyles: Record<CustomVariant, React.CSSProperties> = {
  body: {
    fontFamily: "Inter, sans-serif",
    lineHeight: 1.5,
    color: Colors.grayLight,
  },
  h1: {
    fontSize: "3rem",
    fontWeight: 700,
    color: Colors.white,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: Colors.purpleLight,
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 500,
    color: Colors.purpleLighter,
  },
  h4: {
    fontSize: "1rem",
    fontWeight: 400,
    color: Colors.accent,
  },
  p: {
    fontSize: "1rem",
    color: Colors.gray,
  },
  caption: {
    fontSize: "0.75rem",
    color: Colors.gray,
  },
};

export function Typography({
  variant = "body",
  sx,
  ...props
}: CustomTypographyProps) {
  return (
    <MuiTypography
      sx={{
        ...variantStyles[variant],
        ...sx,
      }}
      {...props}
    />
  );
}
