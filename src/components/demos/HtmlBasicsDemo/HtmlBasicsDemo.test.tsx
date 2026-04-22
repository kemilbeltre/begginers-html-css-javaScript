import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { HtmlBasicsDemo } from ".";

describe("HtmlBasicsDemo", () => {
  it("renders the heading, paragraph and button", () => {
    render(<HtmlBasicsDemo />);
    expect(screen.getByText("Welcome to my website!")).toBeInTheDocument();
    expect(screen.getByText("This is a paragraph of text.")).toBeInTheDocument();
    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });
});
