import { Terminal, Trash2, X } from "lucide-react";

import type { ConsoleMessage } from "../PreviewFrame";

interface ConsolePanelProps {
  messages: ConsoleMessage[];
  onClear: () => void;
  onClose?: () => void;
  isOpen?: boolean;
}

const typeStyles = {
  log: "text-gray-200",
  error: "text-red-400 font-semibold",
  warn: "text-yellow-400",
  info: "text-blue-400",
};

const typeIcons = {
  log: "→",
  error: "✕",
  warn: "⚠",
  info: "ℹ",
};

export const ConsolePanel = ({ messages, onClear, onClose, isOpen = true }: ConsolePanelProps) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col h-full bg-slate-900 border-t border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-semibold text-slate-200">Console</span>
          {messages.length > 0 && (
            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">
              {messages.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
            title="Clear console"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
              title="Close console"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-2 space-y-1 font-mono text-sm">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-slate-500 text-xs">
            No console output yet. Run your code to see messages here.
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={`${msg.timestamp}-${index}`}
              className="flex items-start gap-2 px-2 py-1 hover:bg-slate-800 rounded"
            >
              <span className={`flex-shrink-0 ${typeStyles[msg.type]}`}>{typeIcons[msg.type]}</span>
              <span className={`flex-1 break-all ${typeStyles[msg.type]}`}>{msg.message}</span>
              <span className="flex-shrink-0 text-xs text-slate-600">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
