import { LucideIcon, ShieldAlert, ShoppingBag, Grid2x2, Camera } from "lucide-react";

export interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  icon: LucideIcon; 
  github?: string;
  live?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "ERAP - Early Risk Assessment Platform",
    desc: "Enterprise-scale risk assessment platform. Optimized complex risk calculation matrices and pipeline data formulas using MongoDB Aggregation frameworks to maximize production query processing performance.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Aggregation Pipeline", "Typescript","Apache ECharts"],
    icon: ShieldAlert,
    github: "https://github.com/maruti-dalvi-03/", 
    live: "https://kanalyser.in/erap/",
  },
  {
    title: "PixDrop - AI Automated Event Photo Distribution",
    desc: "AI-powered sharing platform engineered with dynamic analytical user dashboards and automated event photo sorting metrics utilizing client-side 'Find Me' facial recognition face matching.",
    tags: ["React.js", "Node.js", "MongoDB", "face-api.js", "Tailwind CSS"],
    icon: Camera,
    github: "https://github.com/maruti-dalvi-03/pixdrop.git",
    live: "",
  },
  {
    title: "GreenBee - Fruits & Vegetables Delivery Platform",
    desc: "Full-stack minimalist e-commerce web application featuring a responsive product layout catalog, fluid persistent shopping cart operations, and secure API checkout processing pipelines.",
    tags: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
    icon: ShoppingBag,
    github: "https://github.com/maruti-dalvi-03/MERN-Stack--Fruits-and-Vegetables-Online-Shop-.git",
    live: "",
  },
  { title: "Creative Portfolio",
    desc: "Interactive Sketch portfolio utilizing rich SVG canvas.",
    tags: ["React.js", "Tailwind", "Node.js","Resend APi"], 
    icon: Grid2x2, 
    github:"https://github.com/maruti-dalvi-03/sketch-portfolio.git",
    live: "https://maruti-sketch-portfolio.vercel.app/",
}
];