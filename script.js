const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter= 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside Which HTML element do we put the JavaScript",
    choice1: "<script>",
    choice2: "<javascript",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question: "Where Do Babies Come form",
    choice1: "<script>",
    choice2: "<javascript",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question: "What Does JSON stand for",
    choice1: "<script>",
    choice2: "<javascript",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
]


// game constants
const CORRECT_BONUS = 10;
const MAX_questions = 3;

function startGame() {
  questionCounter=0;
  score=0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length===0 || questionCounter > MAX_questions) {
    return window.location.assign("highscores.html")
  };
  
  
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach (choice =>{
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number]
  }); 
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

choices.forEach(choice =>{
  choice.addEventListener("click", e =>{
    if(!acceptingAnswers) return;

    acceptingAnswers= false;
    const selectedChoice = e.target;
    const selectedAnswer= selectedChoice.dataset['number'];

    const classToApply = 'incorrect';
      if (selectedAnswer == currentQuestion.answer) {
        classToApply = 'correct';
      }
 
console.log(classToApply);
    
    getNewQuestion();
  });
})
startGame();