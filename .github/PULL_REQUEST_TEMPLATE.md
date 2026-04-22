## Description

<!-- Provide a brief summary of your changes -->

## Type of change

<!-- Check all that apply -->

- [ ] New lesson
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactor
- [ ] Translation / i18n

## Checklist

### General (all PRs)

- [ ] I have read [CONTRIBUTING.md](../CONTRIBUTING.md) in full
- [ ] My branch name follows the naming convention (`type/description`)
- [ ] My commits follow the Conventional Commits format
- [ ] `npm run test:coverage` passes — no coverage regressions
- [ ] `npm run lint` reports 0 errors
- [ ] `npm run format:check` passes

### Lesson PRs only

- [ ] I wrote all content and code myself — no AI tools were used
- [ ] The lesson teaches exactly one focused concept
- [ ] The `content` explanation is in plain English, written in my own words
- [ ] The `codeSnippet` is minimal and directly illustrates the concept
- [ ] The demo is interactive and visually demonstrates the concept
- [ ] The demo component is in `src/components/demos/YourTopicDemo/` with `index.ts` and a test file
- [ ] The demo is exported from `src/components/demos/index.ts`
- [ ] There are exactly 2 quiz questions in the `questions` array
- [ ] Each question has a unique `id` not used anywhere else
- [ ] Each question has exactly 4 options
- [ ] Each question has an `explanation` that teaches, not just confirms

## What concept does this teach? (Lesson PRs only)

<!-- Explain what learners will understand after completing this lesson -->

## Why does this belong in the bootcamp? (Lesson PRs only)

<!-- Explain how this fits into the learning path for absolute beginners -->

## Additional context

<!-- Add any other context, screenshots, or notes about the PR here -->
