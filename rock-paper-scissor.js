
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
    if(playerChoice === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock");
    }
    else if(playerChoice === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper");
    }
    else if(playerChoice === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors");
    }
    else if(playerChoice === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock");
    }
    else if(playerChoice === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper");
    }
    else if(playerChoice === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors")
    }
    else {
        console.log("It is a draw!");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose rock, paper of scissors");
        playRound(playerChoice, getComputerChoice());
    }
}

playGame();