import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { DemoViewer } from ".";

describe("DemoViewer", () => {
  it("renders the title", () => {
    render(
      <DemoViewer
        title="Test Demo"
        borderColor="border-orange-200"
        DemoComponent={() => <div>Demo Content</div>}
      />
    );
    expect(screen.getByText("Test Demo")).toBeInTheDocument();
    expect(screen.getByText("Demo Content")).toBeInTheDocument();
  });
});
