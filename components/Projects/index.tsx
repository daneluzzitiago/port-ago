import { Box, ButtonBase, Stack } from "@mui/material";
import { Typography } from "@/components/shared/typography";
import { projects } from "./projects";
import { Tool } from "../shared/tools";
import { FaGithub } from "react-icons/fa";
import { Colors } from "@/app/colors";

export function Projects() {
  type tagType = "active" | "wip";
  const tag = (type: tagType) => {
    const bgcolor = type === "active" ? Colors.purpleDark : Colors.yellowDark;
    const text = type === "active" ? "Active" : "WIP";
    const textcolor = type === "active" ? Colors.purpleLightest : Colors.yellow;
    return (
      <Box
        bgcolor={bgcolor}
        height="fit-content"
        width="fit-content"
        px={1} // padding horizontal
        py={0.5} // padding vertical
        borderRadius={100}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Typography variant="caption" sx={{ color: textcolor }}>
          {text}
        </Typography>
      </Box>
    );
  };
  return (
    <Stack gap={4}>
      {projects.map((project, index) => (
        <Stack
          key={index}
          gap={1}
          bgcolor={Colors.backgroundLight}
          p={3}
          borderRadius={3}
        >
          <Stack direction={"row"} gap={3} justifyContent="space-between">
            <Box display="flex" alignItems={"center"} gap={1}>
              <Typography variant="h2">{project.title}</Typography>
              {tag(project.isWorkInProgress ? "wip" : "active")}
            </Box>
            <ButtonBase
              sx={{
                padding: 1,
                gap: 1,
                width: "fit-content",
              }}
              onClick={() => window.open(project.url)}
            >
              <Typography sx={{ color: Colors.gray }}>github</Typography>
              <FaGithub color={Colors.gray} size={16} />
            </ButtonBase>
          </Stack>

          <Typography variant="body">{project.description}</Typography>
          <Box display={"flex"} gap={1} flexWrap="wrap">
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
        </Stack>
      ))}
    </Stack>
  );
}
