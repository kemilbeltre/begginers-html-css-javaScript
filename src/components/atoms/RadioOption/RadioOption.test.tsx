import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { RadioOption } from ".";

describe("RadioOption", () => {
  it("renders the label", () => {
    render(<RadioOption label="Option A" selected={false} onClick={() => {}} />);
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("shows filled indicator when selected", () => {
    const { container } = render(<RadioOption label="A" selected={true} onClick={() => {}} />);
    expect(container.querySelector(".bg-indigo-600.rounded-full")).toBeTruthy();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<RadioOption label="A" selected={false} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies selected styles when selected", () => {
    render(<RadioOption label="A" selected={true} onClick={() => {}} />);
    expect(screen.getByRole("button")).toHaveClass("border-indigo-600");
  });
});
