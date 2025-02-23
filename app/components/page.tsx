"use client";

import { Colors } from "@/app/colors";
import { Box, Stack } from "@mui/material";
import { TypographyV2 } from "@/components/shared/typographyV2";

export default function ComponentLibrary() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: Colors.background,
        p: 4,
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={3}>
        <TypographyV2 variant="heroTitle">Hero Title</TypographyV2>
        <TypographyV2 variant="heroTitleHighlight">
          Hero Title Highlight
        </TypographyV2>
        <TypographyV2 variant="heroSubtitle">Hero Subtitle</TypographyV2>
        <TypographyV2 variant="heroSubtitleHighlight">
          Hero Subtitle Highlight
        </TypographyV2>
        <TypographyV2 variant="heroCta">Hero CTA</TypographyV2>
        <TypographyV2 variant="sectionTitle">Section Title</TypographyV2>
        <TypographyV2 variant="sectionSubtitle">Section Subtitle</TypographyV2>
        <TypographyV2 variant="topic">Topic</TypographyV2>
        <TypographyV2 variant="subtopic">Subtopic</TypographyV2>
        <TypographyV2 variant="body">Body Text</TypographyV2>
        <TypographyV2 variant="bodySecondary">Body Secondary</TypographyV2>
        <TypographyV2 variant="date">Date</TypographyV2>
        <TypographyV2 variant="tag">Tag</TypographyV2>
        <TypographyV2 variant="buttonPrimary">Button Primary</TypographyV2>
        <TypographyV2 variant="buttonSecondary">Button Secondary</TypographyV2>
        <TypographyV2 variant="menuItem">Menu Item</TypographyV2>
      </Stack>
    </Box>
  );
}
