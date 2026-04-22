import type { LessonCategory } from "@types/lesson";

const CATEGORY_STYLES: Record<LessonCategory, string> = {
  HTML: "bg-orange-100 text-orange-800",
  CSS: "bg-blue-100 text-blue-800",
  JS: "bg-yellow-100 text-yellow-800",
};

interface BadgeProps {
  label: string;
  category?: LessonCategory;
}

export const Badge = ({ label, category }: BadgeProps) => {
  const style = category ? CATEGORY_STYLES[category] : "bg-gray-100 text-gray-600";

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${style}`}
    >
      {label}
    </span>
  );
};
