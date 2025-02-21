import { Box, Stack } from "@mui/material";
import { experiences } from "./experiences";
import { Tool } from "../shared/tools";
import { Typography } from "@/components/shared/typography";
import { Experience } from "./experience";
import { languagesAndFrameworks, rampingUp } from "./languagesAndFrameworks";
import { degrees } from "./degrees";
import { Degree } from "./degree";
import { SubSection } from "../shared/subSection";
import { Colors } from "@/app/colors";

export function About() {
  return (
    <Stack gap={2}>
      <SubSection title="Degrees">
        <Stack direction="row" gap={1} justifyContent={"space-between"}>
          {degrees.map((degree, index) => (
            <Degree key={index} degree={degree} />
          ))}
        </Stack>
        <Typography variant="h2">Experiences</Typography>
        {experiences.map((experience, index) => (
          <Box py={2} key={index}>
            <Experience experience={experience} />
          </Box>
        ))}
        <Typography variant="h2">Languages and frameworks</Typography>
        <Stack
          direction={"row"}
          gap={1}
          bgcolor={Colors.backgroundLight}
          p={3}
          borderRadius={3}
          justifyContent="space-evenly"
        >
          {languagesAndFrameworks.map((item, index) => (
            <Tool tool={item} key={index} iconColor={Colors.purpleLightest} />
          ))}
        </Stack>
        <Typography variant="h2">Ramping up</Typography>
        <Stack
          direction={"row"}
          gap={1}
          bgcolor={Colors.backgroundLight}
          p={3}
          borderRadius={3}
          justifyContent="space-evenly"
        >
          {rampingUp.map((item, index) => (
            <Tool key={index} tool={item} iconColor={Colors.purpleLightest} />
          ))}
        </Stack>
      </SubSection>
    </Stack>
  );
}
