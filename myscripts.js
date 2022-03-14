
var computerPossibleChoices = ['rock', 'paper', 'scissors'];
var score = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'paper':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`;
            case 'rock':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
            case 'scissors':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
        }
    } else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`;
            case 'scissors':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
            case 'paper':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'scissors':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`;
            case 'paper':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
            case 'rock':
                return `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
        }
    }

}

function playGame() {
    var playerSelection = prompt('Choose: Rock, Paper or Scissors?').toLowerCase();
    var computerChooser = Math.floor(Math.random() * computerPossibleChoices.length);
    var computerSelection = (computerPossibleChoices[computerChooser]);
    return (playRound(playerSelection, computerSelection))
}

for (let i = 0; i < 5; i++) {
    console.log(playGame())

}

/*
case 'paper':
    return `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`;
case 'rock':
    return `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
    score = + 1;
case 'scissors':
    return `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
*/
