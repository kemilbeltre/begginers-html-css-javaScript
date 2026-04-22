import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { CssBoxModelDemo } from ".";

describe("CssBoxModelDemo", () => {
  it("renders content box and buttons", () => {
    render(<CssBoxModelDemo />);
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Toggle border-radius")).toBeInTheDocument();
    expect(screen.getByText("Toggle padding")).toBeInTheDocument();
  });

  it("toggles rounded class on click", async () => {
    render(<CssBoxModelDemo />);
    const box = screen.getByText("Content");
    expect(box).toHaveClass("rounded-none");
    await userEvent.click(screen.getByText("Toggle border-radius"));
    expect(box).toHaveClass("rounded-full");
  });

  it("toggles padding size on click", async () => {
    render(<CssBoxModelDemo />);
    const box = screen.getByText("Content");
    expect(box).toHaveClass("w-24");
    await userEvent.click(screen.getByText("Toggle padding"));
    expect(box).toHaveClass("w-40");
  });
});
