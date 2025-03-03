import { Box, Grid2 as Grid, Stack } from "@mui/material";
import { TypographyV2, typographyVariants } from "../shared/typographyV2";
import { handleScroll } from "@/utils/scroll";
import { Button } from "../shared/button";

export function Hero() {
  return (
    <Stack pt={10}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack justifyContent={"center"} flex={1} gap={4}>
            <TypographyV2 variant="heroTitle">
              {"Hello, I'm"}{" "}
              <Box component="span" sx={typographyVariants.heroTitleHighlight}>
                Tiago L. Daneluzzi
              </Box>
              , but you can call me{" "}
              <Box component="span" sx={typographyVariants.heroTitleHighlight}>
                Dan
              </Box>
            </TypographyV2>
            <Stack>
              <TypographyV2 variant="heroSubtitle">
                {"I'm a"}{" "}
                <Box
                  component="span"
                  sx={typographyVariants.heroSubtitleHighlight}
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
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            pt={{xs: 6, md: 0}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
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
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
      <Box display={{ xs: "none", md: "flex" }} pt={20}>
        <Button onClick={() => handleScroll("about")}>
          <Box p={2}>
            <TypographyV2 variant="heroCta">More about me</TypographyV2>
          </Box>
        </Button>
      </Box>
    </Stack>
  );
}
