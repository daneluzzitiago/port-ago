import { createTheme } from "@mui/material/styles";
import '@fontsource/inter';
import { Colors } from "./colors";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
    ].join(","),
    // This ensures consistent color across all variants
    allVariants: {
      color: Colors.text,
    },
  },
});
