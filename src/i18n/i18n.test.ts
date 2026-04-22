import { describe, it, expect } from "vitest";

import i18n from ".";

describe("i18n", () => {
  it("has the app.title translation", () => {
    expect(i18n.t("app.title")).toBe("WebDev");
  });

  it("has the tab.learn translation", () => {
    expect(i18n.t("tab.learn")).toBe("Learn & Build");
  });

  it("has the quiz.landing.start translation", () => {
    expect(i18n.t("quiz.landing.start")).toBe("Start Challenge");
  });

  it("interpolates a single value", () => {
    expect(i18n.t("quiz.progress.question", { current: 1, total: 6 })).toBe("Question 1 of 6");
  });

  it("interpolates multiple placeholders", () => {
    expect(i18n.t("demo.forms.submitted.message", { name: "Kemil" })).toBe(
      "Welcome to the project, Kemil!"
    );
  });
});
