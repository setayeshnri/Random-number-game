const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
("use strict");
let counter = 0;
function add() {
  counter += 1;
  renderCounter();
  if (counter >= 10) {
    let addEl = document.querySelector("#addButton");
    addEl.disabled = true;
  }
  if (counter > 0) {
    let decreaseEl = document.querySelector("#decreaseButton");
    decreaseEl.disabled = false;
  }
}
function decrease() {
  counter -= 1;
  renderCounter();
  if (counter < 10) {
    let addEl = document.querySelector("#addButton");
    addEl.disabled = false;
  }
  if (counter <= 0) {
    let decreaseEl = document.querySelector("#decreaseButton");
    decreaseEl.disabled = true;
  }
}
function renderCounter() {
  let numberEl = document.querySelector("#number");
  numberEl.innerHTML = counter;
}
let addEl = document.querySelector("#addButton");
addEl.addEventListener("click", add);

let decreaseEl = document.querySelector("#decreaseButton");
decreaseEl.addEventListener("click", decrease);

let guessEl = document.querySelector("#theGuess");

let attempts = 3;

let submitEl = document.querySelector("#submit");

function submit() {
  if (counter === randomNumber) {
    guessEl.innerHTML = `well done! You guessed the number ${randomNumber} correctly.`;
    showSucessIcon();
    submitEl.disabled= true;

    return;
  } else if (counter < randomNumber) {
    guessEl.innerHTML = "uh oh, Too low! Try again.";
    showFailIcon();
  } else {
    guessEl.innerHTML = "uh oh, Too high! Try again.";
    showFailIcon();
  }
  attempts--;
  if (attempts == 0) {
    guessEl.innerHTML = ` uh oh you have ran out of attempts. the number was ${randomNumber}`;
    submitEl.disabled = true;
    
  }
}


submitEl.addEventListener("click", submit);

let iconEl = document.querySelector(".icon");

function showSucessIcon() {
  iconEl.innerHTML = "🎉";
}
function showFailIcon() {
  iconEl.innerHTML = "❌";
}

