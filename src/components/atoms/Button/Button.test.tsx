import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { Button } from ".";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByText("Go"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies primary variant by default", () => {
    const { container } = render(<Button>Primary</Button>);
    expect(container.firstChild).toHaveClass("bg-indigo-600");
  });

  it("applies secondary variant", () => {
    const { container } = render(<Button variant="secondary">Sec</Button>);
    expect(container.firstChild).toHaveClass("bg-indigo-100");
  });

  it("applies ghost variant", () => {
    const { container } = render(<Button variant="ghost">Ghost</Button>);
    expect(container.firstChild).toHaveClass("text-gray-500");
  });

  it("applies danger variant", () => {
    const { container } = render(<Button variant="danger">Danger</Button>);
    expect(container.firstChild).toHaveClass("bg-red-100");
  });

  it("merges extra className", () => {
    const { container } = render(<Button className="rounded-full">Btn</Button>);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("passes through disabled prop", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
