import { useState } from "react";

import { useTranslation } from "react-i18next";

export const CssBoxModelDemo = () => {
  const { t } = useTranslation();
  const [isRounded, setIsRounded] = useState(false);
  const [hasPadding, setHasPadding] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="border-4 border-dashed border-gray-300 p-2 relative bg-gray-50">
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-mono">
          {t("demo.cssBoxModel.marginLabel")}
        </span>
        <div
          className={`transition-all duration-300 bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg
            ${isRounded ? "rounded-full" : "rounded-none"}
            ${hasPadding ? "w-40 h-40" : "w-24 h-24"}`}
        >
          {t("demo.cssBoxModel.content")}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsRounded((r) => !r)}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium shadow-sm"
        >
          {t("demo.cssBoxModel.toggleRadius")}
        </button>
        <button
          onClick={() => setHasPadding((p) => !p)}
          className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium shadow-sm"
        >
          {t("demo.cssBoxModel.togglePadding")}
        </button>
      </div>
    </div>
  );
};
