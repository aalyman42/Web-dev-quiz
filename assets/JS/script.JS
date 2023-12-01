//VARIABLES
var button = $("<button>");
var page = $("#page");
var coreContent = $("#core-content");
var questionTitle = $("#question-title");
var secondsRemaining = 60;
var questions = [
  {
    title: "Why is the sky blue?",
    correctAns: "absorbed elements",
    questionChoices: ["absorbed elements", "too much water", "france"],
  },

  {
    title: "where am i from",
    correctAns: "colorado",
    questionChoices: ["colorado", "germany", "france"],
  },

  {
    title: "whats my dogs name",
    correctAns: "opal",
    questionChoices: ["opal", "taco", "burger"],
  },
];
var questionIndex = 0;
var score = 0;
var initials = $(
  "<input type='text' id='initials' placeholder='Enter your initials'>"
);
var timerEl = $("<p>");
//FUNCTIONS

//page initialization
function init() {
  questionTitle.text("Welcome to my coding quiz!");
  var welcomeP = $(
    "<p> You have a minute  to complete the quiz. Each question is worth 1 point and each incorrect answer will penalize you by 10 seconds.</p>"
  );
  button.attr("id", "begin");
  button.text("Begin the quiz!");
  coreContent.append(welcomeP);
  coreContent.append(button);
}

//Quiz functions
function runQuiz() {
  coreContent.empty();
  //set timer when quiz starts
  if (questionIndex === 0) {
    coreContent.append(timerEl);
    setTime();
  }
  //end quiz when out of questions or timer is 0
  if (questionIndex >= questions.length || secondsRemaining <= 0) {
    resultsPage();
  } //cycle through quiz questions
  else {
    questionTitle.text(
      "Q" + (questionIndex + 1) + ": " + questions[questionIndex].title
    );
    for (i = 0; i < questions[questionIndex].questionChoices.length; i++) {
      ansButtons = $("<button>");
      ansButtons.text(questions[questionIndex].questionChoices[i]);
      ansButtons.attr("id", "answer");
      coreContent.append(ansButtons);
    }
    coreContent.append(timerEl);
  }
}

//Display results page
function resultsPage() {
  coreContent.empty();
  questionTitle.text("Your Score:");
  var finalScore = $("<h3>");
  finalScore.text(score + "/" + questions.length);
  coreContent.append(finalScore);
  var scoreForm = $("<form>");
  var submitBut = $('<button id="submit">Submit Score & Play Again</button>');
  scoreForm.append(initials);
  scoreForm.append(submitBut);
  coreContent.append(scoreForm);

  var leaderboard = $("<ul>");
  coreContent.append(leaderboard);
}

//Timer functionality
function setTime() {
  var timeInterval = setInterval(function () {
    secondsRemaining--;
    timerEl.text(secondsRemaining + " seconds remaining...");

    if (secondsRemaining === 0) {
      clearInterval(timeInterval);
      resultsPage();
    }
  }, 1000);
}

//EVENT LISTENERS
//
//begin the quiz
//
coreContent.on("click", "#begin", runQuiz);
//choosing a quiz answer
//
coreContent.on("click", "#answer", function (event) {
  var element = event.target;
  //correct answer chosen
  if (element.textContent == questions[questionIndex].correctAns) {
    score++;
  } //incorrect answer chosen
  else if (element.textContent !== questions[questionIndex].correctAns) {
    secondsRemaining -= 10;
  } //always increse index and run quiz function again
  questionIndex++;
  runQuiz();
});
//
//submitting score
coreContent.on("submit", function (event) {
  secondsRemaining = 90;
  questionIndex = 0;
  score = 0;
});
//
//
//RUN INIT
init();
