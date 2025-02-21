import { Colors } from "@/app/colors";
import { Box, Stack } from "@mui/material";
import { Typography } from "./typography";
import { Section as SectionType } from "../sections";

type SectionProps = {
  sectionProps: SectionType;
  title: string;
  children: JSX.Element;
  subSection?: boolean;
};

export function Section({
  title,
  children,
  subSection = false,
  sectionProps,
}: SectionProps) {
  return (
    <Stack>
      {sectionProps?.title && (
        <Typography variant="h1" color={Colors.primary}>
          {sectionProps.title}
        </Typography>
      )}
      {children}
    </Stack>
  );
}
