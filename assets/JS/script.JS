//VARIABLES
var button = $("<button>");
var page = $("#page");
var coreContent = $("#core-content");
var questionTitle = $("#question-title");
var secondsRemaining = 60;
var questions = [
  {
    title: "the $ is common syntax of which framework?",
    correctAns: "JQuery",
    questionChoices: ["Bootstrap", "JQuery", "WebAPI", "React"],
  },

  {
    title: "In dot notation, the left of the dot is always a(n) _______ .",
    correctAns: "Object",
    questionChoices: ["Object", "Function", "Array", "Element"],
  },

  {
    title: "Javascript was created in how many days?",
    correctAns: "7",
    questionChoices: ["14", "30", "7", "52"],
  },
  {
    title: "DOM stands for what?",
    correctAns: "Document Object Model",
    questionChoices: [
      "Document Object Model",
      "Dogs on the Moon",
      "Development Open Mandate",
      "Document Order Manipulation",
    ],
  },
  {
    title:
      "A function will always check global memory for a variable before checking local memory.",
    correctAns: "False",
    questionChoices: ["True", "False"],
  },
  {
    title: "document.querySelectAll() will generate what?",
    correctAns: "An array",
    questionChoices: [" A Boolean value", "A string", "A number", "An array"],
  },
  {
    title: "Complete the for loop: for (_____; i < variable.length; i++)",
    correctAns: "i = 0",
    questionChoices: ["i != 0", "i >= 0", "i = 0", "i = -1"],
  },
  {
    title: "Javascript runs from ____ to ____",
    correctAns: "top to bottom",
    questionChoices: [
      "bottom to top",
      "top to bottom",
      "left to right",
      "right to left",
    ],
  },
  {
    title: ".setInverval requires an interval speed in ___",
    correctAns: "milliseconds",
    questionChoices: ["minutes", "seconds", "milliseconds", "hours"],
  },
  {
    title: "Would you like the last point for free?",
    correctAns: "yes, please!",
    questionChoices: ["I guess...", "no", "I'm good", "yes, please!"],
  },
];
var questionIndex = 0;
var score = 0;
var initials = $(
  "<input type='text' id='initials' placeholder='Enter your initials'>"
);
var timerEl = $("<p>");

var leaderAllItems = [];
var leaderListItem = {
  userName: initials.val(),
  userScore: score,
};
var leaderboard = $("#leaderboard");

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
  var leaderList = $("<ul>");
  leaderList.text("Local Leaderboard:");
  leaderboard.append(leaderList);
  leaderString = localStorage.getItem("leaderboard");
  leaderAllItems = JSON.parse(leaderString);
  console.log(leaderAllItems);
  for (i = 0; i < leaderAllItems.length; i++) {
    leaderLi = $("<li>");
    leaderLi.text(
      "Name: " +
        leaderAllItems[i].userName +
        " | Score: " +
        leaderAllItems[i].userScore
    );
    leaderList.append(leaderLi);
  }
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
    return;
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
  leaderListItem.userName = initials.val();
  leaderListItem.userScore = score;
  leaderAllItems.push(leaderListItem);
  var leaderString = JSON.stringify(leaderAllItems);
  localStorage.setItem("leaderboard", leaderString);
  secondsRemaining = 90;
  questionIndex = 0;
  score = 0;
});
//
//
//RUN INIT
init();
