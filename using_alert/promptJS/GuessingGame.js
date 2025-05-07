function computerGuessGame(){

    alert('Welcome to the Computer Guessing Game!');
    alert('Think of a number between 1 and 100, and I will try to guess it!');

    let low =1;
    let high = 100;
    let guess;
    let guessCount = 0;
    let response;
    
    while  (low <= high) {
        guess = Math.floor ((low +high) /2);
        guessCount++;
        response = prompt(`Is your number higher (h), lower (l), or correct (c) compared to ${guess} ?`).toLowerCase();

        if (response === 'c') {
            alert(`Hurrah! I guessed your number ${guess} in ${guessCount} tries!`);
            return

        }
        else if (response === 'h') {
            low = guess + 1;

        }
        else if (response === 'l') {
            high = guess - 1;
        }
        else {
            alert('Please respond with h, l, or c.');
            guessCount--;//thi's for not counting invalid inputs

        }
    }

    alert('Hmm, it seems like you are not playing fair!Please follow the rules!');

}

function startGame() {
    while (true) {
        computerGuessGame();
        let playAgain = prompt('Do you want to play again? (yes/no)').toLowerCase();
        if (playAgain !== 'yes') {
            alert('Thanks for playing! Goodbye!');
            break;
        }
    }
}

startGame();
