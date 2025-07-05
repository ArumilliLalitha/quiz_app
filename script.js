const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "None of the above"],
    answer: 1
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2000", "2005", "2010"],
    answer: 0
  },
  {
    question: "Who developed Python?",
    options: [" Dennis Ritchie", " James Gosling", " Guido van Rossum", " Elon Musk"],
    answer: 2
  },
  {
    question: "Which programming language is used for web apps?",
    options: [" Python", " JavaScript", "C++", " Java"],
    answer: 1
  },
  {
    question: "What will be the output of the following code snippet? print(2*3 + (5 + 6)*(1 + 1))",
    options: [" 129", " 8", " 121", " None"],
    answer: 0

  },
  {
    question : "What is the maximum length of a Python identifier?",
    options : [" 32", "16", "128"," None"],
    answer : 1
  },
  {
    question : "Which type of Programming does Python support?",
    options : [" object-oriented programming", "structured programming", "functional programming"," all of the mentioned"],
    answer : 3
  },
  {
    question : " Which of the following is the correct extension of the Python file?",
    options : [" .python", ".pl", " .py"," .p"],
    answer : 2
  },
  {
    question : " Which of the following is used to define a block of code in Python language?",
    options : ["Indentation", "Key", "Brackets", " All of the mentioned"],
    answer : 0
  },
  {
    question : " What will be the value of the following Python expression? print(4 + 3 % 5)",
    options : ["7", " 2", "4", "1"],
    answer : 0
  },
];

let currentQuestion = 0;
let score = 0;
let questionAnswered = false; 

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const buttons = document.getElementsByClassName("answer-btn");
  const prevBtn = document.getElementById("prev-btn");
  questionAnswered = false;
  // Load question text
  questionEl.innerText = quizData[currentQuestion].question;

  // Load options
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = quizData[currentQuestion].options[i];
    buttons[i].disabled = false;
    buttons[i].style.backgroundColor = "#ddd";
  }

  // Hide Previous button on first question
  if (currentQuestion === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }
}

function selectAnswer(index) {
  if (questionAnswered) return; 
  questionAnswered = true;     
  const buttons = document.getElementsByClassName("answer-btn");
  const correctIndex = quizData[currentQuestion].answer;

  if (index === correctIndex) {
    buttons[index].style.backgroundColor = "lightgreen";
    score++;
  } else {
    buttons[index].style.backgroundColor = "tomato";
    buttons[correctIndex].style.backgroundColor = "lightgreen";
  }

  // Disable all buttons
  for (let btn of buttons) {
    btn.disabled = true;
  }
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function showResult() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `
    <h2>You scored ${score}/${quizData.length}!</h2>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

// Load first question on page load
loadQuestion();
