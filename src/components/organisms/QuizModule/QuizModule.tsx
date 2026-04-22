import { useTranslation } from "react-i18next";

import { Award, ChevronRight, RotateCcw } from "lucide-react";

import type { LessonCategory } from "@types/lesson";
import type { QuizTopic } from "@types/quiz";

import { Badge } from "@atoms/Badge";
import { ProgressBar } from "@atoms/ProgressBar";
import { RadioOption } from "@atoms/RadioOption";
import { quizQuestions } from "@data/quizQuestions";
import { useQuiz } from "@hooks/useQuiz";
import { QuizResultItem } from "@molecules/QuizResultItem";

const TOPIC_TO_CATEGORY: Record<QuizTopic, LessonCategory> = {
  html: "HTML",
  css: "CSS",
  js: "JS",
};

const scoreMessage = (percentage: number, t: ReturnType<typeof useTranslation>["t"]) => {
  if (percentage === 100) return t("quiz.results.perfect");
  if (percentage >= 60) return t("quiz.results.great");
  return t("quiz.results.effort");
};

const QuizLanding = ({ onStart }: { onStart: () => void }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center max-w-2xl mx-auto">
      <div className="bg-indigo-100 p-6 rounded-full mb-6">
        <Award className="w-16 h-16 text-indigo-600" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("quiz.landing.title")}</h2>
      <p className="text-xl text-gray-600 mb-8">
        {t("quiz.landing.description", { count: quizQuestions.length })}
      </p>
      <button
        onClick={onStart}
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-2"
      >
        {t("quiz.landing.start")} <ChevronRight />
      </button>
    </div>
  );
};

const QuizResults = ({
  score,
  total,
  answers,
  onReset,
}: {
  score: number;
  total: number;
  answers: Record<number, number>;
  onReset: () => void;
}) => {
  const { t } = useTranslation();
  const percentage = (score / total) * 100;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-indigo-600 p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">{t("quiz.results.title")}</h2>
        <div className="text-6xl font-extrabold my-6">
          {score} <span className="text-3xl text-indigo-200">/ {total}</span>
        </div>
        <p className="text-xl text-indigo-100">{scoreMessage(percentage, t)}</p>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">{t("quiz.results.review")}</h3>
        <div className="space-y-6">
          {quizQuestions.map((q, idx) => (
            <QuizResultItem key={q.id} question={q} index={idx} userAnswer={answers[q.id]} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={onReset}
            className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-5 h-5" /> {t("quiz.results.retry")}
          </button>
        </div>
      </div>
    </div>
  );
};

const ActiveQuiz = ({
  currentIndex,
  total,
  currentQuestion,
  answers,
  hasAnswered,
  isLastQuestion,
  onSelect,
  onAdvance,
}: {
  currentIndex: number;
  total: number;
  currentQuestion: ReturnType<typeof useQuiz>["currentQuestion"];
  answers: ReturnType<typeof useQuiz>["answers"];
  hasAnswered: boolean;
  isLastQuestion: boolean;
  onSelect: (idx: number) => void;
  onAdvance: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
          <span>
            {t("quiz.progress.question", {
              current: currentIndex + 1,
              total,
            })}
          </span>
          <span>{Math.round(((currentIndex + 1) / total) * 100)}%</span>
        </div>
        <ProgressBar current={currentIndex + 1} total={total} />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <Badge
          label={currentQuestion.topic.toUpperCase()}
          category={TOPIC_TO_CATEGORY[currentQuestion.topic]}
        />
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-4 leading-tight">
          {currentQuestion.question}
        </h2>
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, idx) => (
            <RadioOption
              key={idx}
              label={option}
              selected={answers[currentQuestion.id] === idx}
              onClick={() => onSelect(idx)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onAdvance}
            disabled={!hasAnswered}
            className={`py-3 px-8 rounded-full font-bold flex items-center gap-2 transition-colors ${
              hasAnswered
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? t("quiz.finish") : t("quiz.next")}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const QuizModule = () => {
  const quiz = useQuiz();

  if (!quiz.started) return <QuizLanding onStart={quiz.start} />;

  if (quiz.finished)
    return (
      <QuizResults
        score={quiz.score}
        total={quiz.total}
        answers={quiz.answers}
        onReset={quiz.reset}
      />
    );

  return (
    <ActiveQuiz
      currentIndex={quiz.currentIndex}
      total={quiz.total}
      currentQuestion={quiz.currentQuestion}
      answers={quiz.answers}
      hasAnswered={quiz.hasAnswered}
      isLastQuestion={quiz.isLastQuestion}
      onSelect={quiz.selectAnswer}
      onAdvance={quiz.advance}
    />
  );
};
