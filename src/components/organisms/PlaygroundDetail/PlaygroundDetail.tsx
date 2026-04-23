import { useState, useEffect, useCallback } from "react";

import { ArrowLeft, Code as CodeIcon, AlertCircle, RefreshCw } from "lucide-react";

import { usePlaygroundStorage } from "@hooks/usePlaygroundStorage";
import { CodeEditor } from "@molecules/CodeEditor";
import { ConsolePanel } from "@molecules/ConsolePanel";
import { PlaygroundControls } from "@molecules/PlaygroundControls";
import { PreviewFrame, type ConsoleMessage } from "@molecules/PreviewFrame";

import type { Project } from "../../../types/project";

interface PlaygroundDetailProps {
  project: Project;
  onBack: () => void;
}

type FileType = "html" | "css" | "javascript";

export const PlaygroundDetail = ({ project, onBack }: PlaygroundDetailProps) => {
  const [activeFile, setActiveFile] = useState<FileType>("html");
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [runTrigger, setRunTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [defaultCode, setDefaultCode] = useState({ html: "", css: "", js: "" });

  // Load original code from files
  useEffect(() => {
    const loadCode = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const htmlFile = project.files.find((f) => f.language === "html");
        const cssFile = project.files.find((f) => f.language === "css");
        const jsFile = project.files.find((f) => f.language === "javascript");

        const [htmlResponse, cssResponse, jsResponse] = await Promise.all([
          htmlFile ? fetch(htmlFile.path) : Promise.resolve(null),
          cssFile ? fetch(cssFile.path) : Promise.resolve(null),
          jsFile ? fetch(jsFile.path) : Promise.resolve(null),
        ]);

        // Check for fetch errors
        if (htmlResponse && !htmlResponse.ok) {
          throw new Error(`Failed to load HTML file: ${htmlResponse.status}`);
        }

        const [htmlContent, cssContent, jsContent] = await Promise.all([
          htmlResponse ? htmlResponse.text() : Promise.resolve(""),
          cssResponse && cssResponse.ok ? cssResponse.text() : Promise.resolve(""),
          jsResponse && jsResponse.ok ? jsResponse.text() : Promise.resolve(""),
        ]);

        // Extract HTML body content (remove DOCTYPE, html, head, body tags for cleaner editing)
        const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        const cleanHtml = bodyMatch ? bodyMatch[1].trim() : htmlContent;

        setDefaultCode({
          html: cleanHtml,
          css: cssContent,
          js: jsContent,
        });
      } catch (error) {
        console.error("Error loading project files:", error);
        setLoadError(
          error instanceof Error ? error.message : "Failed to load project files. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadCode();
  }, [project]);

  // Use localStorage hook
  const { code, setCode, hasChanges, resetCode } = usePlaygroundStorage(project.id, defaultCode);

  // Update code for specific file
  const updateFile = (fileType: FileType, value: string) => {
    setCode((prev) => ({
      ...prev,
      [fileType]: value,
    }));
  };

  // Run code (refresh preview)
  const handleRun = useCallback(() => {
    setConsoleMessages([]);
    setRunTrigger((prev) => prev + 1);
  }, []);

  // Handle console messages from preview
  const handleConsoleMessage = useCallback((message: ConsoleMessage) => {
    setConsoleMessages((prev) => [...prev, message]);
    setIsConsoleOpen(true);
  }, []);

  // Export code as files
  const handleExport = () => {
    const files = [
      { name: "index.html", content: createFullHTML(code) },
      { name: "styles.css", content: code.css },
      { name: "script.js", content: code.js },
    ];

    files.forEach(({ name, content }) => {
      if (!content.trim()) return;

      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRun();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleRun]);

  // Auto-run for HTML/CSS changes (debounced)
  useEffect(() => {
    // Only auto-run if we have loaded code (not empty defaults)
    if (!defaultCode.html && !defaultCode.css && !defaultCode.js) return;

    const timer = setTimeout(() => {
      handleRun();
    }, 800);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code.html, code.css]); // handleRun is stable via useCallback

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Gallery
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <CodeIcon className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Playground</h3>
            <p className="text-gray-600">Fetching project files...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (loadError) {
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Gallery
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <CodeIcon className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Project</h3>
            <p className="text-gray-600 mb-6">{loadError}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={onBack}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
              >
                Back to Gallery
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Gallery
          </button>
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex items-center gap-2">
            <CodeIcon className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
          </div>
        </div>
      </div>

      {/* Controls */}
      <PlaygroundControls
        onRun={handleRun}
        onReset={resetCode}
        onExport={handleExport}
        onToggleConsole={() => setIsConsoleOpen(!isConsoleOpen)}
        isConsoleOpen={isConsoleOpen}
        hasChanges={hasChanges}
      />

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left: Preview */}
        <div className="flex flex-col bg-white border-r border-gray-200">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700">Live Preview</span>
            <span className="text-xs text-gray-500">Updates automatically</span>
          </div>
          <div className="flex-1 overflow-auto">
            <PreviewFrame
              html={code.html}
              css={code.css}
              js={code.js}
              onConsoleMessage={handleConsoleMessage}
              runTrigger={runTrigger}
            />
          </div>
        </div>

        {/* Right: Code Editor */}
        <div className="flex flex-col bg-slate-900">
          {/* File Tabs */}
          <div className="flex items-center gap-1 bg-slate-800 px-2 pt-2">
            {(["html", "css", "javascript"] as FileType[]).map((fileType) => (
              <button
                key={fileType}
                onClick={() => setActiveFile(fileType)}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                  activeFile === fileType
                    ? "bg-slate-900 text-white"
                    : "bg-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-600"
                }`}
              >
                {fileType.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor
              value={code[activeFile === "javascript" ? "js" : activeFile]}
              language={activeFile}
              onChange={(value) =>
                updateFile(activeFile === "javascript" ? "js" : activeFile, value)
              }
            />
          </div>

          {/* Console Panel */}
          {isConsoleOpen && (
            <div className="h-48 border-t border-slate-700">
              <ConsolePanel
                messages={consoleMessages}
                onClear={() => setConsoleMessages([])}
                onClose={() => setIsConsoleOpen(false)}
                isOpen={isConsoleOpen}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to create full HTML document
function createFullHTML(code: { html: string; css: string; js: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exported Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ${code.html}
  <script src="script.js"></script>
</body>
</html>`;
}
