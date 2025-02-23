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
  | "sectionSubtitle"
  | "topic"
  | "subtopic"
  | "body"
  | "bodySecondary"
  | "date"
  | "tag"
  | "buttonPrimary"
  | "buttonSecondary";

export const typographyVariants: Record<CustomVariant, TypographyProps> = {
  menuItem: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: Colors.text,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    sx: {
      "&:hover": {
        color: Colors.purpleLight,
      },
    },
  },

  heroTitle: {
    fontSize: {
      xs: "2.5rem",
      md: "3.75rem",
    },
    fontWeight: 700,
    color: Colors.white,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },

  heroTitleHighlight: {
    fontSize: "inherit",
    fontWeight: 700,
    color: Colors.purpleLight,
    position: "relative",
    sx: {
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-4px",
        left: 0,
        width: "100%",
        height: "2px",
        background: Colors.purpleLight,
        opacity: 0.3,
      },
    },
  },

  heroSubtitle: {
    fontSize: {
      xs: "1.25rem",
      md: "1.5rem",
    },
    fontWeight: 400,
    color: Colors.gray,
    lineHeight: 1.6,
  },

  heroSubtitleHighlight: {
    fontSize: "inherit",
    fontWeight: 500,
    color: Colors.accent,
    fontStyle: "italic",
  },

  heroCta: {
    fontSize: "1rem",
    fontWeight: 600,
    color: Colors.white,
    textTransform: "none",
    letterSpacing: "0.02em",
  },

  sectionTitle: {
    fontSize: {
      xs: "2rem",
      md: "2.5rem",
    },
    fontWeight: 700,
    color: Colors.white,
    marginBottom: "1rem",
    position: "relative",
    sx: {
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: 0,
        width: "60px",
        height: "4px",
        background: Colors.primary,
        borderRadius: "2px",
      },
    },
  },

  sectionSubtitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: Colors.purpleLightest,
    marginBottom: "1.5rem",
  },

  topic: {
    fontSize: "1.25rem",
    fontWeight: 500,
    color: Colors.purpleLighter,
    marginBottom: "0.5rem",
  },

  subtopic: {
    fontSize: "1.125rem",
    fontWeight: 400,
    color: Colors.text,
    marginBottom: "0.25rem",
  },

  body: {
    fontSize: "1rem",
    fontWeight: 400,
    color: Colors.text,
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
    fontWeight: 600,
    color: Colors.white,
    textTransform: "none",
    letterSpacing: "0.02em",
  },

  buttonSecondary: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: Colors.text,
    textTransform: "none",
    letterSpacing: "0.02em",
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
