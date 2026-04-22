import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { HtmlFormsDemo } from ".";

describe("HtmlFormsDemo", () => {
  it("renders the form initially", () => {
    render(<HtmlFormsDemo />);
    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
    expect(screen.getByText("Submit Form")).toBeInTheDocument();
  });

  it("shows success message after submitting a name", async () => {
    render(<HtmlFormsDemo />);
    await userEvent.type(screen.getByLabelText("Your Name"), "Kemil");
    await userEvent.click(screen.getByText("Submit Form"));
    expect(screen.getByText("Form Submitted!")).toBeInTheDocument();
    expect(screen.getByText("Welcome to the project, Kemil!")).toBeInTheDocument();
  });

  it("does not submit when name is empty", async () => {
    render(<HtmlFormsDemo />);
    await userEvent.click(screen.getByText("Submit Form"));
    expect(screen.queryByText("Form Submitted!")).not.toBeInTheDocument();
  });

  it("resets the form after clicking Reset Form", async () => {
    render(<HtmlFormsDemo />);
    await userEvent.type(screen.getByLabelText("Your Name"), "Kemil");
    await userEvent.click(screen.getByText("Submit Form"));
    await userEvent.click(screen.getByText("Reset Form"));
    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
  });
});
