export type QuizTopic = "html" | "css" | "js";

export interface QuizQuestion {
  id: number;
  topic: QuizTopic;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export type QuizAnswers = Record<number, number>;
