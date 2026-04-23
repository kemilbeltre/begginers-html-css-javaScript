import { useState } from "react";

import { Rocket, Filter } from "lucide-react";

import { projects } from "../../../data/projects";
import { ProjectCard } from "../../molecules/ProjectCard";
import { PlaygroundDetail } from "../PlaygroundDetail";

import type { Project, Difficulty, Technology } from "../../../types/project";

export const ProjectsModule = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | "all">("all");
  const [filterTechnology, setFilterTechnology] = useState<Technology | "all">("all");

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) => {
    const matchesDifficulty = filterDifficulty === "all" || project.difficulty === filterDifficulty;
    const matchesTechnology =
      filterTechnology === "all" || project.technologies.includes(filterTechnology);
    return matchesDifficulty && matchesTechnology;
  });

  // If a project is selected, show detail view
  if (selectedProject) {
    return <PlaygroundDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  // Otherwise show gallery view
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full mb-4">
          <Rocket className="w-6 h-6" />
          <span className="font-bold text-lg">Mini Projects Gallery</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Interactive Code Playground</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn by doing! Click any project to open an interactive playground where you can edit
          HTML, CSS, and JavaScript code in real-time and see your changes instantly.
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filter Projects</h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Difficulty Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value as Difficulty | "all")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Technology Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
            <select
              value={filterTechnology}
              onChange={(e) => setFilterTechnology(e.target.value as Technology | "all")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
            >
              <option value="all">All Technologies</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Bootstrap">Bootstrap</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""} Found
          </h2>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500 text-lg">
              No projects match your filters. Try adjusting your selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
