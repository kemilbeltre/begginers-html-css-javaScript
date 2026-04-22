import { useState } from "react";

import { useTranslation } from "react-i18next";

import { CheckCircle, RotateCcw, ChevronRight } from "lucide-react";

import type { QuizQuestion } from "@types/quiz";

import { RadioOption } from "@atoms/RadioOption";

interface LessonQuizProps {
  questions: QuizQuestion[];
}

type Phase = "question" | "feedback" | "complete";

export const LessonQuiz = ({ questions }: LessonQuizProps) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(undefined);
  const [phase, setPhase] = useState<Phase>("question");
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleCheck = () => {
    if (isCorrect) setScore((s) => s + 1);
    setPhase("feedback");
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setPhase("complete");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(undefined);
      setPhase("question");
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(undefined);
    setPhase("question");
    setScore(0);
  };

  if (phase === "complete") {
    return (
      <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
        <h3 className="text-lg font-bold text-indigo-800 mb-2">{t("lesson.quiz.title")}</h3>
        <p className="text-2xl font-extrabold text-indigo-700 mb-4">
          {t("lesson.quiz.score", { score, total: questions.length })}
        </p>
        <button
          onClick={handleRetry}
          className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          <RotateCcw className="w-4 h-4" /> {t("lesson.quiz.retry")}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
        {t("lesson.quiz.title")} &mdash; {currentIndex + 1}/{questions.length}
      </h3>
      <p className="text-lg font-semibold text-gray-900 mb-4">{currentQuestion.question}</p>
      <div className="space-y-2 mb-4">
        {currentQuestion.options.map((option, idx) => (
          <RadioOption
            key={idx}
            label={option}
            selected={selectedAnswer === idx}
            onClick={() => phase === "question" && setSelectedAnswer(idx)}
          />
        ))}
      </div>

      {phase === "feedback" && (
        <div
          className={`mb-4 p-4 rounded-xl text-sm ${
            isCorrect
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-bold mb-1">
            {isCorrect ? (
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> {t("lesson.quiz.correct")}
              </span>
            ) : (
              t("lesson.quiz.incorrect")
            )}
          </p>
          <p>
            <span className="font-semibold">{t("lesson.quiz.explanation")}</span>{" "}
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        {phase === "question" ? (
          <button
            onClick={handleCheck}
            disabled={selectedAnswer === undefined}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${
              selectedAnswer !== undefined
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {t("lesson.quiz.check")}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-6 py-2 rounded-full font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            {isLastQuestion ? t("lesson.quiz.done") : t("lesson.quiz.next")}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
