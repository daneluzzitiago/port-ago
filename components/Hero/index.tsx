import { Colors } from "@/app/colors";
import { Box, Stack, Typography as MuiTypography } from "@mui/material";
import { HighlightedTypography } from "../shared/highlightedTypography";
import { Typography } from "../shared/typography";

const StyledTypography = (props: any) => <Typography variant="h3" {...props} />;

export function Hero() {
  return (
    <Box display="flex" pt={12}>
      <Stack justifyContent={"center"} flex={1} gap={4}>
        <Stack>
          <Typography variant="h1">
            Hello, I'm{" "}
            <Box component="span" color={Colors.primary}>
              Tiago L. Daneluzzi
            </Box>
            , but you can call me{" "}
            <Box component="span" color={Colors.primary}>
              Dan
            </Box>
          </Typography>
        </Stack>
        <MuiTypography color={Colors.text}>
          I'm a{" "}
          <Box component="span" color={Colors.accent} sx={{ fontWeight: 600 }}>
            Full Stack Developer
          </Box>
          . Welcome to my website! Here you will find a bit about me and my
          experiences.
        </MuiTypography>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"} flex="1">
        <Box
          component="img"
          src="/developer.svg"
          alt="Cartoon face"
          sx={{
            width: "100%",
            maxWidth: 400,
            height: "auto",
          }}
        />
      </Stack>
    </Box>
  );
}
