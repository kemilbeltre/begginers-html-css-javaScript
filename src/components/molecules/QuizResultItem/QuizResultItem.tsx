import { useTranslation } from "react-i18next";

import { CheckCircle, RotateCcw } from "lucide-react";

import type { QuizQuestion } from "@types/quiz";

interface QuizResultItemProps {
  question: QuizQuestion;
  index: number;
  userAnswer: number | undefined;
}

export const QuizResultItem = ({ question, index, userAnswer }: QuizResultItemProps) => {
  const { t } = useTranslation();
  const isCorrect = userAnswer === question.correctAnswer;

  return (
    <div
      className={`p-5 rounded-xl border ${
        isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
      }`}
    >
      <div className="flex gap-3 mb-3">
        <div className="mt-1">
          {isCorrect ? (
            <CheckCircle className="text-green-600" />
          ) : (
            <RotateCcw className="text-red-500" />
          )}
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-2">
            Q{index + 1}: {question.question}
          </p>
          <p className="text-sm mb-1">
            <span className="text-gray-500 font-medium">{t("quiz.results.yourAnswer")} </span>
            <span
              className={
                isCorrect ? "text-green-700 font-bold" : "text-red-600 font-bold line-through"
              }
            >
              {userAnswer !== undefined ? question.options[userAnswer] : t("quiz.results.skipped")}
            </span>
          </p>
          {!isCorrect && (
            <p className="text-sm mb-2">
              <span className="text-gray-500 font-medium">{t("quiz.results.correctAnswer")} </span>
              <span className="text-green-700 font-bold">
                {question.options[question.correctAnswer]}
              </span>
            </p>
          )}
          <div
            className={`mt-3 p-3 rounded-lg text-sm ${
              isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            <span className="font-bold">{t("quiz.results.explanation")}</span>{" "}
            {question.explanation}
          </div>
        </div>
      </div>
    </div>
  );
};
