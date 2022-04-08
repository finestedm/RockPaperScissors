var computerPossibleChoices = ['rock', 'paper', 'scissors'];
var count = 0;
var computerScore = 0;
var playerScore = 0;

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

function playGame(playerChoise) {
    var playerSelection = playerChoise;
    var computerChooser = Math.floor(Math.random() * computerPossibleChoices.length);
    var computerSelection = (computerPossibleChoices[computerChooser]);
    roundResult = (playRound(playerSelection, computerSelection));
    calculatingResult(roundResult);
}

function calculatingResult(roundResult) {
    roundPoint = (roundResult.secondNum);
    if (roundPoint < 0) {
        computerScore++;
    } else if (roundPoint > 0) {
        playerScore++;
    }
    count++;

    scoreUpdater(roundResult.firstNum);

    if (count === 5) {
        if (playerScore > computerScore) {
            var thisRoundScore = 'After 5 rounds you have won';
        } else if (playerScore < computerScore) {
            var thisRoundScore = 'After 5 rounds You have lost';
        } else {
            var thisRoundScore = 'After 5 rounds It`a tie';
        }
        document.getElementById("thisRound").innerHTML = thisRoundScore
        alert('you`ve player for 5 rounds. Check the final score and reset the game if you want to play again!')
    }

}

function resetGame() {
    count = 0;
    playerScore = 0;
    computerScore = 0;
    scoreUpdater();
}

function scoreUpdater(textResult) {
    document.getElementById("counter").innerHTML = count;
    document.getElementById("computerScorer").innerHTML = computerScore;
    document.getElementById("playerScorer").innerHTML = playerScore;
    document.getElementById("thisRound").innerHTML = textResult;

}

const result = document.querySelector('#result');
const counter = document.querySelector('#counter');
const computerScorer = document.querySelector('#computerScorer');
const playerScorer = document.querySelector('#playerScorer');
const thisRound = document.querySelector('#thisRound');


const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    playGame('rock');
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    playGame('paper');
});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
    playGame('scissors');
});

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', () => {
    resetGame();
});
