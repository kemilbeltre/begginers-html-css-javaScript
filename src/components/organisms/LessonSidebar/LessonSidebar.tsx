import { useTranslation } from "react-i18next";

import type { LessonKey } from "@types/lesson";

import { lessons, LESSON_CATEGORIES } from "@data/lessons";
import { LessonNavItem } from "@molecules/LessonNavItem";

interface LessonSidebarProps {
  activeLesson: LessonKey;
  onSelect: (key: LessonKey) => void;
}

export const LessonSidebar = ({ activeLesson, onSelect }: LessonSidebarProps) => {
  const { t } = useTranslation();

  return (
    <div className="md:col-span-1 flex flex-col gap-6">
      {LESSON_CATEGORIES.map((category) => (
        <div key={category}>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">
            {category} {t("sidebar.groupLabel")}
          </h3>
          <div className="flex flex-col gap-2">
            {(Object.entries(lessons) as [LessonKey, (typeof lessons)[LessonKey]][])
              .filter(([, data]) => data.category === category)
              .map(([key, data]) => (
                <LessonNavItem
                  key={key}
                  lessonKey={key}
                  lesson={data}
                  isActive={activeLesson === key}
                  onClick={() => onSelect(key)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
