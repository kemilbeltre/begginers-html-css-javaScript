import { Play, RotateCcw, Download, Terminal as TerminalIcon } from "lucide-react";

interface PlaygroundControlsProps {
  onRun: () => void;
  onReset: () => void;
  onExport: () => void;
  onToggleConsole: () => void;
  isConsoleOpen: boolean;
  hasChanges: boolean;
}

export const PlaygroundControls = ({
  onRun,
  onReset,
  onExport,
  onToggleConsole,
  isConsoleOpen,
  hasChanges,
}: PlaygroundControlsProps) => {
  return (
    <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 border-b border-slate-700">
      {/* Run Code Button */}
      <button
        onClick={onRun}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
        title="Run code (Ctrl+Enter)"
      >
        <Play className="w-4 h-4" />
        Run Code
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        disabled={!hasChanges}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          hasChanges
            ? "bg-slate-700 hover:bg-slate-600 text-white"
            : "bg-slate-900 text-slate-600 cursor-not-allowed"
        }`}
        title="Reset to original code"
      >
        <RotateCcw className="w-4 h-4" />
        Reset
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-slate-700 mx-2" />

      {/* Toggle Console Button */}
      <button
        onClick={onToggleConsole}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          isConsoleOpen
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "bg-slate-700 hover:bg-slate-600 text-slate-300"
        }`}
        title="Toggle console"
      >
        <TerminalIcon className="w-4 h-4" />
        Console
      </button>

      {/* Export Button */}
      <button
        onClick={onExport}
        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-300 px-4 py-2 rounded-lg font-medium transition-colors ml-auto"
        title="Export code as files"
      >
        <Download className="w-4 h-4" />
        Export
      </button>

      {/* Changes Indicator */}
      {hasChanges && (
        <div className="flex items-center gap-2 text-xs text-yellow-400 ml-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          Modified
        </div>
      )}
    </div>
  );
};
