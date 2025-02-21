import { Tool } from "../shared/tools";

type Project = {
  title: string;
  description: string;
  url: string;
  tools: Tool[];
  isWorkInProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "Gymbo",
    description:
      "Platform for creating and tracking workout performance in weight training.",
    url: "https://github.com/daneluzzitiago/gymbo",
    tools: ["Firebase", "React", "TypeScript", "Next"],

  },
  {
    title: "Pequenos Passos",
    description: "Habit tracking application.",
    url: "https://github.com/daneluzzitiago/pequenos_passos",
    tools: ["Flutter"],
    isWorkInProgress: true,
  },
  {
    title: "Google Login",
    description:
      "Simple tutorial demonstrating Google authentication implementation in web applications.",
    url: "https://github.com/daneluzzitiago/google-login",
    tools: ["JavaScript", "Firebase"]
  },
  {
    title: "Node backend",
    description: "Work in progress backend application.",
    url: "https://github.com/daneluzzitiago/node_backend",
    tools: ["Nodejs", "JavaScript"],
    isWorkInProgress: true,
  },
  {
    title: "Port Ago",
    description:
      "Port Ago (By Tiago) is my portfolio website - the one you're looking at right now.",
    url: "https://github.com/daneluzzitiago/port-ago",
    tools: ["React", "TypeScript", "Next"],
  },
  {
    title: "Nade Manager",
    description: "FPS team management simulation game.",
    url: "https://github.com/daneluzzitiago/nade-manager",
    tools: ["React", "TypeScript", "Next"],
    isWorkInProgress: true,
  },
  {
    title: "CSGO - Game State Listener",
    description:
      "My final thesis project. An application that listens to CSGO match state changes, identifies events, and records them along with map coordinates (X,Y) to create event heatmaps.",
    url: "https://github.com/daneluzzitiago/csgo-gamestate-integration",
    tools: ["Nodejs", "JavaScript"],
  },
  {
    title: "Desk Chess",
    description: "Chess game developed during my undergraduate studies.",
    url: "https://github.com/daneluzzitiago/desk_chess",
    tools: ["Java"]
  },
  {
    title: "Herois de mesa",
    description: "Board game developed as part of my university coursework.",
    url: "https://github.com/daneluzzitiago/herois_de_mesa",
    tools: ["Java"]
  },
  {
    title: "Tetris",
    description: "Tetris game implementation created during my undergraduate studies.",
    url: "https://github.com/daneluzzitiago/tetris",
    tools: ["Java"]
  },
  {
    title: "Blackjack - GA",
    description:
      "Genetic Algorithm application that learns to play Blackjack and develops a decision matrix based on player cards. Developed during my Evolutionary Algorithms course.",
    url: "https://github.com/daneluzzitiago/21_evolutivo",
    tools: ["C"]
  },
];
