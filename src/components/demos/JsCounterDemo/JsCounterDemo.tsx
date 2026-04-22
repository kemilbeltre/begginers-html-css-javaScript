import { useState } from "react";

import { useTranslation } from "react-i18next";

import { Play, RotateCcw } from "lucide-react";

export const JsCounterDemo = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <p className="text-lg font-mono bg-gray-100 px-4 py-2 rounded border border-gray-200">
        {t("demo.counter.label", { count })}
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm active:transform active:scale-95"
      >
        <Play size={18} /> {t("demo.counter.increment")}
      </button>
      {count > 0 && (
        <button
          onClick={() => setCount(0)}
          className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
        >
          <RotateCcw size={14} /> {t("demo.counter.reset")}
        </button>
      )}
    </div>
  );
};
