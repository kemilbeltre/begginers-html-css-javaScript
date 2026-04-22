import { useState } from "react";

import type { LessonKey } from "@types/lesson";

import { lessons } from "@data/lessons";

import { LessonContent } from "../LessonContent";
import { LessonSidebar } from "../LessonSidebar";

export const LearnModule = () => {
  const [activeLesson, setActiveLesson] = useState<LessonKey>("html-basics");

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <LessonSidebar activeLesson={activeLesson} onSelect={setActiveLesson} />
      <LessonContent key={activeLesson} lesson={lessons[activeLesson]} />
    </div>
  );
};
