import { describe, it, expect } from "vitest";

import { quizQuestions } from ".";

describe("quizQuestions data", () => {
  it("contains 6 questions", () => {
    expect(quizQuestions).toHaveLength(6);
  });

  it("each question has required fields", () => {
    quizQuestions.forEach((q) => {
      expect(q.id).toBeGreaterThan(0);
      expect(q.topic).toMatch(/^(html|css|js)$/);
      expect(q.question).toBeTruthy();
      expect(q.options).toHaveLength(4);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.explanation).toBeTruthy();
    });
  });
});
