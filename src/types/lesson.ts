import type { QuizQuestion } from "./quiz";

export type LessonCategory = "HTML" | "CSS" | "JS";

export type LessonKey =
  | "html-basics"
  | "html-forms"
  | "css-basics"
  | "css-flexbox"
  | "js-basics"
  | "js-dom";

export interface Lesson {
  category: LessonCategory;
  title: string;
  icon: React.ReactNode;
  color: string;
  content: string;
  codeSnippet: string;
  demoTitle: string;
  DemoComponent: React.ComponentType;
  questions: QuizQuestion[];
}

export type LessonsMap = Record<LessonKey, Lesson>;
