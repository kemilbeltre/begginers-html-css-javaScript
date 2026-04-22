import type { QuizQuestion } from "@types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: "html",
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<hyperlink>", "<href>"],
    correctAnswer: 1,
    explanation: "The <a> (anchor) tag creates hyperlinks. The 'href' attribute specifies the URL.",
  },
  {
    id: 2,
    topic: "css",
    question: "How do you change the text color of an element in CSS?",
    options: ["text-color: blue;", "color: blue;", "font-color: blue;", "fgcolor: blue;"],
    correctAnswer: 1,
    explanation: "The 'color' property specifically controls the text (foreground) color.",
  },
  {
    id: 3,
    topic: "js",
    question: "Which keyword is used to declare a variable that CANNOT be reassigned?",
    options: ["let", "var", "const", "static"],
    correctAnswer: 2,
    explanation: "'const' stands for constant. 'let' and 'var' allow reassignment.",
  },
  {
    id: 4,
    topic: "html",
    question:
      "In an HTML form, what prevents the page from refreshing immediately when you click submit?",
    options: ["event.stop()", "form.pause()", "event.preventDefault()", "return false;"],
    correctAnswer: 2,
    explanation:
      "event.preventDefault() is used in JavaScript to stop the form's default behavior, which is refreshing the page.",
  },
  {
    id: 5,
    topic: "css",
    question: "In Flexbox, which property pushes items apart to the edges of the container?",
    options: [
      "justify-content: space-between;",
      "align-items: center;",
      "flex-direction: column;",
      "margin: auto;",
    ],
    correctAnswer: 0,
    explanation:
      "justify-content: space-between distributes items evenly, pushing the first item to the start and the last item to the end.",
  },
  {
    id: 6,
    topic: "js",
    question: "Which JS method is modernly used to select an HTML element by its class name?",
    options: [
      "document.getElementById()",
      "document.findClass()",
      "document.querySelector('.classname')",
      "document.html()",
    ],
    correctAnswer: 2,
    explanation:
      "querySelector is the modern, versatile way to select elements using CSS-style selectors (like '.' for classes).",
  },
];
