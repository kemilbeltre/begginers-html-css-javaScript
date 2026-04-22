import { useTranslation } from "react-i18next";

import { BookOpen, CheckCircle } from "lucide-react";

type Tab = "learn" | "quiz";

interface TabSwitcherProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export const TabSwitcher = ({ active, onChange }: TabSwitcherProps) => {
  const { t } = useTranslation();

  const tabs: { key: Tab; label: string; Icon: typeof BookOpen }[] = [
    { key: "learn", label: t("tab.learn"), Icon: BookOpen },
    { key: "quiz", label: t("tab.exam"), Icon: CheckCircle },
  ];

  return (
    <div className="flex bg-gray-100 p-1 rounded-full">
      {tabs.map(({ key, label, Icon }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
            active === key
              ? "bg-white shadow-sm text-indigo-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
};
