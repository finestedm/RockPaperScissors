
var computerPossibleChoices = ['rock', 'paper', 'scissors'];
var score = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'paper':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`, secondNum: 0 };
            case 'rock':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. You Win!`, secondNum: 1 };
            case 'scissors':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. You Lose!`, secondNum: -1 };
        }
    } else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`, secondNum: 0 };
            case 'scissors':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. You Win!`, secondNum: 1 };
            case 'paper':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. You Lose!`, secondNum: -1 };
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'scissors':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. It's a draw!`, secondNum: 0 };
            case 'paper':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. You Win!`, secondNum: 1 };
            case 'rock':
                return { firstNum: `You chose ${playerSelection}. Computer chose ${computerSelection}. You Lose!`, secondNum: -1 };
        }
    }

}

function playGame() {
    var playerSelection = prompt('Choose: Rock, Paper or Scissors?').toLowerCase();
    var computerChooser = Math.floor(Math.random() * computerPossibleChoices.length);
    var computerSelection = (computerPossibleChoices[computerChooser]);
    return (playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    var returnedValues = (playGame());
    console.log(returnedValues.firstNum);
    score = + (returnedValues.secondNum);

}

if (score === 0) {
    console.log(`After 5 rounds it's a draw!`);
} else if (score > 0) {
    console.log(`After 5 rounds you win with a score of ${score}!`);
} else if (score < 0) {
    console.log(`After 5 rounds you lose with a score of ${score}`);
}