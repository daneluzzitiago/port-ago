"use client";

import { AppBar, Toolbar, Box, Stack, IconButton, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Colors } from "@/app/colors";
import { Section } from "./sections";
import { TypographyV2 } from "./shared/typographyV2";
import { Button } from "./shared/button";
import { handleScroll } from "@/utils/scroll";

type MenuProps = {
  sections: Section[];
};
export function Menu({ sections }: MenuProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = (
    <>
      {sections.map((element: Section) => (
        <Button
          variant="tertiary"
          key={element.name}
          onClick={() => handleScroll(element.name)}
        >
          {/* <element.icon /> */}
          <TypographyV2 variant="menuItem">{element.buttonLabel}</TypographyV2>
        </Button>
      ))}
    </>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        padding: 0,
        margin: 0,
        bgcolor: isScrolled ? `${Colors.purpleDark}90` : "rgba(0,0,0,0)",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <TypographyV2 variant="subsectionTitle" sx={{ margin: 0 }}>
            {"port_ago"}
          </TypographyV2>
          <TypographyV2
            className="cursor"
            variant="subsectionTitle"
            sx={{ margin: 0 }}
          >
            {">"}
          </TypographyV2>
        </Box>
        <Stack
          direction="row"
          gap={3}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {menuItems}
        </Stack>
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            color: Colors.white,
          }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{
            sx: {
              width: 240,
              bgcolor: Colors.backgroundLight,
            },
          }}
        >
          <Stack direction="column" gap={2} p={2}>
            {menuItems}
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
