"use client";

import { AppBar, Toolbar, Box, Button, SvgIconProps, Stack } from "@mui/material";
import { ComponentType, useEffect, useState } from "react";
import { Colors } from "@/app/colors";
import { Section } from "./sections";
import { TypographyV2 } from "./shared/typographyV2";
import { handleScroll } from "@/utils/scroll";

type MenuProps = {
  sections: Section[];
};

type StyledMenuButtonProps = {
  label: string;
  Icon: ComponentType<SvgIconProps>;
  sectionName: string;
};

const StyledMenuButton = ({
  label,
  Icon,
  sectionName
}: StyledMenuButtonProps) => (
  <Button
    sx={{
      fontSize: "0.875rem",
      fontWeight: 500,
      color: Colors.text,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      display: "flex",
      gap: 1,
      alignItems: "center",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        color: Colors.purpleLight,
        "& .MuiSvgIcon-root": {
          color: Colors.purpleLight,
        },
        "& .MuiTypography-root": {
          color: Colors.purpleLight,
        },
      },
    }}
    onClick={() => handleScroll(sectionName)}
  >
    <Icon
      sx={{
        fontSize: "1.5rem",
        color: Colors.white,
      }}
    />
    <TypographyV2 variant="heroCta">{label}</TypographyV2>
  </Button>
);

export function Menu({ sections }: MenuProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Box 
          display="flex" 
          alignItems="center"
          gap={2}
        >
          <TypographyV2 
            variant="sectionSubtitle" 
            sx={{ margin: 0 }}
          >
            {"port_ago"}
          </TypographyV2>
          <TypographyV2 
            className="cursor" 
            variant="sectionSubtitle"
            sx={{ margin: 0 }}
          >
            {">"}
          </TypographyV2>
        </Box>
        <Stack direction="row" gap={3}>
          {sections.map((element: Section) => (
            <StyledMenuButton
              key={element.name}
              sectionName={element.name}
              label={element.buttonLabel}
              Icon={element.icon}
            />
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
