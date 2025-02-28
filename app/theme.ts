import { createTheme } from "@mui/material/styles";
import '@fontsource/inter';
import { Colors } from "./colors";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
    ].join(","),
    allVariants: {
      color: Colors.text,
    },
  },
});
