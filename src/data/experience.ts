export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  duration: string;
  techStack: string[];
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Kanalytics",
    location: "Mumbai",
    role: "Web Developer Intern",
    duration: "Dec 2025 - June 2026",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Apache ECharts",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    responsibilities: [
      "Developed interactive dashboards and dynamic analytics visualization modules using React.js and Apache ECharts.",
      "Built and optimized MongoDB aggregation pipelines for ERAP project APIs to process and handle large datasets efficiently.",
      "Designed and implemented scalable backend RESTful APIs using Node.js, Express.js, and TypeScript.",
      "Implemented a global client-side theme management engine (light/dark mode) using Redux to ensure layout consistency.",
    ],
  },
];