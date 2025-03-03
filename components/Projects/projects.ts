import { Tool } from "../shared/tools";

export type Project = {
  title: string;
  description: string;
  githubUrl?: string;
  projectUrl?: string;
  tools: Tool[];
  isWorkInProgress?: boolean;
  imgPath?: string;
};

export const projects: Project[] = [
  {
    title: "Gymbo",
    description:
      "Platform for creating and tracking workout performance in weight training.",
    projectUrl: "https://gymbo.com.br",
    tools: ["Firebase", "React", "TypeScript", "Next"],
    imgPath: "/gymbo.png",
  },
  {
    title: "Google Login",
    description:
      "Simple tutorial demonstrating Google authentication implementation in web applications.",
    githubUrl: "https://github.com/daneluzzitiago/google-login",
    tools: ["JavaScript", "Firebase"],
    imgPath: "/google-login.png",
  },
  {
    title: "Port Ago",
    description:
      "Port Ago (By Tiago) is my portfolio website - the one you're looking at right now.",
    githubUrl: "https://github.com/daneluzzitiago/port-ago",
    tools: ["React", "TypeScript", "Next"],
  },
  {
    title: "Blackjack - GA",
    description:
      "Genetic Algorithm application that learns to play Blackjack and develops a decision matrix based on player cards. Developed during my Evolutionary Algorithms course.",
    githubUrl: "https://github.com/daneluzzitiago/21_evolutivo",
    tools: ["C"]
  },
  {
    title: "CSGO - Game State Listener",
    description:
      "My final thesis project. An application that listens to CSGO match state changes, identifies events, and records them along with map coordinates (X,Y) to create event heatmaps.",
    githubUrl: "https://github.com/daneluzzitiago/csgo-gamestate-integration",
    tools: ["Nodejs", "JavaScript"],
  },
  {
    title: "Herois de mesa",
    description: "Board game developed as part of my university coursework.",
    githubUrl: "https://github.com/daneluzzitiago/herois_de_mesa",
    tools: ["Java"]
  },
  {
    title: "Tetris",
    description: "Tetris game implementation created during my undergraduate studies.",
    githubUrl: "https://github.com/daneluzzitiago/tetris",
    tools: ["Java"]
  },
];
