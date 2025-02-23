"use client";

import { Box, Stack } from "@mui/material";
import "./global.css";
import { Menu } from "@/components/menu";
import { Sections } from "@/components/sections";
import { Colors } from "./colors";
import { Section } from "@/components/shared/section";

export default function Home() {
  return (
    <Stack spacing={0} bgcolor={Colors.background}>
      <Menu sections={Sections} />
      {Sections.map((section, index) => (
        <Box
          key={section.name}
          minHeight="95vh"
          id={section.name}
          px={20}
          py={10}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Section sectionProps={section} index={index} />
        </Box>
      ))}
    </Stack>
  );
}
