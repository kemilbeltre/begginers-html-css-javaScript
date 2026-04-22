import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { quizQuestions } from "@data/quizQuestions";

import { useQuiz } from ".";

describe("useQuiz", () => {
  it("starts in idle state", () => {
    const { result } = renderHook(() => useQuiz());
    expect(result.current.started).toBe(false);
    expect(result.current.finished).toBe(false);
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.score).toBe(0);
  });

  it("transitions to started after start()", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.start());
    expect(result.current.started).toBe(true);
  });

  it("has hasAnswered false before selecting", () => {
    const { result } = renderHook(() => useQuiz());
    expect(result.current.hasAnswered).toBe(false);
  });

  it("sets hasAnswered true after selectAnswer()", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.selectAnswer(0));
    expect(result.current.hasAnswered).toBe(true);
  });

  it("advances to next question on advance()", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.selectAnswer(0));
    act(() => result.current.advance());
    expect(result.current.currentIndex).toBe(1);
  });

  it("sets finished when advance() called on last question", () => {
    const { result } = renderHook(() => useQuiz());
    for (let i = 0; i < quizQuestions.length; i++) {
      act(() => result.current.selectAnswer(0));
      act(() => result.current.advance());
    }
    expect(result.current.finished).toBe(true);
  });

  it("calculates correct score", () => {
    const { result } = renderHook(() => useQuiz());
    quizQuestions.forEach((q) => {
      act(() => result.current.selectAnswer(q.correctAnswer));
      act(() => result.current.advance());
    });
    expect(result.current.score).toBe(quizQuestions.length);
  });

  it("isLastQuestion is true on the last question", () => {
    const { result } = renderHook(() => useQuiz());
    for (let i = 0; i < quizQuestions.length - 1; i++) {
      act(() => result.current.selectAnswer(0));
      act(() => result.current.advance());
    }
    expect(result.current.isLastQuestion).toBe(true);
  });

  it("resets all state on reset()", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.start());
    act(() => result.current.selectAnswer(1));
    act(() => result.current.reset());
    expect(result.current.started).toBe(false);
    expect(result.current.finished).toBe(false);
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.answers).toEqual({});
  });

  it("exposes correct total", () => {
    const { result } = renderHook(() => useQuiz());
    expect(result.current.total).toBe(quizQuestions.length);
  });
});
