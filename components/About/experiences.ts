import { duration } from "@mui/material";
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
    duration: "2 months",
  },
  {
    companyName: "Responde Aí",
    companyDescription: "Learning platform",
    position: "Brand Ambassador at USP",
    description:
      "Engagement and sales campaign for the online teaching platform focused on STEM higher education courses.",
    duration: "3 months",
  },
  {
    companyName: "Stoq",
    companyDescription: "Retail solutions",
    position: "Software Development Intern",
    description:
      "Development of open-source multi-platform ERP using Python, React JS, and PostgreSQL. Level 2 customer support.",
    tools: ["Python", "JavaScript", "React", "Postgres", "Redux"],
    duration: "7 months",
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
    duration: "2 months",
  },
  {
    companyName: "Monitora",
    companyDescription: "Consulting",
    position: "Software Development Intern",
    description:
      "Analysis and development of functional testing systems. Use of agile software development concepts and " +
      "Scrum framework, Jira for activity management, Zephyr for test management, and Confluence for collaborative documentation. " +
      "Building and maintaining applications using IDEs such as IntelliJ and Visual Studio Code, as well as tools like SonarQube " +
      "and ESLint for source code quality inspection. Code review supported by GitLab. Automated deployment, scaling, management, " +
      "and monitoring of applications using Jenkins, Kubernetes, and Kibana.",
    tools: [
      "Java",
      "SpringBoot",
      "Postgres",
      "MySQL",
      "React",
      "JavaScript",
      "Redux",
    ],
    duration: "9 months",
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
      "Starting as an intern, I had the opportunity to familiarize myself with the basic concepts of software development and gained a " +
      "fundamental understanding of programming practices. I worked on Pix payment integration and developing features for " +
      "a property viewing tracking system. Within a few months, I was hired full-time, and this stage of my career focused on being versatile " +
      "to acquire varied skills. During this time, I took on the responsibility of improving my user interface creation and enhanced " +
      "my frontend skills, while having more solid impacts on the backend. It was during this phase that I acquired most of my knowledge in " +
      "Javascript and React. After being promoted to Developer, I specialized in frontend, with an emphasis on React and TypeScript. In this career phase, " +
      "I contributed to the development of high-impact features, leading discoveries and strategic planning. I had my first " +
      "experiences with Flutter.",
    duration: "4 years",
  },
  {
    companyName: "Rei do Pitaco",
    companyDescription: "Betting and iGaming",
    position: "Software Engineer",
    description:
      "Developed dynamic interfaces, creating screens and dynamic pages from protobuf contracts, using " +
      "the GRPC pattern for requests, ensuring higher scalability and performance in server communication. " +
      "Developed a Know Your Customer (KYC) flow for both mobile and web, integrated with facial " +
      "recognition tools to prevent fraud.",
    tools: ["React", "JavaScript", "TypeScript", "Flutter", "Next"],
    duration: "4 months"
  },
];
