const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    answer: "Paris",
    joke: "Why don’t scientists trust atoms? Because they make up everything!"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
    joke: "Why did the sun go to school? To get brighter!"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Charles Dickens"],
    answer: "William Shakespeare",
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised."
  },
  {
    question: "What is 10 + 4?",
    options: ["14", "15", "16", "13"],
    answer: "14",
    joke: "Why don’t skeletons fight each other? They don’t have the guts."
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const q = quizData[currentQuestionIndex];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(button);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selectedOption) {
  const q = quizData[currentQuestionIndex];
  const resultDiv = document.getElementById("result");

  if (selectedOption === q.answer) {
    resultDiv.textContent = "✅ Correct!";
  } else {
    resultDiv.textContent = `❌ Wrong! Correct answer: ${q.answer}`;
  }

  document.getElementById("joke").textContent = q.joke;

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById("question").textContent = "🎉 You've completed the quiz!";
      document.getElementById("options").innerHTML = "";
      document.getElementById("result").textContent = "";
    }
  }, 3000);
}

// Start the quiz
loadQuestion();

