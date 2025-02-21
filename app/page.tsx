"use client";

import { Box, ButtonBase, Stack } from "@mui/material";
import "./global.css";
import { Menu } from "@/components/menu";
import { Sections } from "@/components/sections";
import { Colors } from "./colors";
import { Typography } from "@/components/shared/typography";
import { Section } from "@/components/shared/section";

export default function Home() {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Stack spacing={0} bgcolor={Colors.background}>
      <Menu handleScroll={handleScroll} sections={Sections} />
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
          <Section sectionProps={section} />
          <section.component />
          {section.nextSectionButtonLabel && (
            <Box display={"flex"} pt={20}>
              <ButtonBase
                sx={{
                  borderColor: "#A78BFA",
                  borderRadius: 3,
                  borderStyle: "solid",
                  borderWidth: 1,
                  padding: 3,
                }}
                onClick={() => handleScroll(Sections[index + 1].name)}
              >
                <Typography variant="h2">
                  {section.nextSectionButtonLabel}
                </Typography>
              </ButtonBase>
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
}
