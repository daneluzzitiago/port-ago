"use client";

import { Box, Stack } from "@mui/material";
import "./global.css";
import { Menu } from "@/components/menu";
import { Sections } from "@/components/sections";
import { Section } from "@/components/shared/section";
import { Colors } from "./colors";

export default function Home() {
  return (
    <Stack spacing={0} bgcolor={Colors.background}>
      <Menu sections={Sections} />
      {Sections.map((section) => (
        <Box
          key={section.name}
          minHeight="95vh"
          id={section.name}
          px={{ xs: 2, sm: 4, md: 8, lg: 16 }}
          py={{ xs: 1, sm: 10 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Section sectionProps={section}/>
        </Box>
      ))}
    </Stack>
  );
}
