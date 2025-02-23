import { Stack } from "@mui/material";
import { Section as SectionType } from "../sections";
import { TypographyV2 } from "./typographyV2";

type SectionProps = {
  sectionProps: SectionType;
  index: number;
};

export function Section({
  sectionProps,
  index
}: SectionProps) {
  return (
    <Stack gap={3}>
      {sectionProps?.title && (
        <TypographyV2 variant="sectionTitle">{sectionProps.title}</TypographyV2>
      )}
      <sectionProps.component/>
    </Stack>
  );
}
