let randomNumber;

// Fetch the random number from the server
fetch('/api/number')
 .then((response) => response.json())
 .then((data) => {
     randomNumber = data.number;
     console.log("Random Number (From Server):", randomNumber);
 });

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

guessButton.addEventListener("click", () => {
 const userGuess = parseInt(guessInput.value);

 if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
     message.textContent = "Please enter a valid number between 1 and 100.";
     message.style.color = "red";
     return;
 }

 if (userGuess === randomNumber) {
     message.textContent = "🎉 Correct! You guessed the number!";
     message.style.color = "green";
 } else if (userGuess < randomNumber) {
     message.textContent = "Too low! Try again.";
     message.style.color = "orange";
 } else {
     message.textContent = "Too high! Try again.";
     message.style.color = "orange";
 }
});
