export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Technology = "HTML" | "CSS" | "JavaScript" | "Bootstrap";

export interface ProjectFile {
  name: string;
  path: string;
  language: "html" | "css" | "javascript";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  technologies: Technology[];
  folder: string; // path relative to Mini-projects/
  indexFile: string; // main HTML file to load in iframe
  files: ProjectFile[];
  thumbnail?: string;
  featured?: boolean;
}
