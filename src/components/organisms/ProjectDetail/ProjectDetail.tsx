import { ArrowLeft, ExternalLink, MonitorPlay } from "lucide-react";

import { CodeViewer } from "../../molecules/CodeViewer";

import type { Project } from "../../../types/project";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const handleOpenInNewTab = () => {
    window.open(project.files[0].path, "_blank");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Gallery
        </button>
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={handleOpenInNewTab}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Open in New Tab
          </button>
        </div>
      </div>

      {/* Content Area - Split View */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 overflow-hidden">
        {/* Left Panel - Live Preview */}
        <div className="flex flex-col bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
            <MonitorPlay className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Live Preview</h3>
          </div>
          <div className="flex-1 overflow-auto bg-white">
            <iframe
              src={project.files[0].path}
              title={project.title}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms"
              style={{ minHeight: "600px" }}
            />
          </div>
        </div>

        {/* Right Panel - Code Viewer */}
        <div className="flex flex-col overflow-hidden">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Source Code</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
          <div className="flex-1 overflow-hidden">
            <CodeViewer files={project.files} />
          </div>
        </div>
      </div>
    </div>
  );
};
