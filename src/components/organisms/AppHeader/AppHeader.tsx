import { useTranslation } from "react-i18next";

import { Code } from "lucide-react";

import { TabSwitcher } from "@molecules/TabSwitcher";

type Tab = "learn" | "quiz";

interface AppHeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const AppHeader = ({ activeTab, onTabChange }: AppHeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Code className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            {t("app.title")}
            <span className="text-indigo-600">{t("app.titleHighlight")}</span>
          </h1>
        </div>
        <TabSwitcher active={activeTab} onChange={onTabChange} />
      </div>
    </header>
  );
};
