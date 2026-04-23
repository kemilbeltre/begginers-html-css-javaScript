import { useState, useEffect, useRef } from "react";

interface PlaygroundCode {
  html: string;
  css: string;
  js: string;
}

const STORAGE_PREFIX = "playground_";

export const usePlaygroundStorage = (projectId: string, defaultCode: PlaygroundCode) => {
  const storageKey = `${STORAGE_PREFIX}${projectId}`;
  const initializedRef = useRef(false);

  // Initialize state from localStorage or defaults
  const [code, setCode] = useState<PlaygroundCode>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Failed to load code from localStorage:", error);
    }
    return defaultCode;
  });

  // Sync code with defaultCode when it changes (only if not yet initialized with real content)
  useEffect(() => {
    // If defaultCode has content and we haven't initialized yet
    const hasDefaultContent = defaultCode.html || defaultCode.css || defaultCode.js;
    const currentCodeIsEmpty = !code.html && !code.css && !code.js;

    if (hasDefaultContent && !initializedRef.current) {
      try {
        const stored = localStorage.getItem(storageKey);

        // If no stored code OR stored code is empty, use the loaded defaults
        if (!stored || currentCodeIsEmpty) {
          setCode(defaultCode);
        }
        // If stored code exists and has content, keep it (user has edits)
        // The code state was already initialized with localStorage in useState

        initializedRef.current = true;
      } catch (error) {
        console.error("Failed to sync with defaultCode:", error);
      }
    }
  }, [defaultCode, storageKey, code]);

  // Check if code has been modified from default
  const hasChanges =
    code.html !== defaultCode.html || code.css !== defaultCode.css || code.js !== defaultCode.js;

  // Save to localStorage whenever code changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(code));
    } catch (error) {
      console.error("Failed to save code to localStorage:", error);
    }
  }, [code, storageKey]);

  // Reset to default code
  const resetCode = () => {
    setCode(defaultCode);
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  };

  return {
    code,
    setCode,
    hasChanges,
    resetCode,
  };
};
