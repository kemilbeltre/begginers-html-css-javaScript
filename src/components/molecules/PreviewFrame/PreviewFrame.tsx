import { useEffect, useRef, useState } from "react";

import { AlertCircle } from "lucide-react";

export interface ConsoleMessage {
  type: "log" | "error" | "warn" | "info";
  message: string;
  timestamp: number;
}

interface PreviewFrameProps {
  html: string;
  css: string;
  js: string;
  onConsoleMessage?: (message: ConsoleMessage) => void;
  runTrigger?: number; // Optional trigger to force re-render
}

export const PreviewFrame = ({
  html,
  css,
  js,
  onConsoleMessage,
  runTrigger,
}: PreviewFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    setError(null);

    try {
      // Create the complete HTML document
      const srcDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    // Override console methods to send messages to parent
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
      info: console.info
    };

    ['log', 'error', 'warn', 'info'].forEach(method => {
      console[method] = function(...args) {
        originalConsole[method].apply(console, args);
        
        window.parent.postMessage({
          type: 'console',
          method: method,
          args: args.map(arg => {
            try {
              if (typeof arg === 'object') {
                return JSON.stringify(arg, null, 2);
              }
              return String(arg);
            } catch (e) {
              return String(arg);
            }
          })
        }, '*');
      };
    });

    // Catch runtime errors
    window.addEventListener('error', (event) => {
      window.parent.postMessage({
        type: 'console',
        method: 'error',
        args: [event.message + ' (Line ' + event.lineno + ')']
      }, '*');
    });

    // User's JavaScript code
    try {
      ${js}
    } catch (error) {
      console.error('JavaScript Error: ' + error.message);
    }
  </script>
</body>
</html>
      `.trim();

      // Set the iframe content
      if (iframeRef.current.contentWindow) {
        iframeRef.current.srcdoc = srcDoc;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      console.error("Preview error:", err);
    }
  }, [html, css, js, runTrigger]); // Added runTrigger to dependencies

  // Listen for console messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "console" && onConsoleMessage) {
        onConsoleMessage({
          type: event.data.method,
          message: event.data.args.join(" "),
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onConsoleMessage]);

  return (
    <div className="relative w-full h-full bg-white">
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-50 border-b-2 border-red-200 p-3 flex items-start gap-2 z-10">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-900">Preview Error</p>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        title="Preview"
        sandbox="allow-scripts allow-modals"
        className="w-full h-full border-0"
        style={{ minHeight: "400px" }}
      />
    </div>
  );
};
