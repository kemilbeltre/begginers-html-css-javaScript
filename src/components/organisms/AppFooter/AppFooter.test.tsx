import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { AppFooter } from ".";

describe("AppFooter", () => {
  it("renders footer text", () => {
    render(<AppFooter />);
    expect(screen.getByText(/interactive environment/i)).toBeInTheDocument();
  });
});
