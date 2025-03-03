import { Stack, Box } from "@mui/material";
import { TypographyV2 } from "./typographyV2";
import { Colors } from "@/app/colors";

type SubSectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SubSection({ children, title, subtitle }: SubSectionProps) {
  return (
    <Stack gap={2} bgcolor={Colors.backgroundLight} p={2} borderRadius={1}>
      <Stack>
        <TypographyV2 variant="subsectionTitle">{title}</TypographyV2>
      </Stack>
      {subtitle && <TypographyV2 variant="subsectionTitle">{subtitle}</TypographyV2>}
      {children}
    </Stack>
  );
}
