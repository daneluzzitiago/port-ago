import { Stack } from "@mui/material";
import { Typography } from "../shared/typography";
import { Experience as ExperienceType } from "./experiences";
import { Tool } from "../shared/tools";
import { Colors } from "@/app/colors";

type ExperienceProps = {
  experience: ExperienceType;
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <Stack gap={1} bgcolor={Colors.backgroundLight} borderRadius={3}>
      <Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {experience.companyName}
          </Typography>
          <Typography variant="caption">{experience.duration}</Typography>
        </Stack>
        <Typography variant="caption" sx={{color: Colors.purpleLight}}>{experience.companyDescription}</Typography>
      </Stack>
      <Typography variant="p">{experience.position}</Typography>
      <Typography variant="body" textAlign={"justify"}>
        {experience.description}
      </Typography>
      <Stack direction={"row"} spacing={1} flexWrap="wrap" gap={1}>
        {experience.tools?.map((tool, index) => (
          <Tool
            key={index}
            tool={tool}
            borderRadius={1}
            iconSize={16}
            inLine
            textProps={{ variant: "body2" }}
            padding={0.5}
            backgroundColor={Colors.purpleDark}
            iconColor={Colors.purpleLightest}
            labelColor={Colors.purpleLightest}
          />
        ))}
      </Stack>
    </Stack>
  );
}
