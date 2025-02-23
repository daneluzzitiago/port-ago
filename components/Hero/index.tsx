import { Colors } from "@/app/colors";
import { Box, Stack, ButtonBase } from "@mui/material";
import { TypographyV2 } from "../shared/typographyV2";
import { handleScroll } from "@/utils/scroll";

export function Hero() {
  return (
    <Stack>
      <Box display="flex" pt={12}>
        <Stack justifyContent={"center"} flex={1} gap={4}>
          <Stack>
            <TypographyV2 variant="heroTitle">
              Hello, I'm{" "}
              <Box component="span" color={Colors.primary}>
                Tiago L. Daneluzzi
              </Box>
              , but you can call me{" "}
              <Box component="span" color={Colors.primary}>
                Dan
              </Box>
            </TypographyV2>
          </Stack>
          <Stack>
            <TypographyV2 variant="heroSubtitle">
              I'm a{" "}
              <Box
                component="span"
                color={Colors.accent}
                sx={{ fontWeight: 600 }}
              >
                Full Stack Developer
              </Box>
            </TypographyV2>
            <TypographyV2 variant="heroSubtitle">
              Welcome to my website! Here you will find a bit about me and my
              experiences
            </TypographyV2>
          </Stack>
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
      <Box display={"flex"} pt={20}>
        <ButtonBase
          sx={{
            borderColor: Colors.white,
            borderRadius: 1,
            borderStyle: "solid",
            borderWidth: 1,
            padding: 3,
            "&:hover": {
              backgroundColor: Colors.primary,
              borderColor: Colors.primary,
            },
          }}
          onClick={() => handleScroll("about")}
        >
          <TypographyV2 variant="heroCta">More about me</TypographyV2>
        </ButtonBase>
      </Box>
    </Stack>
  );
}
