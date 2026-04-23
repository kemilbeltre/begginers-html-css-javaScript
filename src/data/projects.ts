import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "task-app",
    title: "JavaScript Task App",
    description:
      "A fully functional todo list application with create, read, update, and delete operations. Features Bootstrap styling and local storage persistence.",
    difficulty: "intermediate",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    folder: "javascript-task-app",
    indexFile: "index.html",
    files: [
      {
        name: "index.html",
        path: "/Mini-projects/javascript-task-app/index.html",
        language: "html",
      },
      {
        name: "app.js",
        path: "/Mini-projects/javascript-task-app/app.js",
        language: "javascript",
      },
    ],
    featured: true,
  },
  {
    id: "contact-form",
    title: "Contact Form",
    description:
      "A beautiful, responsive contact form with modern CSS styling, Google Fonts, and Font Awesome icons. Perfect for learning form layouts and styling.",
    difficulty: "beginner",
    technologies: ["HTML", "CSS"],
    folder: "Contact-Form",
    indexFile: "index.html",
    files: [
      {
        name: "index.html",
        path: "/Mini-projects/Contact-Form/index.html",
        language: "html",
      },
      {
        name: "main.css",
        path: "/Mini-projects/Contact-Form/main.css",
        language: "css",
      },
    ],
    featured: true,
  },
  {
    id: "css-grid-basic",
    title: "CSS Grid Basics",
    description:
      "Learn the fundamentals of CSS Grid layout system. A simple 6-element grid demonstrating basic grid properties and responsive design.",
    difficulty: "beginner",
    technologies: ["HTML", "CSS"],
    folder: "css grid basic",
    indexFile: "index.html",
    files: [
      {
        name: "index.html",
        path: "/Mini-projects/css grid basic/index.html",
        language: "html",
      },
      {
        name: "main.css",
        path: "/Mini-projects/css grid basic/main.css",
        language: "css",
      },
    ],
  },
  {
    id: "css-grid-advanced",
    title: "CSS Grid Advanced Layout",
    description:
      "Advanced CSS Grid techniques for complex page layouts. Features a full blog layout with header, sidebar, main content area, related posts, and footer.",
    difficulty: "intermediate",
    technologies: ["HTML", "CSS"],
    folder: "CSS GRID Advance",
    indexFile: "index.html",
    files: [
      {
        name: "index.html",
        path: "/Mini-projects/CSS GRID Advance/index.html",
        language: "html",
      },
      {
        name: "main.css",
        path: "/Mini-projects/CSS GRID Advance/main.css",
        language: "css",
      },
    ],
  },
  {
    id: "my-blog",
    title: "My Blog",
    description:
      "A complete blog template with semantic HTML5 elements including articles, navigation, aside, and proper document structure. Great for learning HTML fundamentals.",
    difficulty: "beginner",
    technologies: ["HTML", "CSS"],
    folder: "MyBlog",
    indexFile: "index.html",
    files: [
      {
        name: "index.html",
        path: "/Mini-projects/MyBlog/index.html",
        language: "html",
      },
      {
        name: "style.css",
        path: "/Mini-projects/MyBlog/style.css",
        language: "css",
      },
    ],
    featured: false,
  },
];

// Helper functions for filtering
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByDifficulty = (difficulty: Project["difficulty"]) =>
  projects.filter((p) => p.difficulty === difficulty);

export const getProjectsByTechnology = (tech: Project["technologies"][number]) =>
  projects.filter((p) => p.technologies.includes(tech));

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
