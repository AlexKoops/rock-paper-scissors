
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = '';
    if (randomNumber == 0) {
        choice = 'rock';
    }
    else if (randomNumber == 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if(playerChoice === "paper" && computerSelection === "scissors" 
        || playerChoice === "rock" && computerSelection === "paper"
        || playerChoice === "scissors" && computerSelection === "rock") {
            return -1;
    }
    else if(playerChoice === "paper" && computerSelection === "rock" 
        || playerChoice === "rock" && computerSelection === "scissors"
        || playerChoice === "scissors" && computerSelection === "paper") {
        return 1;
    }
    else {
        return 0;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose rock, paper of scissors");
        roundWinner = playRound(playerChoice, getComputerChoice());
        if(roundWinner === -1) {
            console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
        }
        else if(roundWinner === 1) {
            console.log(`You win! ${playerChoice} beats ${computerSelection}`);
        }
        else {
            console.log(`It's a draw!`);
        }
    }
}

playGame();