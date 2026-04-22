import type { ReactNode } from "react";

import type { Lesson } from "@types/lesson";

interface LessonNavItemProps {
  lessonKey: string;
  lesson: Lesson;
  isActive: boolean;
  onClick: () => void;
}

export const LessonNavItem = ({ lessonKey, lesson, isActive, onClick }: LessonNavItemProps) => (
  <button
    key={lessonKey}
    onClick={onClick}
    className={`p-3 rounded-xl flex items-center gap-3 transition-all duration-200 text-left w-full ${
      isActive
        ? `${lesson.color} shadow-md border-2 transform scale-[1.02]`
        : "bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
    }`}
  >
    <div className="bg-white p-1.5 rounded-lg shadow-sm">{lesson.icon as ReactNode}</div>
    <span className="font-semibold text-sm">{lesson.title}</span>
  </button>
);
