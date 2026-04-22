import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { JsCounterDemo } from ".";

describe("JsCounterDemo", () => {
  it("renders initial count", () => {
    render(<JsCounterDemo />);
    expect(screen.getByText("let count = 0")).toBeInTheDocument();
  });

  it("increments count on button click", async () => {
    render(<JsCounterDemo />);
    await userEvent.click(screen.getByText(/count\+\+/));
    expect(screen.getByText("let count = 1")).toBeInTheDocument();
  });

  it("shows reset button only when count > 0", async () => {
    render(<JsCounterDemo />);
    expect(screen.queryByText("Reset")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText(/count\+\+/));
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  it("resets count to 0 on reset click", async () => {
    render(<JsCounterDemo />);
    await userEvent.click(screen.getByText(/count\+\+/));
    await userEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("let count = 0")).toBeInTheDocument();
  });
});
