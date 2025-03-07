import { Box, Stack } from "@mui/material";
import { experiences } from "./experiences";
import { Tool } from "../shared/tools";
import { Experience } from "./experience";
import { languagesAndFrameworks, rampingUp } from "./languagesAndFrameworks";
import { degrees } from "./degrees";
import { Degree } from "./degree";
import { SubSection } from "../shared/subSection";
import { Colors } from "@/app/colors";
import { useMemo } from "react";
import { FloatingExp } from "../shared/floatingExp";

export function About() {
  const reversedExperiences = useMemo(() => [...experiences].reverse(), []);

  return (
    <Stack gap={1}>
      <SubSection title="Degrees">
        <Stack sx={{flexDirection: {
          xs: "column",
          sm: "row"
        }}} gap={5} justifyContent={"space-between"}>
          {degrees.map((degree, index) => (
            <Degree key={index} degree={degree} />
          ))}
        </Stack>
      </SubSection>
      <SubSection title="Experiences">
        {reversedExperiences.map((experience, index) => (
          <Box pb={3} key={index}>
            <Experience experience={experience} />
          </Box>
        ))}
      </SubSection>
      <SubSection title="Languages and frameworks">
        <Stack
          direction={"row"}
          gap={1}
          p={3}
          borderRadius={3}
          justifyContent="space-evenly"
          flexWrap="wrap"
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
          gap={3}
          p={3}
          borderRadius={3}
          justifyContent="center"
          flexWrap="wrap"
        >
          {rampingUp.map((item, index) => (
            <FloatingExp 
              key={index} 
              index={index}
              totalItems={rampingUp.length}
            >
              <Tool
                tool={item}
                iconColor={Colors.accent}
                textProps={{ fontWeight: "bold" }}
              />
            </FloatingExp>
          ))}
        </Stack>
      </SubSection>
    </Stack>
  );
}
