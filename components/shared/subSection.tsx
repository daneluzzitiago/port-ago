import { Stack } from "@mui/material";
import { Typography } from "./typography";

type SubSectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SubSection({ children, title, subtitle }: SubSectionProps) {
  return (
    <Stack gap={2}>
      <Typography variant="h2">{title}</Typography>
      {subtitle && <Typography variant="h3">{subtitle}</Typography>}
      {children}
    </Stack>
  );
}
