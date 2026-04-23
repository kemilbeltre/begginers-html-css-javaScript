import { useState, useEffect } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { Copy, Check } from "lucide-react";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { ProjectFile } from "../../../types/project";

interface CodeViewerProps {
  files: ProjectFile[];
}

export const CodeViewer = ({ files }: CodeViewerProps) => {
  const [activeFile, setActiveFile] = useState(0);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadCode = async () => {
      setLoading(true);
      try {
        const response = await fetch(files[activeFile].path);
        const text = await response.text();
        setCode(text);
      } catch (error) {
        console.error("Error loading code:", error);
        setCode("// Error loading file");
      } finally {
        setLoading(false);
      }
    };

    loadCode();
  }, [activeFile, files]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-xl overflow-hidden">
      {/* File Tabs */}
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex gap-1 flex-1 overflow-x-auto">
          {files.map((file, index) => (
            <button
              key={file.path}
              onClick={() => setActiveFile(index)}
              className={`px-3 py-1 rounded-t text-sm font-mono transition-colors ${
                activeFile === index
                  ? "bg-slate-900 text-white"
                  : "bg-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              {file.name}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="ml-auto p-2 rounded hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code Display */}
      <div className="flex-1 overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center h-full text-slate-400">
            Loading code...
          </div>
        ) : (
          <SyntaxHighlighter
            language={files[activeFile].language}
            style={vscDarkPlus}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.875rem",
            }}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};
