import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { lessons } from "@data/lessons";

import { LessonContent } from ".";

describe("LessonContent", () => {
  it("renders the lesson title (without number)", () => {
    render(<LessonContent lesson={lessons["html-basics"]} />);
    expect(screen.getByText("Basics & Tags")).toBeInTheDocument();
  });

  it("renders the lesson content text", () => {
    render(<LessonContent lesson={lessons["html-basics"]} />);
    expect(screen.getByText(/HyperText Markup Language/)).toBeInTheDocument();
  });

  it("renders the code block filename", () => {
    render(<LessonContent lesson={lessons["html-basics"]} />);
    expect(screen.getByText("script.html")).toBeInTheDocument();
  });

  it("renders the lesson quiz section", () => {
    render(<LessonContent lesson={lessons["html-basics"]} />);
    expect(screen.getByText(/Lesson Quiz/)).toBeInTheDocument();
  });
});
