import { describe, it, expect } from "vitest";

import { lessons, LESSON_CATEGORIES } from ".";

describe("lessons data", () => {
  it("contains all 6 lesson keys", () => {
    expect(Object.keys(lessons)).toHaveLength(6);
  });

  it("each lesson has required fields", () => {
    Object.values(lessons).forEach((lesson) => {
      expect(lesson.category).toBeTruthy();
      expect(lesson.title).toBeTruthy();
      expect(lesson.content).toBeTruthy();
      expect(lesson.codeSnippet).toBeTruthy();
      expect(lesson.demoTitle).toBeTruthy();
      expect(lesson.DemoComponent).toBeTruthy();
    });
  });

  it("each lesson has at least one quiz question", () => {
    Object.values(lessons).forEach((lesson) => {
      expect(lesson.questions.length).toBeGreaterThanOrEqual(1);
      lesson.questions.forEach((q) => {
        expect(q.id).toBeGreaterThan(0);
        expect(q.topic).toMatch(/^(html|css|js)$/);
        expect(q.question).toBeTruthy();
        expect(q.options).toHaveLength(4);
        expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(q.explanation).toBeTruthy();
      });
    });
  });

  it("LESSON_CATEGORIES contains HTML, CSS, JS", () => {
    expect(LESSON_CATEGORIES).toEqual(["HTML", "CSS", "JS"]);
  });
});
