import { Stack } from "@mui/material";
import { Degree as DegreeType } from "./degrees";
import { TypographyV2 } from "../shared/typographyV2";

type DegreeProps = {
  degree: DegreeType;
};

export function Degree({ degree }: DegreeProps) {
  return (
    <Stack flex={1}>
      <Stack pb={2}>
        <TypographyV2 variant="topic"> {degree.course}</TypographyV2>
        <TypographyV2 variant="topicSubtitle" >
          {degree.institution}
        </TypographyV2>
      </Stack>
      <TypographyV2 variant="body" sx={{ textAlign: "left" }}>
        {degree.description}
      </TypographyV2>
    </Stack>
  );
}
