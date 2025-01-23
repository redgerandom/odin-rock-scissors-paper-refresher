let humanScore = 0;
let computerScore = 0; 
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
// let result = playRound(humanChoice, computerChoice);

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
    // console.log(humanChoice);
    return humanChoice;
}

function showHands() {
  console.log(computerChoice)
  console.log(humanChoice);
    
}

showHands();


// function playRound(humanChoice, computerChoice) {
//     if (computerChoice === humanChoice) {
//         console.log("It's a tie!");
//         return "It's a tie!";
//     } else if (computerChoice === "rock" && humanChoice === "scissors" || 
//                computerChoice === "scissors" && humanChoice === "paper" || 
//                computerChoice === "paper" && humanChoice === "rock") {
//         console.log("You lose!");
//         computerScore++;
//         return "You lose!";
//     } else if (computerChoice === "rock" && humanChoice === "paper" || 
//                computerChoice === "scissors" && humanChoice === "rock" || 
//                computerChoice === "paper" && humanChoice === "scissors") {
//         console.log("You win!");
//         humanScore++;
//         return "You win!";
//     }
// }

// console.log(result);

// for (let i = 1; i < 5; i++) {
//     playGame();
//     console.log("Human: " + humanScore);
//     console.log("Computer: " + computerScore);
// }

// console.log("player=" + humanChoice);
// console.log("cpu = " + computerChoice);
// console.log(result);
// console.log(humanScore);
// console.log(computerScore);
