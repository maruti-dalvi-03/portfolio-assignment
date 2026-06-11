import { LucideIcon, Code2, Monitor, Server, Database, Wrench } from "lucide-react";

export interface SkillCategory {
  category: string;
  icon: LucideIcon; 
  technologies: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: Code2,
    technologies: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    category: "Frontend Development",
    icon: Monitor,
    technologies: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: Server,
    technologies: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    icon: Database,
    technologies: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Architectures",
    icon: Wrench,
    technologies: ["REST APIs", "Git", "GitHub", "Redux Toolkit", "Docker"],
  },
];