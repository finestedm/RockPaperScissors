
var computerPossibleChoices = ['rock', 'paper', 'scissors'];
var score = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'paper':
                return 0;
            case 'rock':
                return 1;
            case 'scissors':
                return -1;
        }
    } else if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 0;
            case 'scissors':
                return 1;
            case 'paper':
                return -1;
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'scissors':
                return 0;
            case 'paper':
                return 1;
            case 'rock':
                return -1;
        }
    }

}

function playGame(playerChoise) {
    var playerSelection = playerChoise;
    var computerChooser = Math.floor(Math.random() * computerPossibleChoices.length);
    var computerSelection = (computerPossibleChoices[computerChooser]);
    roundPoint = (playRound(playerSelection, computerSelection));
    return roundPoint;

}


const result = document.querySelector('#result');


const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    var point = (playGame('rock'));
    score = + point;
    console.log(score);
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    console.log(playGame('paper'));

});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
    console.log(playGame('scissors'));

});



