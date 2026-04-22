import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import type { QuizQuestion } from "@types/quiz";

import { LessonQuiz } from ".";

const questions: QuizQuestion[] = [
  {
    id: 101,
    topic: "html",
    question: "Which tag defines a heading?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    correctAnswer: 1,
    explanation: "The <h1> tag defines the top-level heading.",
  },
  {
    id: 102,
    topic: "html",
    question: "Which tag defines a paragraph?",
    options: ["<para>", "<p>", "<text>", "<pg>"],
    correctAnswer: 1,
    explanation: "The <p> tag defines a paragraph.",
  },
];

describe("LessonQuiz", () => {
  it("renders the first question", () => {
    render(<LessonQuiz questions={questions} />);
    expect(screen.getByText("Which tag defines a heading?")).toBeInTheDocument();
  });

  it("check button is disabled before selecting an answer", () => {
    render(<LessonQuiz questions={questions} />);
    expect(screen.getByText("Check Answer").closest("button")).toBeDisabled();
  });

  it("check button is enabled after selecting an answer", async () => {
    render(<LessonQuiz questions={questions} />);
    await userEvent.click(screen.getByText("<h1>"));
    expect(screen.getByText("Check Answer").closest("button")).not.toBeDisabled();
  });

  it("shows correct feedback when right answer selected", async () => {
    render(<LessonQuiz questions={questions} />);
    await userEvent.click(screen.getByText("<h1>"));
    await userEvent.click(screen.getByText("Check Answer"));
    expect(screen.getByText("Correct!")).toBeInTheDocument();
  });

  it("shows incorrect feedback when wrong answer selected", async () => {
    render(<LessonQuiz questions={questions} />);
    await userEvent.click(screen.getByText("<p>"));
    await userEvent.click(screen.getByText("Check Answer"));
    expect(screen.getByText("Incorrect")).toBeInTheDocument();
  });

  it("advances to next question after feedback", async () => {
    render(<LessonQuiz questions={questions} />);
    await userEvent.click(screen.getByText("<h1>"));
    await userEvent.click(screen.getByText("Check Answer"));
    await userEvent.click(screen.getByText("Next Question"));
    expect(screen.getByText("Which tag defines a paragraph?")).toBeInTheDocument();
  });

  it("shows score after completing all questions", async () => {
    render(<LessonQuiz questions={questions} />);
    // Q1 correct
    await userEvent.click(screen.getByText("<h1>"));
    await userEvent.click(screen.getByText("Check Answer"));
    // Q2
    await userEvent.click(screen.getByText("Next Question"));
    await userEvent.click(screen.getByText("<p>"));
    await userEvent.click(screen.getByText("Check Answer"));
    await userEvent.click(screen.getByText("See Results"));
    expect(screen.getByText(/You scored/)).toBeInTheDocument();
  });

  it("shows retry button on completion and resets on click", async () => {
    render(<LessonQuiz questions={questions} />);
    // Q1
    await userEvent.click(screen.getByText("<h1>"));
    await userEvent.click(screen.getByText("Check Answer"));
    // Q2
    await userEvent.click(screen.getByText("Next Question"));
    await userEvent.click(screen.getByText("<p>"));
    await userEvent.click(screen.getByText("Check Answer"));
    await userEvent.click(screen.getByText("See Results"));
    await userEvent.click(screen.getByText("Try Again"));
    expect(screen.getByText("Which tag defines a heading?")).toBeInTheDocument();
  });
});
