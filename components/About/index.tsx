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
    <Stack gap={1}>
      <SubSection title="Degrees">
        <Stack direction="row" gap={1} justifyContent={"space-between"}>
          {degrees.map((degree, index) => (
            <Degree key={index} degree={degree} />
          ))}
        </Stack>
      </SubSection>
      <SubSection title="Experiences">
        {experiences.map((experience, index) => (
          <Box pb={3} key={index}>
            <Experience experience={experience} />
          </Box>
        ))}
      </SubSection>
      <SubSection title="Languages and frameworks">
        <Stack
          direction={"row"}
          gap={1}
          bgcolor={Colors.backgroundLight}
          p={3}
          borderRadius={3}
          justifyContent="space-evenly"
        >
          {languagesAndFrameworks.map((item, index) => (
            <Tool
              tool={item}
              key={index}
              iconColor={Colors.accent}
              textProps={{ fontWeight: "bold" }}
            />
          ))}
        </Stack>
      </SubSection>
      <SubSection title="Ramping up">
        <Stack
          direction={"row"}
          gap={1}
          bgcolor={Colors.backgroundLight}
          p={3}
          borderRadius={3}
          justifyContent="space-evenly"
        >
          {rampingUp.map((item, index) => (
            <Tool
              tool={item}
              key={index}
              iconColor={Colors.accent}
              textProps={{ fontWeight: "bold" }}
            />
          ))}
        </Stack>
      </SubSection>
    </Stack>
  );
}
