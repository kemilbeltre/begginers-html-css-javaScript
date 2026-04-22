import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { lessons } from "@data/lessons";

import { LessonNavItem } from ".";

const mockLesson = lessons["html-basics"];

describe("LessonNavItem", () => {
  it("renders the lesson title", () => {
    render(
      <LessonNavItem
        lessonKey="html-basics"
        lesson={mockLesson}
        isActive={false}
        onClick={() => {}}
      />
    );
    expect(screen.getByText("1. Basics & Tags")).toBeInTheDocument();
  });

  it("applies active styles when isActive is true", () => {
    render(
      <LessonNavItem
        lessonKey="html-basics"
        lesson={mockLesson}
        isActive={true}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toHaveClass("shadow-md");
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(
      <LessonNavItem
        lessonKey="html-basics"
        lesson={mockLesson}
        isActive={false}
        onClick={onClick}
      />
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
