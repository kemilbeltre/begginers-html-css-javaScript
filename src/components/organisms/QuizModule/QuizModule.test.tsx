import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { QuizModule } from ".";

const clickExactOption = async (label: string) => {
  const btn = screen.getAllByRole("button").find((b) => b.textContent?.trim() === label);
  await userEvent.click(btn!);
};

const clickNextOrFinish = async () => {
  const btn = screen
    .getAllByRole("button")
    .find(
      (b) => b.textContent?.includes("Next Question") || b.textContent?.includes("Finish Quiz")
    );
  await userEvent.click(btn!);
};

const runQuiz = async (answers: string[]) => {
  await userEvent.click(screen.getByText("Start Challenge"));
  for (const answer of answers) {
    await clickExactOption(answer);
    await clickNextOrFinish();
  }
};

const ALL_CORRECT = [
  "<a>",
  "color: blue;",
  "const",
  "event.preventDefault()",
  "justify-content: space-between;",
  "document.querySelector('.classname')",
];

describe("QuizModule", () => {
  it("renders the landing screen initially", () => {
    render(<QuizModule />);
    expect(screen.getByText("Comprehensive Skills Test")).toBeInTheDocument();
    expect(screen.getByText("Start Challenge")).toBeInTheDocument();
  });

  it("starts the quiz on Start Challenge click", async () => {
    render(<QuizModule />);
    await userEvent.click(screen.getByText("Start Challenge"));
    expect(screen.getByText(/Question 1 of 6/)).toBeInTheDocument();
  });

  it("advances to next question after selecting an answer", async () => {
    render(<QuizModule />);
    await userEvent.click(screen.getByText("Start Challenge"));
    await clickExactOption("<a>");
    await clickNextOrFinish();
    expect(screen.getByText(/Question 2 of 6/)).toBeInTheDocument();
  });

  it("Next Question button is disabled until answer selected", async () => {
    render(<QuizModule />);
    await userEvent.click(screen.getByText("Start Challenge"));
    expect(screen.getByText("Next Question").closest("button")).toBeDisabled();
  });

  it("completes quiz and shows results after all questions answered", async () => {
    render(<QuizModule />);
    await runQuiz(ALL_CORRECT);
    expect(screen.getByText("Quiz Complete!")).toBeInTheDocument();
  });

  it("shows perfect score message when all correct", async () => {
    render(<QuizModule />);
    await runQuiz(ALL_CORRECT);
    expect(screen.getByText(/Perfect score/)).toBeInTheDocument();
  });

  it("shows great job message for partial correct score", async () => {
    render(<QuizModule />);
    await runQuiz([
      "<a>",
      "color: blue;",
      "const",
      "event.preventDefault()",
      "align-items: center;",
      "document.getElementById()",
    ]);
    expect(screen.getByText(/Great job/)).toBeInTheDocument();
  });

  it("shows effort message for low score", async () => {
    render(<QuizModule />);
    await runQuiz([
      "<link>",
      "text-color: blue;",
      "let",
      "event.stop()",
      "align-items: center;",
      "document.getElementById()",
    ]);
    expect(screen.getByText(/Good effort/)).toBeInTheDocument();
  });

  it("resets to landing screen after Try Again click", async () => {
    render(<QuizModule />);
    await runQuiz(ALL_CORRECT);
    await userEvent.click(screen.getByText("Try Again"));
    expect(screen.getByText("Comprehensive Skills Test")).toBeInTheDocument();
  });
});
