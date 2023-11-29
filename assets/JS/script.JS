// var changingEl = document.querySelector("div");
// var button1 = document.getElementById("ans1");
// var welcomePage = "welcome";
// var questionPage = "question";
var score = 0;
var timer = 90;

var questionTitle = document.getElementById("question-title");

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

console.log(questions[0].title);
//when user clicks iterate through questions array. check if answer is correct.
// need a variable to story questions index
var questionIndex = 0;

//want title and choices of currentQuestion
//we need to dynamicly create buttons for each questionChoices item: for loop
function currentQuestion() {}

// console.log(button1);
// console.log(welcomePage);

// function display(questionNum) {
//   if (questionNum < 1) {
//     changingEl.setAttribute("class", welcomePage);
//     document.querySelector("h2").textContent = "Welcome to my coding quiz!";
//     document.querySelector("p").textContent =
//       "When you press start, you will have 1 minute and 30 seconds to complete the quiz. Each correct answer will earn you 10 points. answering a question incorrectly will take 10 seconds off your time.";
//     document.querySelector("button").textContent = "Begin the quiz!";
//   }
//   if (questionNum > 0 && questionNum < 11) {
//     changingEl.setAttribute("class", questionPage);
//     document.querySelector("h2").textContent = "Question #" + questionNum;
//   }
// }

// display(questionNum);
// button1.addEventListener("click", function () {
//   questionNum++;
//   display(questionNum);
// });
