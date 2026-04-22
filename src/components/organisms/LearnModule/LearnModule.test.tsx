import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { LearnModule } from ".";

describe("LearnModule", () => {
  it("renders the default lesson (html-basics)", () => {
    render(<LearnModule />);
    expect(screen.getByText("Basics & Tags")).toBeInTheDocument();
  });

  it("switches lesson content when sidebar item is clicked", async () => {
    render(<LearnModule />);
    await userEvent.click(screen.getByText("2. Forms & Inputs"));
    expect(screen.getByText("Forms & Inputs")).toBeInTheDocument();
  });
});
