import { Tool } from "../shared/tools";

export type Experience = {
  companyName: string;
  companyDescription: string;
  position: string;
  description?: string;
  tools?: Tool[];
  duration?: string;
};

export const experiences: Experience[] = [
  {
    companyName: "Dog Hero",
    companyDescription: "Pet boarding and walking services",
    position: "Software Development Summer Intern",
    description:
      "Summer internship program as a software engineer. Implementation and maintenance of an online platform " +
      "that offers pet services. Used Ruby on Rails and SQL for backend development, while learning HTML and CSS " +
      "for frontend development.",
    tools: ["RubyOnRails", "HTML", "CSS"],
    duration: "2 months (2019)",
  },
  {
    companyName: "Responde Aí",
    companyDescription: "Learning platform",
    position: "Brand Ambassador at USP",
    description:
      "Engagement and sales campaign for the online teaching platform focused on STEM higher education courses.",
    duration: "3 months (2019)",
  },
  {
    companyName: "Stoq",
    companyDescription: "Retail solutions",
    position: "Software Development Intern",
    description:
      "Development of open-source multi-platform ERP using Python, React JS, and PostgreSQL. Level 2 customer support.",
    tools: ["Python", "JavaScript", "React", "Postgres", "Redux"],
    duration: "7 months (2019)",
  },
  {
    companyName: "B2W",
    companyDescription: "Marketplace",
    position: "Product Management Intern",
    description:
      "Development of a chatbot using TheBotPlatform (TBP) tool to automate steps in the Tech Internship Program. " +
      "Program mapping to identify repeated activities and points of highest value delivery. Use of Design Thinking, Product " +
      "Management, and Agile methodologies. API integration between TBP, Trello, Google Drive, and others through webhooks.",
    tools: ["Python"],
    duration: "2 months (2020)",
  },
  {
    companyName: "Monitora",
    companyDescription: "Consulting",
    position: "Software Development Intern",
    description:
      "Led the development of functional testing systems using agile methodologies and Scrum framework. " +
      "Implemented automated testing pipelines with Jira, Zephyr, and Confluence. " +
      "Enhanced code quality through SonarQube and ESLint integration. " +
      "Orchestrated deployment and monitoring using Jenkins, Kubernetes, and Kibana.",
    tools: [
      "Java",
      "SpringBoot",
      "Postgres",
      "MySQL",
      "React",
      "JavaScript",
      "Redux",
    ],
    duration: "9 months (2020)",
  },
  {
    companyName: "Quinto Andar",
    companyDescription: "Digital Real Estate",
    position:
      "Software Development Intern ~ Junior Software Engineer ~ Software Engineer",
    tools: [
      "Java",
      "SpringBoot",
      "Postgres",
      "MySQL",
      "React",
      "JavaScript",
      "Redux",
      "TypeScript",
      "Flutter",
      "Firebase",
      "Next",
    ],
    description:
      "Progressed from intern to Software Engineer, leading frontend development initiatives. " +
      "Implemented Pix payment integration and property viewing tracking system. " +
      "Specialized in React and TypeScript development, creating high-impact features. " +
      "Led technical discoveries and strategic planning for new products. " +
      "Expanded technical expertise to mobile development with Flutter.",
    duration: "4 years (2020-2024)",
  },
  {
    companyName: "Rei do Pitaco",
    companyDescription: "Betting and iGaming",
    position: "Software Engineer",
    description:
      "Architected dynamic interfaces using protobuf contracts and gRPC, optimizing server communication. " +
      "Implemented a comprehensive KYC flow with facial recognition integration for fraud prevention. " +
      "Developed cross-platform solutions for both web and mobile applications.",
    tools: ["React", "JavaScript", "TypeScript", "Flutter", "Next"],
    duration: "4 months (2024- 2025)"
  },
];
