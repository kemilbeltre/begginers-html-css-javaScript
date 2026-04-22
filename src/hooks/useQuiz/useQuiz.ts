import { useState } from "react";

import type { QuizAnswers } from "@types/quiz";

import { quizQuestions } from "@data/quizQuestions";

export const useQuiz = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const currentQuestion = quizQuestions[currentIndex];
  const hasAnswered = answers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  const selectAnswer = (optionIdx: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIdx }));
  };

  const advance = () => {
    if (isLastQuestion) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const reset = () => {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setAnswers({});
  };

  const score = quizQuestions.filter((q) => answers[q.id] === q.correctAnswer).length;

  return {
    started,
    finished,
    currentIndex,
    currentQuestion,
    answers,
    hasAnswered,
    isLastQuestion,
    score,
    total: quizQuestions.length,
    start: () => setStarted(true),
    selectAnswer,
    advance,
    reset,
  };
};
