import { Face6, Web, Home } from "@mui/icons-material";
import { Hero } from "./Hero";
import { ComponentType } from "react";
import { SvgIconProps } from "@mui/material";
import { About } from "./About";
import { Projects } from "./Projects";

export type Section = {
  name: string;
  title?: string;
  buttonLabel: string;
  icon: ComponentType<SvgIconProps>;
  component: ComponentType;
  nextSectionButtonLabel?: string;
};

export const Sections: Section[] = [
  {
    name: "hero",
    buttonLabel: "Home",
    icon: Home,
    component: Hero,
  },
  {
    name: "about",
    title: "About me",
    buttonLabel: "About",
    icon: Face6,
    component: About,
  },
  {
    name: "projects",
    title: "Personal projects",
    buttonLabel: "Projects",
    icon: Web,
    component: Projects,
  },
  // {
  //   name: "beyond-tech",
  //   title: "Personal interests",
  //   buttonLabel: "Beyond tech",
  //   icon: Park,
  //   component: BeyondTech,
  // },
  // {
  //   name: "resume",
  //   title: "My resume",
  //   buttonLabel: "Resume",
  //   icon: Article,
  //   component: Resume,
  // },
];
