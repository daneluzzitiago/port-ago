import { Box, Stack } from "@mui/material";
import { TypographyV2 } from "../shared/typographyV2";
import { Experience as ExperienceType } from "./experiences";
import { Tool } from "../shared/tools";
import { Colors } from "@/app/colors";

type ExperienceProps = {
  experience: ExperienceType;
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <Stack gap={1}>
      <Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            component="img"
            src={experience.iconPath}
            alt={experience.companyName}
            width={45}
            height={45}
            borderRadius={1}
          />
          <Stack pr={{xs: 0, md: 2}}>
            <TypographyV2 variant="topic">
              {experience.companyName}
            </TypographyV2>
            <TypographyV2 variant="topicSubtitle">
              {experience.companyDescription}
            </TypographyV2>
          </Stack>
          <TypographyV2 variant="date">{experience.duration}</TypographyV2>
        </Stack>
      </Stack>
      <TypographyV2 variant="bodySecondary">{experience.position}</TypographyV2>
      <TypographyV2 variant="body">
        {experience.description}
      </TypographyV2>
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
            iconColor={Colors.white}
            labelColor={Colors.white}
          />
        ))}
      </Stack>
    </Stack>
  );
}
