export type Degree = {
  institution: string;
  course: string;
  description: string;
};

export const degrees: Degree[] = [
  {
    institution: "Universidade de São Paulo (USP)",
    course: "Computer Engineering",
    description:
      "I learned to combine Electronic Engineering and Computer Science knowledge. I had the opportunity to deepen my understanding " +
      "in areas such as embedded systems, robotics, data science, mobile computing, systems development, Internet of " +
      "Things (IoT), communication networks, artificial intelligence, and software engineering.",
  },
  {
    institution: "Centro Universitário de Votuporanga",
    course: "Logistics Technology",
    description:
      "I learned about various essential aspects of efficient logistics process management. I studied topics such as CRM, Supply " +
      "Chain, people management, and financial management, which gave me a comprehensive and strategic view of operations. The program " +
      "prepared me to work in organizing and optimizing workflows, inventory control, cost analysis, and " +
      "process improvement. Additionally, I learned to handle market demands, effectively coordinating teams and resources " +
      "to meet the needs of companies and clients.",
  },
];
