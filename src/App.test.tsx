import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders the header with title", () => {
    render(<App />);
    expect(screen.getByText("WebDev")).toBeInTheDocument();
  });

  it("shows LearnModule by default", () => {
    render(<App />);
    expect(screen.getByText("Basics & Tags")).toBeInTheDocument();
  });

  it("switches to QuizModule when Final Exam tab is clicked", async () => {
    render(<App />);
    await userEvent.click(screen.getByText("Final Exam"));
    expect(screen.getByText("Comprehensive Skills Test")).toBeInTheDocument();
  });

  it("switches back to LearnModule when Learn & Build tab is clicked", async () => {
    render(<App />);
    await userEvent.click(screen.getByText("Final Exam"));
    await userEvent.click(screen.getByText("Learn & Build"));
    expect(screen.getByText("Basics & Tags")).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<App />);
    expect(screen.getByText(/interactive environment/i)).toBeInTheDocument();
  });
});

// Suppress console.error for test environment
vi.spyOn(console, "error").mockImplementation(() => {});
