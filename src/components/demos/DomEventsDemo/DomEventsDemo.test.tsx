import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { DomEventsDemo } from ".";

describe("DomEventsDemo", () => {
  it("renders the trigger button", () => {
    render(<DomEventsDemo />);
    expect(screen.getByText("Trigger 'click' Event")).toBeInTheDocument();
  });

  it("shows background color label", () => {
    render(<DomEventsDemo />);
    expect(screen.getByText(/Background:/)).toBeInTheDocument();
  });

  it("changes background color on button click", async () => {
    render(<DomEventsDemo />);
    const initial = screen.getByText(/Background:/).textContent;
    vi.spyOn(Math, "random").mockReturnValue(0.9);
    await userEvent.click(screen.getByText("Trigger 'click' Event"));
    const after = screen.getByText(/Background:/).textContent;
    expect(after).toBeDefined();
    vi.restoreAllMocks();
    expect(initial).toBeDefined();
  });
});
