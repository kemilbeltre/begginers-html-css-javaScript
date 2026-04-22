# WebDev Bootcamp

[![Tests](https://img.shields.io/badge/tests-106%20passing-brightgreen)](#)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite)](https://vitejs.dev/)

An interactive, open-source web development bootcamp for absolute beginners. Learn HTML, CSS, and JavaScript through hands-on lessons, live demos, and per-lesson quizzes — all inside the browser, no setup required.

> Built with React, TypeScript, Tailwind CSS, and Vite. Contributions welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## What you will learn

The bootcamp is organized into six progressive lessons across three categories:

| #   | Category       | Lesson               |
| --- | -------------- | -------------------- |
| 1   | **HTML**       | Basics & Tags        |
| 2   | **HTML**       | Forms & Inputs       |
| 3   | **CSS**        | Box Model & Colors   |
| 4   | **CSS**        | Flexbox Layouts      |
| 5   | **JavaScript** | Counters & Variables |
| 6   | **JavaScript** | DOM Events           |

Each lesson includes:

- A plain-English explanation of the concept
- A focused code snippet
- An interactive live demo
- A 2-question mini-quiz
- A final exam tab that covers all topics

---

## Tech stack

| Tool                                              | Purpose               |
| ------------------------------------------------- | --------------------- |
| [React 19](https://react.dev/)                    | UI framework          |
| [TypeScript 5.7](https://www.typescriptlang.org/) | Type safety           |
| [Tailwind CSS 3](https://tailwindcss.com/)        | Utility-first styling |
| [Vite 6](https://vitejs.dev/)                     | Dev server & bundler  |
| [Vitest 3](https://vitest.dev/)                   | Unit testing          |
| [Testing Library](https://testing-library.com/)   | Component testing     |
| [react-i18next](https://react.i18next.com/)       | Internationalization  |
| [ESLint 10](https://eslint.org/)                  | Linting               |
| [Prettier 3](https://prettier.io/)                | Formatting            |

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher

### Installation

```bash
git clone https://github.com/kemilbeltre/begginers-html-css-javaScript.git
cd begginers-html-css-javaScript
npm install
```

### Development

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview the production build
```

### Testing

```bash
npm test                # Run all tests
npm run test:coverage   # Run tests with 100% coverage check
```

### Code quality

```bash
npm run lint            # Check for lint errors
npm run lint:fix        # Auto-fix lint and import order
npm run format          # Format all files with Prettier
npm run format:check    # Check formatting without writing
```

---

## Project structure

```
src/
  App.tsx                        # Root component — tab routing (Learn / Quiz)
  main.tsx                       # Entry point
  i18n/
    index.ts                     # react-i18next initialization
    locales/en.json              # All UI strings (flat keys, {{var}} interpolation)
  types/
    lesson.ts                    # Lesson, LessonsMap, LessonKey, LessonCategory
    quiz.ts                      # QuizQuestion, QuizAnswers, QuizTopic
  data/
    lessons/                     # All lesson content (content, codeSnippet, demo, questions)
    quizQuestions/               # Global final-exam question bank
  hooks/
    useQuiz/                     # Quiz state machine (answer, check, advance, score)
  components/
    atoms/                       # Badge, Button, CodeBlock, ProgressBar, RadioOption
    molecules/                   # DemoViewer, LessonNavItem, QuizResultItem, TabSwitcher
    organisms/                   # AppHeader, AppFooter, LessonSidebar, LessonContent,
    │                            #   LessonQuiz, LearnModule, QuizModule
    demos/                       # Interactive demo components (one per lesson)
```

Every component lives in its own folder with a co-located test file and an `index.ts` barrel:

```
src/components/atoms/Badge/
  Badge.tsx          # Component
  Badge.test.tsx     # Tests (100% coverage required)
  index.ts           # Re-export
```

---

## Path aliases

Import aliases are configured in both `vite.config.ts` and `tsconfig.json`:

| Alias          | Resolves to                  |
| -------------- | ---------------------------- |
| `@atoms/*`     | `src/components/atoms/*`     |
| `@molecules/*` | `src/components/molecules/*` |
| `@organisms/*` | `src/components/organisms/*` |
| `@demos/*`     | `src/components/demos/*`     |
| `@hooks/*`     | `src/hooks/*`                |
| `@data/*`      | `src/data/*`                 |
| `@types/*`     | `src/types/*`                |
| `@i18n/*`      | `src/i18n/*`                 |

---

## Contributing

We welcome contributions! Whether it is a new lesson, a bug fix, a translation, or a docs improvement — check out [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

---

## Code of Conduct

This project follows the [Contributor Covenant v2.1](./CODE_OF_CONDUCT.md). By participating you agree to uphold its standards.

---

## License

[MIT](./LICENSE) © 2026 Kemil Beltre
