import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { TabSwitcher } from ".";

describe("TabSwitcher", () => {
  it("renders both tabs", () => {
    render(<TabSwitcher active="learn" onChange={() => {}} />);
    expect(screen.getByText("Learn & Build")).toBeInTheDocument();
    expect(screen.getByText("Final Exam")).toBeInTheDocument();
  });

  it("calls onChange with 'quiz' when Final Exam is clicked", async () => {
    const onChange = vi.fn();
    render(<TabSwitcher active="learn" onChange={onChange} />);
    await userEvent.click(screen.getByText("Final Exam"));
    expect(onChange).toHaveBeenCalledWith("quiz");
  });

  it("calls onChange with 'learn' when Learn & Build is clicked", async () => {
    const onChange = vi.fn();
    render(<TabSwitcher active="quiz" onChange={onChange} />);
    await userEvent.click(screen.getByText("Learn & Build"));
    expect(onChange).toHaveBeenCalledWith("learn");
  });

  it("applies active styles to the active tab", () => {
    render(<TabSwitcher active="learn" onChange={() => {}} />);
    const learnBtn = screen.getByText("Learn & Build").closest("button");
    expect(learnBtn).toHaveClass("bg-white");
  });
});
