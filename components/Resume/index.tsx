import { Stack } from "@mui/material";

export function Resume() {
  return (
    <Stack>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="Resume PDF"
      />
    </Stack>
  );
}