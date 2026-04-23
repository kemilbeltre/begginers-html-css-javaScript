import { Code, Star } from "lucide-react";

import type { Project } from "../../../types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const difficultyColors = {
  beginner: "bg-green-100 text-green-700 border-green-200",
  intermediate: "bg-yellow-100 text-yellow-700 border-yellow-200",
  advanced: "bg-red-100 text-red-700 border-red-200",
};

const techColors: Record<string, string> = {
  HTML: "bg-orange-100 text-orange-700",
  CSS: "bg-blue-100 text-blue-700",
  JavaScript: "bg-yellow-100 text-yellow-700",
  Bootstrap: "bg-purple-100 text-purple-700",
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-white rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 overflow-hidden text-left p-6 flex flex-col gap-4 relative"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 p-1.5 rounded-full">
          <Star className="w-4 h-4 fill-current" />
        </div>
      )}

      {/* Icon Header */}
      <div className="flex items-center gap-3">
        <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
          <Code className="w-6 h-6 text-indigo-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>

      {/* Metadata */}
      <div className="flex flex-col gap-3 mt-auto">
        {/* Difficulty Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[project.difficulty]}`}
          >
            {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
          </span>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-md text-xs font-medium ${techColors[tech] || "bg-gray-100 text-gray-700"}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="mt-2 text-indigo-600 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        View Project →
      </div>
    </button>
  );
};
