
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

let btns = document.querySelectorAll('.playBtn');
let playerResults = document.querySelector('#scorePlayer');
let computerResults = document.querySelector('#scoreComputer');
playerScore = 0;
computerScore = 0;
playerResults.textContent = 'Score Player: ';
computerResults.textContent = 'Score Computer: ';
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerChoice = btn.id;
        let computerSelection = getComputerChoice();
        let result = playRound(playerChoice, computerSelection);
        const container = document.querySelector("#results");

        container.textContent = '';

        let content = document.createElement("div");
        content.classList.add("content");

        switch(result) {
            case -1:
                content.textContent = `You lose! ${computerSelection} beats ${playerChoice}`;
                computerScore++;
                computerResults.textContent = ` Score Computer: ${computerScore}`;
                break;
            case 1:
                content.textContent = `You win! ${playerChoice} beats ${computerSelection}`;
                playerScore++;
                playerResults.textContent = `Score Player: ${playerScore}`;
                break;
            case 0:
                content.textContent = `It's a draw`;
                break;
        }
        container.appendChild(content);
        if(computerScore === 5) {
            container.textContent = '';
            container.textContent = `Computer got 5 points, you lose the game`;
            playerResults.textContent = 'Score Player: ';
            computerResults.textContent = 'Score Computer: ';
            playerScore = 0;
            computerScore = 0;
        }
        else if(playerScore === 5) {
            container.textContent = '';
            container.textContent = `Player got 5 points, you win the game`;
            playerResults.textContent = 'Score Player: ';
            computerResults.textContent = 'Score Computer: ';
            computerScore = 0;
            playerChoice = 0;
        }
    });
});
