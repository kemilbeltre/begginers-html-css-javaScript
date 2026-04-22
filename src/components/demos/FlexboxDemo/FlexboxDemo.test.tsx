import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { FlexboxDemo } from ".";

describe("FlexboxDemo", () => {
  it("renders all three option buttons", () => {
    render(<FlexboxDemo />);
    expect(screen.getByText("flex-start")).toBeInTheDocument();
    expect(screen.getByText("center")).toBeInTheDocument();
    expect(screen.getByText("space-between")).toBeInTheDocument();
  });

  it("renders 3 flex items", () => {
    render(<FlexboxDemo />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("switches justify class when option clicked", async () => {
    const { container } = render(<FlexboxDemo />);
    const flexContainer = container.querySelector(".bg-gray-100");
    expect(flexContainer).toHaveClass("justify-start");
    await userEvent.click(screen.getByText("center"));
    expect(flexContainer).toHaveClass("justify-center");
    await userEvent.click(screen.getByText("space-between"));
    expect(flexContainer).toHaveClass("justify-between");
  });
});
