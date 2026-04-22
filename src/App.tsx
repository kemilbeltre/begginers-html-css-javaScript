import { useState } from "react";

import { AppFooter } from "./components/organisms/AppFooter";
import { AppHeader } from "./components/organisms/AppHeader";
import { LearnModule } from "./components/organisms/LearnModule";
import { QuizModule } from "./components/organisms/QuizModule";

type Tab = "learn" | "quiz";

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>("learn");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-200">
      <AppHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-6xl mx-auto px-6 py-10">
        {activeTab === "learn" ? <LearnModule /> : <QuizModule />}
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
