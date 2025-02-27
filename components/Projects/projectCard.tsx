import { Box, ButtonBase, Card, Stack } from "@mui/material";
import { Project } from "./projects";
import { Typography } from "../shared/typography";
import { Tool } from "../shared/tools";
import { Colors } from "@/app/colors";
import { FaGithub } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

type ProjectCardProps = {
  project: Project;
};

type ButtonKind = "github" | "project";

const Button = (kind: ButtonKind, url: string) => (
  <ButtonBase
    sx={{
      padding: 1,
      gap: 1,
      width: "fit-content",
      bgcolor: kind === "github" ? Colors.gray : Colors.primary,
    }}
    onClick={() => window.open(url)}
  >
    <Typography
      sx={{ color: kind === "project" ? Colors.white : Colors.background }}
    >
      {kind === "project" ? "demo" : "github"}
    </Typography>
    {kind === "project" ? (
      <FaCirclePlay color={Colors.white} size={16} />
    ) : (
      <FaGithub color={Colors.background} size={16} />
    )}
  </ButtonBase>
);

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: Colors.backgroundLight,
        maxWidth: 370,
        padding: 2,
      }}
    >
      <Stack
        alignItems={"center"}
        gap={2}
        p={2}
        height="100%"
        justifyContent="space-between"
      >
        {project.imgPath ? (
          <Box
            component="img"
            src={project.imgPath}
            alt={`${project.title} preview`}
            sx={{
              width: "100%",
              maxWidth: 300,
              height: "auto",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              maxWidth: 300,
              height: 169, // 16:9 aspect ratio
              bgcolor: Colors.purpleDark,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 1,
            }}
          >
            <Typography variant="h3" color={Colors.purpleLightest}>
              {project.title[0].toUpperCase()}
            </Typography>
          </Box>
        )}
        <Stack gap={1}>
          <Typography variant="h2">{project.title}</Typography>
          <Typography variant="body">{project.description}</Typography>
          <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
            {project.tools.map((tool, index) => (
              <Tool
                key={index}
                tool={tool}
                textProps={{ variant: "caption" }}
                iconColor={Colors.purpleLightest}
                iconSize={16}
              />
            ))}
          </Box>
          <Stack direction="row" gap={1}>
            {project.projectUrl && Button("project", project.projectUrl)}
            {project.githubUrl && Button("github", project.githubUrl)}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
