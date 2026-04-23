import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle,
  Code,
  Layout,
  Terminal,
  Play,
  RotateCcw,
  Award,
  ChevronRight,
  MonitorPlay,
  Edit3,
  AlignJustify,
  MousePointer,
} from "lucide-react";

// --- DATA: Comprehensive Lessons ---
const lessons = {
  // HTML Category
  "html-basics": {
    category: "HTML",
    title: "1. Basics & Tags",
    icon: <Code className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    content: `HTML (HyperText Markup Language) is the foundation of every webpage. It provides the structure and content. We use "tags" wrapped in angle brackets to define elements. Every page needs a skeleton.`,
    codeSnippet: `<main>\n  <h1>Welcome to my website!</h1>\n  <p>This is a paragraph of text.</p>\n  <button>Click Me!</button>\n</main>`,
    demoTitle: "HTML Rendering Demo",
    DemoComponent: () => (
      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg bg-white text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome to my website!</h1>
        <p className="text-gray-600 mb-4">This is a paragraph of text.</p>
        <button className="bg-gray-200 text-black px-4 py-2 rounded border border-gray-400">
          Click Me!
        </button>
      </div>
    ),
  },
  "html-forms": {
    category: "HTML",
    title: "2. Forms & Inputs",
    icon: <Edit3 className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    content: `Forms allow users to interact with your website by submitting data. You use the <form> tag along with various <input> tags (like text, email, or password) and a submit <button>.`,
    codeSnippet: `<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" placeholder="Enter your name" />\n  <button type="submit">Send</button>\n</form>`,
    demoTitle: "Interactive Form Demo",
    DemoComponent: () => {
      const [name, setName] = useState("");
      const [submitted, setSubmitted] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) setSubmitted(true);
      };

      return (
        <div className="bg-white p-6 rounded-lg border shadow-sm max-w-sm mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-left">
                <label htmlFor="demo-name" className="text-sm font-bold text-gray-700">
                  Your Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kemil"
                  className="border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition"
              >
                Submit Form
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-4xl mb-2">👋</div>
              <h3 className="text-xl font-bold text-green-600">Form Submitted!</h3>
              <p className="text-gray-600 mt-2">Welcome to the project, {name}!</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                }}
                className="mt-4 text-sm text-gray-500 underline"
              >
                Reset Form
              </button>
            </div>
          )}
        </div>
      );
    },
  },

  // CSS Category
  "css-basics": {
    category: "CSS",
    title: "3. Box Model & Colors",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    content: `CSS (Cascading Style Sheets) makes HTML beautiful. The "Box Model" is a crucial concept: every element is a box with margins (outside space), borders, padding (inside space), and the core content.`,
    codeSnippet: `.my-box {\n  background-color: blue;\n  border-radius: 10px;\n  padding: 20px;\n  color: white;\n}`,
    demoTitle: "Interactive CSS Box Model",
    DemoComponent: () => {
      const [isRounded, setIsRounded] = useState(false);
      const [hasPadding, setHasPadding] = useState(false);

      return (
        <div className="flex flex-col items-center gap-6">
          <div className="border-4 border-dashed border-gray-300 p-2 relative bg-gray-50">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-mono">
              Margin Area
            </span>
            <div
              className={`transition-all duration-300 bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg
                ${isRounded ? "rounded-full" : "rounded-none"} 
                ${hasPadding ? "w-40 h-40" : "w-24 h-24"}
              `}
            >
              Content
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsRounded(!isRounded)}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium shadow-sm"
            >
              Toggle border-radius
            </button>
            <button
              onClick={() => setHasPadding(!hasPadding)}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium shadow-sm"
            >
              Toggle padding
            </button>
          </div>
        </div>
      );
    },
  },
  "css-flexbox": {
    category: "CSS",
    title: "4. Flexbox Layouts",
    icon: <AlignJustify className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    content: `Flexbox is a one-dimensional layout method for laying out items in rows or columns. It makes alignment and spacing items incredibly easy, solving many old CSS headaches!`,
    codeSnippet: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
    demoTitle: "Flexbox Playground",
    DemoComponent: () => {
      const [justify, setJustify] = useState("justify-start");
      return (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-center mb-2">
            <button
              onClick={() => setJustify("justify-start")}
              className={`px-2 py-1 text-xs rounded ${
                justify === "justify-start" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              flex-start
            </button>
            <button
              onClick={() => setJustify("justify-center")}
              className={`px-2 py-1 text-xs rounded ${
                justify === "justify-center" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              center
            </button>
            <button
              onClick={() => setJustify("justify-between")}
              className={`px-2 py-1 text-xs rounded ${
                justify === "justify-between" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              space-between
            </button>
          </div>
          <div
            className={`flex ${justify} items-center bg-gray-100 border-2 border-blue-200 h-24 p-2 rounded transition-all duration-500`}
          >
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-bold rounded">
              1
            </div>
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-bold rounded">
              2
            </div>
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-bold rounded">
              3
            </div>
          </div>
        </div>
      );
    },
  },

  // JS Category
  "js-basics": {
    category: "JS",
    title: "5. Logic & State",
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    content: `JavaScript is the brain of the webpage. It handles logic, math, and keeps track of "state" (data that changes). We use variables (let, const) to store this data.`,
    codeSnippet: `let count = 0;\n\nfunction increment() {\n  count = count + 1;\n  console.log("Current count:", count);\n}`,
    demoTitle: "JavaScript Counter",
    DemoComponent: () => {
      const [count, setCount] = useState(0);
      return (
        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-lg font-mono bg-gray-100 px-4 py-2 rounded border border-gray-200">
            let count = {count};
          </p>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm active:transform active:scale-95"
          >
            <Play size={18} /> count++
          </button>
          {count > 0 && (
            <button
              onClick={() => setCount(0)}
              className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
            >
              <RotateCcw size={14} /> Reset
            </button>
          )}
        </div>
      );
    },
  },
  "js-dom": {
    category: "JS",
    title: "6. DOM Events",
    icon: <MousePointer className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    content: `The Document Object Model (DOM) is how JavaScript sees your HTML. You can use JS to select HTML elements and add "Event Listeners" to make them react to clicks, typing, or hovering!`,
    codeSnippet: `const btn = document.querySelector('.color-btn');\n\nbtn.addEventListener('click', () => {\n  document.body.style.backgroundColor = 'red';\n});`,
    demoTitle: "Color Flipper Event Demo",
    DemoComponent: () => {
      const colors = ["#f8fafc", "#fef08a", "#bbf7d0", "#bfdbfe", "#fecaca", "#e9d5ff"];
      const [bgColor, setBgColor] = useState(colors[0]);

      const flipColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
      };

      return (
        <div
          className="flex flex-col items-center justify-center p-8 rounded-lg transition-colors duration-500 border border-gray-200 shadow-inner"
          style={{ backgroundColor: bgColor }}
        >
          <p className="mb-4 font-mono text-gray-700 bg-white/50 px-3 py-1 rounded">
            Background: {bgColor}
          </p>
          <button
            onClick={flipColor}
            className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Trigger 'click' Event
          </button>
        </div>
      );
    },
  },
};

// --- DATA: Expanded Quiz Questions ---
const quizQuestions = [
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

// --- MAIN COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState("learn");
  const [activeLesson, setActiveLesson] = useState("html-basics");

  // Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  // --- HANDLERS ---
  const handleAnswerSelect = (optionIdx) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [quizQuestions[currentQuestionIdx].id]: optionIdx,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score += 1;
    });
    return score;
  };

  // --- RENDERERS ---
  const renderLearnModule = () => {
    const lesson = lessons[activeLesson];

    // Group lessons by category for the sidebar
    const categories = ["HTML", "CSS", "JS"];

    return (
      <div className="grid md:grid-cols-3 gap-8">
        {/* Sidebar Nav (Grouped) */}
        <div className="md:col-span-1 flex flex-col gap-6">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">
                {category} Fundamentals
              </h3>
              <div className="flex flex-col gap-2">
                {Object.entries(lessons)
                  .filter(([_, data]) => data.category === category)
                  .map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveLesson(key)}
                      className={`p-3 rounded-xl flex items-center gap-3 transition-all duration-200 text-left ${
                        activeLesson === key
                          ? `${data.color} shadow-md border-2 transform scale-[1.02]`
                          : "bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      <div className="bg-white p-1.5 rounded-lg shadow-sm">{data.icon}</div>
                      <span className="font-semibold text-sm">{data.title}</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Category: {lesson.category}
            </div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              {lesson.icon}
              {lesson.title.substring(lesson.title.indexOf(".") + 2)}{" "}
              {/* Remove number from title header */}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{lesson.content}</p>

            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-inner mb-8">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-400 text-xs ml-2 font-mono">
                  script.{lesson.category.toLowerCase()}
                </span>
              </div>
              <pre className="p-4 text-slate-300 font-mono text-sm overflow-x-auto">
                <code>{lesson.codeSnippet}</code>
              </pre>
            </div>

            <div className={`p-6 rounded-xl border ${lesson.color.split(" ")[1]} bg-opacity-10`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MonitorPlay className="w-5 h-5" />
                {lesson.demoTitle}
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <lesson.DemoComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizModule = () => {
    if (!quizStarted) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center max-w-2xl mx-auto">
          <div className="bg-indigo-100 p-6 rounded-full mb-6">
            <Award className="w-16 h-16 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Skills Test</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take this {quizQuestions.length}-question challenge covering HTML tags, Form logic, CSS
            Layouts, and Javascript Events!
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-2"
          >
            Start Challenge <ChevronRight />
          </button>
        </div>
      );
    }

    if (quizFinished) {
      const score = calculateScore();
      const percentage = (score / quizQuestions.length) * 100;

      return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-indigo-600 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
            <div className="text-6xl font-extrabold my-6">
              {score} <span className="text-3xl text-indigo-200">/ {quizQuestions.length}</span>
            </div>
            <p className="text-xl text-indigo-100">
              {percentage === 100
                ? "Perfect score! You're a natural."
                : percentage >= 60
                  ? "Great job! Keep practicing to master the basics."
                  : "Good effort! Review the lessons and try again."}
            </p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Review your answers:</h3>
            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const userAnswer = selectedAnswers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border ${
                      isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div className="flex gap-3 mb-3">
                      <div className="mt-1">
                        {isCorrect ? (
                          <CheckCircle className="text-green-600" />
                        ) : (
                          <RotateCcw className="text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">
                          Q{idx + 1}: {q.question}
                        </p>
                        <p className="text-sm mb-1">
                          <span className="text-gray-500 font-medium">Your answer: </span>
                          <span
                            className={
                              isCorrect
                                ? "text-green-700 font-bold"
                                : "text-red-600 font-bold line-through"
                            }
                          >
                            {userAnswer !== undefined ? q.options[userAnswer] : "Skipped"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm mb-2">
                            <span className="text-gray-500 font-medium">Correct answer: </span>
                            <span className="text-green-700 font-bold">
                              {q.options[q.correctAnswer]}
                            </span>
                          </p>
                        )}
                        <div
                          className={`mt-3 p-3 rounded-lg text-sm ${
                            isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          <span className="font-bold">Explanation:</span> {q.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={resetQuiz}
                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-5 h-5" /> Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Active Quiz
    const currentQ = quizQuestions[currentQuestionIdx];
    const hasAnswered = selectedAnswers[currentQ.id] !== undefined;

    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
            <span>
              Question {currentQuestionIdx + 1} of {quizQuestions.length}
            </span>
            <span>{Math.round((currentQuestionIdx / quizQuestions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIdx + 1) / quizQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {currentQ.topic.toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
            {currentQ.question}
          </h2>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold"
                      : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-mono text-lg">{option}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? "border-indigo-600"
                        : "border-gray-300 group-hover:border-indigo-300"
                    }`}
                  >
                    {isSelected && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!hasAnswered}
              className={`py-3 px-8 rounded-full font-bold flex items-center gap-2 transition-colors ${
                hasAnswered
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {currentQuestionIdx === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-200">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Code className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900">
              WebDev<span className="text-indigo-600">Bootcamp</span>
            </h1>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("learn")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "learn"
                  ? "bg-white shadow-sm text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Learn & Build
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "quiz"
                  ? "bg-white shadow-sm text-indigo-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <CheckCircle className="w-4 h-4" /> Final Exam
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {activeTab === "learn" ? renderLearnModule() : renderQuizModule()}
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>
          A comprehensive interactive environment simulating real-world beginner web dev
          mini-projects.
        </p>
      </footer>
    </div>
  );
}
