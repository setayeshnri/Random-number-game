// Generate a random number between 0 and 50
const randomNumber = Math.floor(Math.random() * 51);

// Number of attempts the player has
let attempts = 5;

while (attempts > 0) {
  // Ask the player to guess the number
  let guess = prompt(
    `Guess a number between 0 and 50. You have ${attempts} attempts left.`
  );

  // Check if the input is valid
  if (guess === null) {
    break;
  }

  guess = parseInt(guess);

  // Check if the input is a valid number
  if (isNaN(guess) || guess < 0 || guess > 50) {
    alert("oops, Invalid guess. Please enter a number between 0 and 50.");
    continue;
  }

  // Decrease the number of attempts
  attempts--;

  // Check if the guess is correct
  if (guess === randomNumber) {
    alert(`well done! You guessed the number ${randomNumber} correctly.`);
    break;
  } else if (guess < randomNumber) {
    alert("uh oh, Too low! Try again.");
  } else {
    alert("uh oh, Too high! Try again.");
  }
}

// If the player runs out of attempts
if (attempts === 0) {
  alert(
    `Sorry, you've run out of attempts. The correct number was ${randomNumber}.`
  );
}
