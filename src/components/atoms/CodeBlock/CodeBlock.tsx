interface CodeBlockProps {
  code: string;
  filename: string;
}

export const CodeBlock = ({ code, filename }: CodeBlockProps) => (
  <div className="bg-slate-900 rounded-xl overflow-hidden shadow-inner mb-8">
    <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="text-slate-400 text-xs ml-2 font-mono">{filename}</span>
    </div>
    <pre className="p-4 text-slate-300 font-mono text-sm overflow-x-auto">
      <code>{code}</code>
    </pre>
  </div>
);
