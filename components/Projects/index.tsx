import { Grid2 as Grid, Stack } from "@mui/material";
import { projects } from "./projects";
import { ProjectCard } from "./projectCard";

export function Projects() {
  return (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
