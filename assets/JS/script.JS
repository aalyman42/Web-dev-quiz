//DECLARE VARIABLES
var score = 0;
var timer = 90;
var questionTitle = document.getElementById("question-title");
var page = document.getElementById("page");
var answerList = document.getElementById("answer-list");
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
var buttonsArray = [];
//when user clicks iterate through questions array. check if answer is correct.
// need a variable to story questions index
var questionIndex = 0;
var buttons = document.querySelectorAll("button");
//want title and choices of currentQuestion
//we need to dynamicly create buttons for each questionChoices item: for loop
//FUNCTIONS
function currentQuestion(questionIndex) {
  if (questionIndex === 0) {
    questionTitle.textContent =
      "Q" + (questionIndex + 1) + ": " + questions[questionIndex].title;
    createAnswers();
  }
  if (questionIndex > 0 && questionIndex <= questions.length) {
    questionTitle.textContent =
      "Q" + (questionIndex + 1) + ": " + questions[questionIndex].title;
    replaceAnswers();
  }
}

//creat buttons for questionChoices
function createAnswers() {
  for (i = 0; i < questions[questionIndex].questionChoices.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = questions[questionIndex].questionChoices[i];
    buttonsArray.push(questions[questionIndex].questionChoices[i]);
    page.appendChild(answerButton);
  }
}
//replaces button text with next set of questionChoices index
function replaceAnswers() {
  var buttonsText = document.querySelectorAll("button");
  for (i = 0; i < questions[questionIndex].questionChoices.length; i++) {
    buttonsText[i].textContent = questions[questionIndex].questionChoices[i];
    buttonsArray.push(questions[questionIndex].questionChoices[i]);
  }
}
console.log(buttonsArray);
//EVENT LISTENERS
page.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    questionIndex++;
    currentQuestion(questionIndex);
  }
});

currentQuestion(questionIndex);
