import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Badge } from ".";

describe("Badge", () => {
  it("renders the label", () => {
    render(<Badge label="HTML" />);
    expect(screen.getByText("HTML")).toBeInTheDocument();
  });

  it("applies category style for HTML", () => {
    const { container } = render(<Badge label="HTML" category="HTML" />);
    expect(container.firstChild).toHaveClass("bg-orange-100");
  });

  it("applies category style for CSS", () => {
    const { container } = render(<Badge label="CSS" category="CSS" />);
    expect(container.firstChild).toHaveClass("bg-blue-100");
  });

  it("applies category style for JS", () => {
    const { container } = render(<Badge label="JS" category="JS" />);
    expect(container.firstChild).toHaveClass("bg-yellow-100");
  });

  it("uses default style when no category provided", () => {
    const { container } = render(<Badge label="General" />);
    expect(container.firstChild).toHaveClass("bg-gray-100");
  });
});
