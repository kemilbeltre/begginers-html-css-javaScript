import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import type { QuizQuestion } from "@types/quiz";

import { QuizResultItem } from ".";

const question: QuizQuestion = {
  id: 1,
  topic: "html",
  question: "Which tag creates a link?",
  options: ["<link>", "<a>", "<href>", "<url>"],
  correctAnswer: 1,
  explanation: "The anchor tag <a> is used.",
};

describe("QuizResultItem", () => {
  it("shows correct answer styling when user answered correctly", () => {
    const { container } = render(<QuizResultItem question={question} index={0} userAnswer={1} />);
    expect(container.firstChild).toHaveClass("bg-green-50");
  });

  it("shows incorrect answer styling when wrong", () => {
    const { container } = render(<QuizResultItem question={question} index={0} userAnswer={0} />);
    expect(container.firstChild).toHaveClass("bg-red-50");
  });

  it("shows Skipped when no answer provided", () => {
    render(<QuizResultItem question={question} index={0} userAnswer={undefined} />);
    expect(screen.getByText("Skipped")).toBeInTheDocument();
  });

  it("shows correct answer text when answer is wrong", () => {
    render(<QuizResultItem question={question} index={0} userAnswer={0} />);
    expect(screen.getByText("<a>")).toBeInTheDocument();
  });

  it("renders the explanation", () => {
    render(<QuizResultItem question={question} index={0} userAnswer={1} />);
    expect(screen.getByText("The anchor tag <a> is used.")).toBeInTheDocument();
  });
});
