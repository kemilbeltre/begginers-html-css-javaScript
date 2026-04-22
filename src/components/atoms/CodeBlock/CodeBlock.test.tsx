import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { CodeBlock } from ".";

describe("CodeBlock", () => {
  it("renders the code content", () => {
    render(<CodeBlock code="const x = 1;" filename="script.js" />);
    expect(screen.getByText("const x = 1;")).toBeInTheDocument();
  });

  it("renders the filename", () => {
    render(<CodeBlock code="const x = 1;" filename="script.js" />);
    expect(screen.getByText("script.js")).toBeInTheDocument();
  });
});
