import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { LessonSidebar } from ".";

describe("LessonSidebar", () => {
  it("renders all category group labels", () => {
    render(<LessonSidebar activeLesson="html-basics" onSelect={() => {}} />);
    expect(screen.getByText("HTML Fundamentals")).toBeInTheDocument();
    expect(screen.getByText("CSS Fundamentals")).toBeInTheDocument();
    expect(screen.getByText("JS Fundamentals")).toBeInTheDocument();
  });

  it("calls onSelect when a lesson is clicked", async () => {
    const onSelect = vi.fn();
    render(<LessonSidebar activeLesson="html-basics" onSelect={onSelect} />);
    await userEvent.click(screen.getByText("2. Forms & Inputs"));
    expect(onSelect).toHaveBeenCalledWith("html-forms");
  });
});
