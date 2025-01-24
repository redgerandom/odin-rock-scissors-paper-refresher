let humanScore = 0;
let computerScore = 0; 
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Enter your choice: rock, paper, or scissors');
    const humanChoice = choice.toLowerCase();
    return humanChoice;
}

function showHands() {
    console.log("cpu threw " + computerChoice);
    console.log("you threw " + humanChoice);
}

showHands();

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return "It's a tie!";
    } else if (computerChoice === "rock" && humanChoice === "scissors" ||
               computerChoice === "scissors" && humanChoice === "paper" ||
               computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose!");
        computerScore++;
        return "You lose!";
    } else if (computerChoice === "rock" && humanChoice === "paper" ||
               computerChoice === "scissors" && humanChoice === "rock" ||
               computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win!");
        humanScore++;
        return "You win!";
    }
}

playRound(humanChoice, computerChoice);

function scoreBoard(params) {
    console.log(humanScore + " : " + computerScore);
    
    
}
scoreBoard()
