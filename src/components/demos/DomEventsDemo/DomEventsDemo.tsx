import { useState } from "react";

import { useTranslation } from "react-i18next";

const BG_COLORS = ["#f8fafc", "#fef08a", "#bbf7d0", "#bfdbfe", "#fecaca", "#e9d5ff"];

export const DomEventsDemo = () => {
  const { t } = useTranslation();
  const [bgColor, setBgColor] = useState(BG_COLORS[0]);

  const flipColor = () => {
    const next = BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
    setBgColor(next);
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-8 rounded-lg transition-colors duration-500 border border-gray-200 shadow-inner"
      style={{ backgroundColor: bgColor }}
    >
      <p className="mb-4 font-mono text-gray-700 bg-white/50 px-3 py-1 rounded">
        {t("demo.domEvents.bgLabel", { color: bgColor })}
      </p>
      <button
        onClick={flipColor}
        className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        {t("demo.domEvents.trigger")}
      </button>
    </div>
  );
};
