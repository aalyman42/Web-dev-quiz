var changingEl = document.querySelector("div");
var buttons = document.querySelectorAll("button");
var welcomePage = "welcome";
var questionPage = "question";
var questionNum = 0;
var score = 0;
var timer = 90;

console.log(changingEl);
console.log(welcomePage);

changingEl.className = welcomePage;
if (changingEl.className == welcomePage) {
  var h2 = document.createElement("h2");
  h2.textContent = "Welcome to the coding quiz";
  changingEl.appendChild(h2);
  var p = document.createElement("p");
  p.textContent =
    "You will have 1 and a half minutes to complete the quiz. each incorrect question will reduce your remaining time by 5 seconds";
  changingEl.appendChild(p);
  var button1 = document.createElement("button");
  button1.textContent = "Begin the quiz";
  changingEl.appendChild(button1);
  button1.addEventListener("click", function () {
    changingEl.className = questionPage;
    questionNum++;
    changingEl.id = questionNum;
    h2.textContent = "";
    p.textContent = "";
    quiz();
  });
}
function quiz() {
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");
  var button4 = document.createElement("button");
  if (questionNum === 1) {
    h2.textContent = "Q" + questionNum + ". what is this?";
    changingEl.appendChild(h2);
    button1.textContent = "A. a dog.";
    button2.textContent = "B. a dog.";
    button3.textContent = "C. a dog.";
    button4.textContent = "D. a dog.";
    changingEl.appendChild(button1);
    changingEl.appendChild(button2);
    changingEl.appendChild(button3);
    changingEl.appendChild(button4);
    buttons.addEventListener("click", function () {
      questionNum++;
    });
  }
}
