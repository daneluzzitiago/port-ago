import { Stack } from "@mui/material";
import { Typography } from "../shared/typography";
import { Degree as DegreeType } from "./degrees";
import { Colors } from "@/app/colors";

type DegreeProps = {
  degree: DegreeType;
};

export function Degree({ degree }: DegreeProps) {
  return (
    <Stack width={"40%"} bgcolor={Colors.backgroundLight} p={3} borderRadius={3}>
      <Stack pb={2}>
        <Typography variant="h3" sx={{color: Colors.purpleLightest}}>
          {degree.course}
        </Typography>
        <Typography variant="caption" sx={{color: Colors.purpleLight}}>{degree.institution}</Typography>
      </Stack>
      <Typography variant="body" textAlign={"left"}>{degree.description}</Typography>
    </Stack>
  );
}
