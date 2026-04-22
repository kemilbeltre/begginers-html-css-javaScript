import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ProgressBar } from ".";

describe("ProgressBar", () => {
  it("renders with correct aria attributes", () => {
    render(<ProgressBar current={3} total={6} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "50");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("sets width based on percentage", () => {
    render(<ProgressBar current={1} total={4} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveStyle({ width: "25%" });
  });
});
