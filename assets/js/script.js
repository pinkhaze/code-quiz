var startButton = document.getElementById('start-button');
var startPage = document.getElementById('start-page');
var quizContent = document.getElementById('quiz-content');
var timerElement = document.getElementById("timer-count");
var endPage = document.getElementById("end-page");
var questionElement = document.getElementById('question');
var answersElement = document.getElementById('answers');

var timer;
var timerCount = 25;
var index = 0;
var score = 0;

var questionBank = [
    {
        question: "Which one of these is not a JavaScript data type?:",
        answers: ["Boolean", "String", "Number", 'Float'],
        answer: "Float",
    },
    {
        question: "How do you declare a JavaScript variable?:",
        answers: ["num var;", "variable num;", "var num;", 'var=num;'],
        answer: "var num;",
      },
      {
        question: "Which operator assigns a value to a variable in JavaScript?:",
        answers: ["!", "=", "+", '/'],
        answer: "=",
      },
      {
        question: "How do you add a single-line comment in JavaScript:",
        answers: ["/*Hello", "//Hello", "//Hello//", '<!--Hello-->'],
        answer: "//Hello",
      }
  ];

function startQuiz() {
    //console.log('Testing start button')
    startPage.classList.add('hide')
    quizContent.classList.remove('hide')
    startTimer()
    renderQuestion()
}

function renderQuestion() {
    var currQuestion = questionBank[index];
    for (var i = 0; i < currQuestion.answers.length; i++) {
        questionElement.textContent = currQuestion.question;
        var answerButton = document.createElement('button');
        var currAnswer = currQuestion.answers[i];
        answerButton.textContent = currAnswer;
        answerButton.setAttribute('value', currAnswer);
        answersElement.appendChild(answerButton);
    }
}

function checkAnswer(event) {
    var buttonEl = event.target;
    if (buttonEl.value === questionBank[index].answer){
        score += 15;
    } else {
        timerCount -= 15;
    }
    
    index++;
    if (index === questionBank.length) {
        endQuiz()
    } else {
        answersElement.innerHTML = '';
        renderQuestion()
    }
}

function endQuiz() {
    quizContent.classList.add('hide');
    endPage.classList.remove('hide');
    console.log(score);
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

startButton.addEventListener('click', startQuiz);
answersElement.addEventListener('click', checkAnswer);
submitButton.addEventListener('click', viewHighScores);
goBackButton.addEventListener('click', init);
clearScoresButton.addEventListener('click', clearScores);