import { Box, ButtonBase, Stack } from "@mui/material";
import { Typography } from "@/components/shared/typography";
import { projects } from "./projects";
import { Tool } from "../shared/tools";
import { FaGithub } from "react-icons/fa";
import { Colors } from "@/app/colors";
import { ProjectCard } from "./projectCard";

export function Projects() {
  return (
    <Stack direction="row" gap={4} flexWrap="wrap">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index}/>
      ))}
    </Stack>
  );
}
