import {
  HtmlBasicsDemo,
  HtmlFormsDemo,
  CssBoxModelDemo,
  FlexboxDemo,
  JsCounterDemo,
  DomEventsDemo,
} from "@demos";
import { Code, Edit3, Layout, AlignJustify, Terminal, MousePointer } from "lucide-react";

import type { LessonsMap } from "@types/lesson";

export const lessons: LessonsMap = {
  "html-basics": {
    category: "HTML",
    title: "1. Basics & Tags",
    icon: <Code className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    content:
      'HTML (HyperText Markup Language) is the foundation of every webpage. It provides the structure and content. We use "tags" wrapped in angle brackets to define elements. Every page needs a skeleton.',
    codeSnippet:
      "<main>\n  <h1>Welcome to my website!</h1>\n  <p>This is a paragraph of text.</p>\n  <button>Click Me!</button>\n</main>",
    demoTitle: "HTML Rendering Demo",
    DemoComponent: HtmlBasicsDemo,
    questions: [
      {
        id: 101,
        topic: "html",
        question: "Which tag is used to display the most important heading on a webpage?",
        options: ["<title>", "<head>", "<h1>", "<header>"],
        correctAnswer: 2,
        explanation:
          "The <h1> tag defines the top-level heading. HTML offers <h1> through <h6> for different heading levels.",
      },
      {
        id: 102,
        topic: "html",
        question: "Which HTML element defines a paragraph?",
        options: ["<para>", "<p>", "<text>", "<pg>"],
        correctAnswer: 1,
        explanation: "The <p> tag defines a paragraph in HTML.",
      },
    ],
  },
  "html-forms": {
    category: "HTML",
    title: "2. Forms & Inputs",
    icon: <Edit3 className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    content:
      "Forms allow users to interact with your website by submitting data. You use the <form> tag along with various <input> tags (like text, email, or password) and a submit <button>.",
    codeSnippet:
      '<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" placeholder="Enter your name" />\n  <button type="submit">Send</button>\n</form>',
    demoTitle: "Interactive Form Demo",
    DemoComponent: HtmlFormsDemo,
    questions: [
      {
        id: 103,
        topic: "html",
        question: "In an HTML form, what prevents the page from refreshing when you click submit?",
        options: ["event.stop()", "form.pause()", "event.preventDefault()", "return false;"],
        correctAnswer: 2,
        explanation:
          "event.preventDefault() stops the form's default behavior of refreshing the page.",
      },
      {
        id: 104,
        topic: "html",
        question: "Which input type attribute is used for collecting email addresses?",
        options: ['type="text"', 'type="mail"', 'type="email"', 'type="address"'],
        correctAnswer: 2,
        explanation: 'type="email" tells the browser to validate the input as an email address.',
      },
    ],
  },
  "css-basics": {
    category: "CSS",
    title: "3. Box Model & Colors",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    content:
      'CSS (Cascading Style Sheets) makes HTML beautiful. The "Box Model" is a crucial concept: every element is a box with margins (outside space), borders, padding (inside space), and the core content.',
    codeSnippet:
      ".my-box {\n  background-color: blue;\n  border-radius: 10px;\n  padding: 20px;\n  color: white;\n}",
    demoTitle: "Interactive CSS Box Model",
    DemoComponent: CssBoxModelDemo,
    questions: [
      {
        id: 105,
        topic: "css",
        question: "How do you change the text color of an element in CSS?",
        options: ["text-color: blue;", "color: blue;", "font-color: blue;", "fgcolor: blue;"],
        correctAnswer: 1,
        explanation: "The 'color' property specifically controls the text (foreground) color.",
      },
      {
        id: 106,
        topic: "css",
        question: "What does the CSS 'border-radius' property do?",
        options: ["Adds a border", "Makes corners rounded", "Sets border color", "Adds a shadow"],
        correctAnswer: 1,
        explanation: "border-radius rounds the corners of an element's outer border edge.",
      },
    ],
  },
  "css-flexbox": {
    category: "CSS",
    title: "4. Flexbox Layouts",
    icon: <AlignJustify className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    content:
      "Flexbox is a one-dimensional layout method for laying out items in rows or columns. It makes alignment and spacing items incredibly easy, solving many old CSS headaches!",
    codeSnippet:
      ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
    demoTitle: "Flexbox Playground",
    DemoComponent: FlexboxDemo,
    questions: [
      {
        id: 107,
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
          "justify-content: space-between distributes items evenly, pushing the first to the start and the last to the end.",
      },
      {
        id: 108,
        topic: "css",
        question: "Which CSS property enables flexbox on a container?",
        options: ["display: block;", "display: inline;", "display: flex;", "display: grid;"],
        correctAnswer: 2,
        explanation: "display: flex turns an element into a flex container.",
      },
    ],
  },
  "js-basics": {
    category: "JS",
    title: "5. Logic & State",
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    content:
      'JavaScript is the brain of the webpage. It handles logic, math, and keeps track of "state" (data that changes). We use variables (let, const) to store this data.',
    codeSnippet:
      'let count = 0;\n\nfunction increment() {\n  count = count + 1;\n  console.log("Current count:", count);\n}',
    demoTitle: "JavaScript Counter",
    DemoComponent: JsCounterDemo,
    questions: [
      {
        id: 109,
        topic: "js",
        question: "Which keyword is used to declare a variable that CANNOT be reassigned?",
        options: ["let", "var", "const", "static"],
        correctAnswer: 2,
        explanation: "'const' stands for constant. 'let' and 'var' allow reassignment.",
      },
      {
        id: 110,
        topic: "js",
        question: "What does the '+=' operator do in JavaScript?",
        options: [
          "Adds two numbers and prints the result",
          "Increments a variable by a value and reassigns it",
          "Checks if two values are equal",
          "Creates a new variable",
        ],
        correctAnswer: 1,
        explanation: "+= is shorthand for x = x + value. It adds and reassigns in one step.",
      },
    ],
  },
  "js-dom": {
    category: "JS",
    title: "6. DOM Events",
    icon: <MousePointer className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    content:
      'The Document Object Model (DOM) is how JavaScript sees your HTML. You can use JS to select HTML elements and add "Event Listeners" to make them react to clicks, typing, or hovering!',
    codeSnippet:
      "const btn = document.querySelector('.color-btn');\n\nbtn.addEventListener('click', () => {\n  document.body.style.backgroundColor = 'red';\n});",
    demoTitle: "Color Flipper Event Demo",
    DemoComponent: DomEventsDemo,
    questions: [
      {
        id: 111,
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
          "querySelector is the modern, versatile way to select elements using CSS-style selectors.",
      },
      {
        id: 112,
        topic: "js",
        question: "What method is used to attach an event handler to a DOM element?",
        options: [
          "element.onEvent()",
          "element.addEvent()",
          "element.addEventListener()",
          "element.listenFor()",
        ],
        correctAnswer: 2,
        explanation:
          "addEventListener() is the standard way to attach event handlers to DOM elements.",
      },
    ],
  },
};

export const LESSON_CATEGORIES = ["HTML", "CSS", "JS"] as const;
