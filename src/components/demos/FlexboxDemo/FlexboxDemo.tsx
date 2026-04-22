import { useState } from "react";

import { useTranslation } from "react-i18next";

type JustifyOption = "justify-start" | "justify-center" | "justify-between";

const JUSTIFY_OPTIONS: { key: string; value: JustifyOption }[] = [
  { key: "demo.flexbox.start", value: "justify-start" },
  { key: "demo.flexbox.center", value: "justify-center" },
  { key: "demo.flexbox.between", value: "justify-between" },
];

export const FlexboxDemo = () => {
  const { t } = useTranslation();
  const [justify, setJustify] = useState<JustifyOption>("justify-start");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 justify-center mb-2">
        {JUSTIFY_OPTIONS.map(({ key, value }) => (
          <button
            key={value}
            onClick={() => setJustify(value)}
            className={`px-2 py-1 text-xs rounded ${
              justify === value ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {t(key)}
          </button>
        ))}
      </div>
      <div
        className={`flex ${justify} items-center bg-gray-100 border-2 border-blue-200 h-24 p-2 rounded transition-all duration-500`}
      >
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-bold rounded"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};
