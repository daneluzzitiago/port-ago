import { Box } from "@mui/material";
import { Tool } from "../shared/tools";

type ProjectToolsProps = {
  tools: Tool[];
};

export function ProjectTools({ tools }: ProjectToolsProps) {
  return <>{tools.map(tool => (
    <Box>
      {tool}
    </Box>
  ))}</>;
}
