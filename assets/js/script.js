var startButton = document.getElementById('start-button');
var startPage = document.getElementById('start-page');
var quizContent = document.getElementById('quiz-content');
var timerElement = document.getElementById("timer-count");
var endPage = document.getElementById("end-page");
var scoresPage = document.getElementById("scores-page");
var submitButton = document.getElementById("submit-button");
var goBackButton = document.getElementById("go-back-button");
var clearScoresButton = document.getElementById("clear-scores-button")

var timer;
var timerCount;

function startQuiz() {
    console.log('Testing start button')
    startPage.classList.add('hide')
    quizContent.classList.remove('hide')
    timerCount = 10;
    renderQuestions()
    startTimer()
}

// Load questions on screen
function renderQuestions() {
    
}

function checkAnswers() {

}

function endQuiz() {
    quizContent.classList.add('hide');
    endPage.classList.remove('hide');
}

function setHighScores() {

}

function getHighScores() {

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

function viewHighScores() {
    console.log("Testing Submit button");
    endPage.classList.add("hide");
    scoresPage.classList.remove("hide");

    

}

function clearScores() {
    console.log("Testing Clear High Scores button");

}

function init() {
    
}

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', viewHighScores);
goBackButton.addEventListener('click', startQuiz);
clearScoresButton.addEventListener('click', clearScores);
