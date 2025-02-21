"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  SvgIconProps,
  Stack,
} from "@mui/material";
import { ComponentType, useEffect, useState } from "react";
import { Colors } from "@/app/colors";
import { Section } from "./sections";
import { Typography } from "./shared/typography";

type MenuProps = {
  sections: Section[];
  handleScroll: (section: string) => void;
};

type StyledMenuButtonProps = {
  handleScroll: () => void;
  isScrolled: boolean;
  label: string;
  Icon: ComponentType<SvgIconProps>;
};

const StyledMenuButton = ({
  handleScroll,
  label,
  Icon,
}: StyledMenuButtonProps) => (
  <Button sx={{ textTransform: "none" }} onClick={handleScroll}>
    <Icon sx={{ color: "#A78BFA", fontSize: "1.5rem" }} />
    <Typography variant="h3" color={Colors.text}>
      {label}
    </Typography>
  </Button>
);

export function Menu({ sections, handleScroll }: MenuProps) {
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
        bgcolor: isScrolled ? "rgba(0,0,0,0)" : Colors.background,
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display={"flex"} gap={2}>
          <Typography variant="h2" fontWeight="bold" color={Colors.primary}>
            {"port_ago"}
          </Typography>
          <Typography
            className="cursor"
            variant="h2"
            fontWeight={"bold"}
            color={Colors.primary}
          >
            {">"}
          </Typography>
        </Box>
        <Stack direction="row" gap={2}>
          {sections.map((element: Section) => (
            <StyledMenuButton
              key={element.name}
              handleScroll={() => handleScroll(element.name)}
              isScrolled={isScrolled}
              label={element.buttonLabel}
              Icon={element.icon}
            />
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
