import { useState } from "react";

import { AppFooter } from "./components/organisms/AppFooter";
import { AppHeader } from "./components/organisms/AppHeader";
import { LearnModule } from "./components/organisms/LearnModule";
import { ProjectsModule } from "./components/organisms/ProjectsModule";
import { QuizModule } from "./components/organisms/QuizModule";

type Tab = "learn" | "quiz" | "projects";

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>("learn");

  const renderContent = () => {
    switch (activeTab) {
      case "learn":
        return <LearnModule />;
      case "projects":
        return <ProjectsModule />;
      case "quiz":
        return <QuizModule />;
      default:
        return <LearnModule />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-200">
      <AppHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-6xl mx-auto px-6 py-10">{renderContent()}</main>
      <AppFooter />
    </div>
  );
};

export default App;
