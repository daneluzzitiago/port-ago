import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiSpringboot,
  SiRubyonrails,
  SiFirebase,
  SiC,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { FaFlutter, FaGolang } from "react-icons/fa6";
import { Stack, SvgIconProps, Typography, TypographyProps } from "@mui/material";
import { ComponentType } from "react";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { Colors } from "@/app/colors";

export type Tool =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Redux"
  | "Nodejs"
  | "Java"
  | "SpringBoot"
  | "Python"
  | "Flutter"
  | "RubyOnRails"
  | "Next"
  | "HTML"
  | "CSS"
  | "MySQL"
  | "Postgres"
  | "Firebase"
  | "C"
  | "Go"
  ;

type ToolProps = {
  tool: Tool;
  iconSize?: number;
  borderRadius?: number;
  inLine?: boolean;
  textProps?: TypographyProps;
  padding?: number;
  border?: number;
  iconColor?: string;
  labelColor?: string;
  backgroundColor?: string;
};

const iconMapper: Record<Tool, ComponentType<SvgIconProps>> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  Redux: SiRedux,
  Nodejs: SiNodedotjs,
  Java: FaJava,
  SpringBoot: SiSpringboot,
  Python: FaPython,
  Flutter: FaFlutter,
  RubyOnRails: SiRubyonrails,
  CSS: FaCss3,
  HTML: FaHtml5,
  Postgres: DiPostgresql,
  MySQL: DiMysql,
  Firebase: SiFirebase,
  Next: RiNextjsFill,
  C: SiC,
  Go: FaGolang,
};

const getIcon = (tool: Tool): ComponentType<SvgIconProps> => {
  const Icon = iconMapper[tool];
  if (!Icon) {
    throw new Error(`Icon not found for tool: ${tool}`);
  }
  return Icon;
};

export function Tool({
  tool,
  iconSize = 32,
  borderRadius = 1,
  inLine = false,
  textProps,
  padding = 1,
  border = 0,
  iconColor = Colors.accent,
  labelColor = Colors.text,
  backgroundColor,
}: ToolProps) {
  const Icon = getIcon(tool);
  return (
    <Stack
      p={padding}
      px={padding + 1}
      bgcolor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      alignItems="center"
      justifyContent="center"
      gap={1}
      direction={inLine ? "row" : "column"}
    >
      <Icon
        style={{
          color: iconColor,
          fontSize: iconSize,
          width: iconSize,
          height: iconSize,
        }}
      />
      <Typography {...textProps} color={labelColor}>
        {tool}
      </Typography>
    </Stack>
  );
}
