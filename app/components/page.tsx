"use client";

import { Colors } from "@/app/colors";
import { Box, Stack } from "@mui/material";
import { TypographyV2 } from "@/components/shared/typographyV2";
import { Button } from "@/components/shared/button";

export default function ComponentLibrary() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        boxSizing: "border-box",
        backgroundColor: Colors.background,
      }}
    >
      <Stack spacing={3} p={3} bgcolor={Colors.background}>
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
        <TypographyV2 variant="subsectionTitle">Subsection Subtitle</TypographyV2>
      </Stack>
      <Stack spacing={3} bgcolor={Colors.backgroundLight} p={3} pb={8}>
        <TypographyV2 variant="topic">Topic</TypographyV2>
        <TypographyV2 variant="topicSubtitle">Topic Subtitle</TypographyV2>
        <TypographyV2 variant="body">Body Text</TypographyV2>
        <TypographyV2 variant="bodySecondary">Body Secondary</TypographyV2>
        <TypographyV2 variant="date">Date</TypographyV2>
        <TypographyV2 variant="tag">Tag</TypographyV2>
        <TypographyV2 variant="buttonPrimary">Button Primary</TypographyV2>
        <TypographyV2 variant="buttonSecondary">Button Secondary</TypographyV2>
        <TypographyV2 variant="menuItem">Menu Item</TypographyV2>
        <Stack spacing={2}>
          <TypographyV2 variant="sectionTitle">Buttons</TypographyV2>
          <Stack direction="row" spacing={2}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
