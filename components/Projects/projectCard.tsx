import { Box, Card, Stack } from "@mui/material";
import { Project } from "./projects";
import { TypographyV2 } from "../shared/typographyV2";
import { Tool } from "../shared/tools";
import { Colors } from "@/app/colors";
import { FaGithub } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { Button } from "../shared/button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectPreviewCardProps = {
    width: "100%",
    height: 169,
    borderRadius: 1,
  };

  return (
    <Card
      sx={{
        backgroundColor: `${Colors.backgroundLight}70`,
        padding: 2,
        boxShadow: `1px 1px 10px ${Colors.purpleLighter}40`,
        borderRadius: 1,
        transition: "all 0.3s ease-in-out",
        transform: "translateY(0)",
        "&:hover": {
          boxShadow: `5px 5px 10px ${Colors.purpleLighter}60`,
          transform: "translateY(-8px) scale(1.02)",
        },
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
              objectFit: "cover",
              objectPosition: "center",
              ...projectPreviewCardProps,
            }}
          />
        ) : (
          <Box
            sx={{
              bgcolor: Colors.purpleDark,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...projectPreviewCardProps,
            }}
          >
            <TypographyV2 variant="topic">
              {project.title[0].toUpperCase()}
            </TypographyV2>
          </Box>
        )}
        <Stack gap={1}>
          <TypographyV2 variant="topic">{project.title}</TypographyV2>
          <TypographyV2 variant="body">{project.description}</TypographyV2>
          <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
            {project.tools.map((tool, index) => (
              <Tool
                key={index}
                tool={tool}
                textProps={{ variant: "caption" }}
                iconColor={Colors.accent}
                iconSize={16}
              />
            ))}
          </Box>
          <Stack direction="row" gap={1} justifyContent="center" pt={2}>
            {project.projectUrl && (
              <Button variant="tertiary" onClick={() => window.open(project.projectUrl)}>
                <FaCirclePlay color={Colors.purpleLightest} />
                <Box p="4px" />
                <TypographyV2
                  variant="buttonPrimary"
                  sx={{ color: Colors.purpleLightest }}
                >
                  Demo
                </TypographyV2>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="tertiary" 
                onClick={() => window.open(project.githubUrl)}
              >
                <FaGithub color={Colors.white} />
                <Box p="4px" />
                <TypographyV2 variant="buttonPrimary">Github</TypographyV2>
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
