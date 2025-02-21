import { Box, Stack, Typography } from "@mui/material";
import { Section } from "../shared/section";
import { Colors } from "@/app/colors";

export function BeyondTech() {
  return (
    <Stack>
      <Box display="flex" justifyContent="space-between">
        <Section title="Voluntário em ONG de Animais" subSection>
          <Box width="500px" height="300px" border={1} />
        </Section>
        <Section title="Professor de Handebol" subSection>
          <Box width="500px" height="300px" border={1} />
        </Section>
      </Box>
    </Stack>
  );
}
