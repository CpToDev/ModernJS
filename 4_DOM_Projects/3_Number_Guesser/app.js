/*
Game Rules:
- A player's guess must be in the range of the set min and max
- A player may only have a specified number of guesses each round
- The game must tell the player how many guesses they have remaining
- The game must tell the player the correct answer upon losing
- A player must be able to play another round
*/

// Game variables
let min = 1, 
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    guessesRemaining = 3;

// UI element variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Display the minimum and maximum of the guess range
minNum.textContent = min;
maxNum.textContent = max;

// Listen for new round
game.addEventListener('mousedown', function(e) {

    // If the event object target has the class 'new-round'
    if(e.target.className === 'new-round') {

        // Reload the page
        window.location.reload();

    }

});

// Listen for guess submission
guessBtn.addEventListener('click', function(e) {

    // Get the guess and convert it to an integer
    const guess = parseInt(guessInput.value);

    // Validate the guess
    if(isNaN(guess) || guess < min || guess > max) {

        // Notify the user that their input is invalid
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');

        // Do not continue
        return;

    }

    // Check if the user guessed the winning number
    if(guess === winningNum) {

        // Judge the users guess
        judgeGuess(true, 'green', `${winningNum} is the correct guess. You win with ${guessesRemaining} guesses remaining!`);

    }
    else {

        // Reduce the number of remaining guesses
        guessesRemaining -= 1;

        // Check if the user has any guesses remaining
        if(guessesRemaining === 0) {

            // Judge the users guess
            judgeGuess(true, 'red', `You ran out of guesses! The correct guess was ${winningNum}.`);

        }
        else {

            // Judge the users guess
            judgeGuess(false, 'orange', `Your guess of ${guess} is incorrect! You have ${guessesRemaining} guesses remaining.`);

            // Clear the guess input field
            guessInput.value = '';

        }

    }

});

// Display a message to the user
function setMessage(msg, color) {

    // Style the message
    message.style.color = color;

    // Display the message
    message.textContent = msg;

}

// Judge the users guess
function judgeGuess(disableInput, color, msg) {

    // Disable the input for guessing
    guessInput.disabled = disableInput;

    // Style the input for guessing to indicate the user lost
    guessInput.style.borderColor = color;

    // Display a message to tell the user they lost
    setMessage(msg, color);

    // Check if the game is over
    if(disableInput) {

        // Change the button text to prompt the user to start a new round
        guessBtn.value = 'New Round';

        // Append a class to the button
        guessBtn.className += 'new-round';

    }

}