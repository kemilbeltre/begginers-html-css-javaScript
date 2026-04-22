import type { ReactNode } from "react";

import { useTranslation } from "react-i18next";

import type { Lesson } from "@types/lesson";

import { Badge } from "@atoms/Badge";
import { CodeBlock } from "@atoms/CodeBlock";
import { DemoViewer } from "@molecules/DemoViewer";
import { LessonQuiz } from "@organisms/LessonQuiz";

interface LessonContentProps {
  lesson: Lesson;
}

const titleWithoutNumber = (title: string) => title.substring(title.indexOf(".") + 2);

export const LessonContent = ({ lesson }: LessonContentProps) => {
  const { t } = useTranslation();
  const borderColor = lesson.color.split(" ")[1];

  return (
    <div className="md:col-span-2 flex flex-col gap-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <Badge
          label={`${t("lesson.categoryLabel")}: ${lesson.category}`}
          category={lesson.category}
        />
        <h2 className="text-3xl font-bold mb-4 mt-4 flex items-center gap-3">
          {lesson.icon as ReactNode}
          {titleWithoutNumber(lesson.title)}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{lesson.content}</p>
        <CodeBlock code={lesson.codeSnippet} filename={`script.${lesson.category.toLowerCase()}`} />
        <DemoViewer
          title={lesson.demoTitle}
          borderColor={borderColor}
          DemoComponent={lesson.DemoComponent}
        />
        <LessonQuiz questions={lesson.questions} />
      </div>
    </div>
  );
};
