import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { AppHeader } from ".";

describe("AppHeader", () => {
  it("renders the app title", () => {
    render(<AppHeader activeTab="learn" onTabChange={() => {}} />);
    expect(screen.getByText("WebDev")).toBeInTheDocument();
    expect(screen.getByText("Bootcamp")).toBeInTheDocument();
  });

  it("calls onTabChange when quiz tab clicked", async () => {
    const onTabChange = vi.fn();
    render(<AppHeader activeTab="learn" onTabChange={onTabChange} />);
    await userEvent.click(screen.getByText("Final Exam"));
    expect(onTabChange).toHaveBeenCalledWith("quiz");
  });
});
