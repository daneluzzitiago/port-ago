import { Box } from "@mui/material";

type HighlightedTypographyProps = {
  text: string;
  props: any;
  prevWhitespace?: boolean;
  postWhitespace?: boolean;
};

export const HighlightedTypography = ({
  text,
  props,
  prevWhitespace,
  postWhitespace,
}: HighlightedTypographyProps) => {
  return (
    <Box component={"span"} {...props}>
      {prevWhitespace && " "}
      {text}
      {postWhitespace && " "}
    </Box>
  );
};
