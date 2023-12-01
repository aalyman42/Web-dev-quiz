//VARIABLES

var button = $("<button>");
var ansOption = $("#answer");
var beginButton = $("#begin");
beginButton.text("Begin the quiz");
// var ansButtons = button.attr("id", "answer");
var page = $("#page");
var coreContent = $("#core-content");
var questionTitle = $("#question-title");
var secondsRemaining = 90;
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

//FUNCTIONS
function init() {
  questionTitle.text("Welcome to my coding quiz!");
  var welcomeP = $(
    "<p> You have a minute and a half to complete the quiz </p>"
  );
  button.attr("id", "begin");
  button.text("Begin the quiz!");
  coreContent.append(welcomeP);
  coreContent.append(button);
}

function runQuiz() {
  coreContent.empty();
  if (questionIndex >= questions.length) {
    resultsPage();
  }
  questionTitle.text(
    "Q" + (questionIndex + 1) + ": " + questions[questionIndex].title
  );
  for (i = 0; i < questions[questionIndex].questionChoices.length; i++) {
    ansButtons = $("<button>");
    ansButtons.text(questions[questionIndex].questionChoices[i]);
    ansButtons.attr("id", "answer");
    coreContent.append(ansButtons);
  }
}

function resultsPage() {
  coreContent.empty();
  questionTitle.text("Your Score:");
  var finalScore = $("<h3>");
  finalScore.text(score + "/10");
  coreContent.append(finalScore);
  var scoreForm = $("<form>");
  var initials = $("<input type='text' placeholder='Enter your name'>");
  var submitBut = $('<button id="">Submit Score & Play Again</button>');
  scoreForm.append(initials);
  scoreForm.append(submitBut);
  coreContent.append(scoreForm);
}

//EVENT LISTENERS
coreContent.on("click", "#begin", runQuiz);
coreContent.on("click", "#answer", function (event) {
  var element = event.target;
  if (element.textContent == questions[questionIndex].correctAns) {
    score++;
  } else if (element.textContent !== questions[questionIndex].correctAns) {
    secondsRemaining -= 10;
  }
  questionIndex++;
  runQuiz();
  console.log(score);
  console.log(secondsRemaining);
});

//RUN INIT
init();
