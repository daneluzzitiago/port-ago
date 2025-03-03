import { Colors } from "@/app/colors";
import { TypographyProps, Typography } from "@mui/material";

export type CustomVariant =
  | "menuItem"
  | "heroTitle"
  | "heroTitleHighlight"
  | "heroSubtitle"
  | "heroSubtitleHighlight"
  | "heroCta"
  | "sectionTitle"
  | "subsectionTitle"
  | "topic"
  | "topicSubtitle"
  | "body"
  | "bodySecondary"
  | "date"
  | "tag"
  | "buttonPrimary"
  | "buttonSecondary";

export const typographyVariants: Record<CustomVariant, TypographyProps> = {
  menuItem: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: Colors.text,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  heroTitle: {
    fontSize: {
      xs: "2.5rem",
      md: "3.75rem",
    },
    fontWeight: 400,
    color: Colors.white,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },

  heroTitleHighlight: {
    fontSize: {
      xs: "2.5rem",
      md: "3.75rem",
    },
    fontWeight: 700,
    color: Colors.purpleLightest,
    lineHeight: 1.2,
  },

  heroSubtitle: {
    fontSize: {
      xs: "1.25rem",
      md: "1.5rem",
    },
    fontWeight: 400,
    color: Colors.grayLight,
    lineHeight: 1.6,
  },

  heroSubtitleHighlight: {
    fontSize: {
      xs: "1.25rem",
      md: "1.5rem",
    },
    fontWeight: 700,
    color: Colors.accent,
    lineHeight: 1.6,
  },

  heroCta: {
    fontSize: "1.5rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: Colors.white,
  },

  sectionTitle: {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: Colors.white,
  },

  subsectionTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: Colors.purpleLighter,
  },

  topic: {
    fontSize: "1.10rem",
    fontWeight: 600,
    color: Colors.grayLight,
  },

  topicSubtitle: {
    fontSize: "0.9rem",
    fontWeight: 400,
    color: Colors.accent,
  },

  body: {
    fontSize: "1rem",
    fontWeight: 400,
    color: Colors.grayLight,
    lineHeight: 1.6,
  },

  bodySecondary: {
    fontSize: "0.875rem",
    fontWeight: 400,
    color: Colors.gray,
    lineHeight: 1.6,
  },

  date: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: Colors.gray,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  tag: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: Colors.purpleLighter,
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    display: "inline-block",
  },

  buttonPrimary: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: Colors.white,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },

  buttonSecondary: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: Colors.text,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
};

type TypographyV2Props = {
  variant: CustomVariant;
  children: React.ReactNode;
  className?: string;
  sx?: any;
};

export function TypographyV2({
  variant = "body",
  children,
  className,
  sx,
}: TypographyV2Props) {
  return <Typography className={className} {...typographyVariants[variant]} sx={sx}>{children}</Typography>;
}
