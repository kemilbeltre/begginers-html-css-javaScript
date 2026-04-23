// @ts-check
import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // ── Ignored paths ──────────────────────────────────────────────────────────
  { ignores: ["dist/**", "coverage/**", "node_modules/**", "Mini-projects/**", "public/**"] },

  // ── Base rules ─────────────────────────────────────────────────────────────
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ── Project-wide settings ──────────────────────────────────────────────────
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "import-x": importX,
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      // ── React ──────────────────────────────────────────────────────────────
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ── TypeScript ─────────────────────────────────────────────────────────
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // ── Import order ───────────────────────────────────────────────────────
      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "react-*", group: "external", position: "before" },
            { pattern: "@types/*", group: "internal", position: "before" },
            { pattern: "@i18n/*", group: "internal" },
            { pattern: "@data/*", group: "internal" },
            { pattern: "@hooks/*", group: "internal" },
            { pattern: "@components/*", group: "internal" },
            { pattern: "@atoms/*", group: "internal" },
            { pattern: "@molecules/*", group: "internal" },
            { pattern: "@organisms/*", group: "internal" },
            { pattern: "@demos/*", group: "internal" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import-x/no-duplicates": "error",
    },
  },

  // ── Prettier (must be last — disables conflicting formatting rules) ─────────
  prettierRecommended
);
