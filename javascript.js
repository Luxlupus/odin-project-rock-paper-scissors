let rock = "ROCK";
let paper = "PAPER"
let scissors = "SCISSORS";
let playerSelection;
//let playerChoice;
let computerSelection= 0;
let options = [rock, paper, scissors];
let computerScore = 0;
let playerScore = 0;


//prompting the player for a new answer
/*function newAnswer() {
    playerChoice = prompt("Rock, paper, scissors?");
    return playerChoice;
}*/

//randomize and store the computer choice in a new variable
function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    computerSelection= options[index];
    //console.log(computerSelection);
    return computerSelection;
}

//store player input as a variable and case check
/*function getPlayerChoice(playerChoice) {
    
    if (playerChoice.toString().toUpperCase() === rock) {
        playerSelection = rock;
    }
    else if (playerChoice.toString().toUpperCase() === paper) {
        playerSelection = paper;
    }
    else if (playerChoice.toString().toUpperCase() === scissors) {
        playerSelection = scissors;
    }
    //loop until correct answer
    else {
            alert("Invalid");
            getPlayerChoice(newAnswer());
    }   
    console.log(playerSelection); 
    return playerSelection;
}
*/
function startGame() {
const container = document.querySelector('.containerOfButtons');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {
    playerSelection = rockButton.value;
    getComputerChoice();
    displayComputerChoice (computerSelection);
    displayPlayerChoice(playerSelection);
    playRound (playerSelection, computerSelection);
    //console.log (playerSelection);
    return playerSelection; })

paperButton.addEventListener('click', () => {
    playerSelection = paperButton.value;
    getComputerChoice();
    displayComputerChoice (computerSelection);
    displayPlayerChoice(playerSelection);
    playRound (playerSelection, computerSelection);
    //console.log (playerSelection);
    return playerSelection; })

scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.value;
    getComputerChoice();
    displayComputerChoice (computerSelection);
    displayPlayerChoice(playerSelection);
    playRound (playerSelection, computerSelection);
    //console.log (playerSelection);
    return playerSelection; })
}

function displayPlayerChoice() {
    const container= document.querySelector('#playerChoice')
    const choice = document.createElement ('span');
    choice.textContent = playerSelection + " ";
    playerChoice.appendChild(choice); }

function displayComputerChoice() {
    const containerComputer= document.querySelector('#computerChoice')
    const choiceComputer = document.createElement ('span');
    choiceComputer.textContent = computerSelection + " ";
    computerChoice.appendChild(choiceComputer); }



function playRound (playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
        console.log("This round is a draw");
        }
    else if (computerSelection === rock && playerSelection === paper) {
        console.log("You Win! Paper beats Rock");
        playerScore++;
        }
    else if (computerSelection === rock && playerSelection === scissors) {
        console.log("You Lose! Rock beats scissors");
        computerScore++;
        }
    else if (computerSelection === paper && playerSelection === rock) {
        console.log("You Lose this Round! Paper beats Rock");
        computerScore++;
        }
    else if (computerSelection === paper && playerSelection === scissors) {
        console.log("You Win this Round! Scissors beats paper");
        playerScore++;
        }
    else if (computerSelection === scissors && playerSelection === paper) {
        console.log("You Lose this Round! Scissors beats paper");
        computerScore++;
        }
    else if (computerSelection === scissors && playerSelection === rock) {
        console.log("You Win this Round! Rock beats scissors");
        playerScore++;
        }
    console.log(playerScore);
    console.log(computerScore);
    
    return playerScore, computerScore;
}   

//function to announce the winner
function announceWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("YOU WON");
    }
    else if (playerScore < computerScore) {
        console.log("YOU LOSE");
    }
    else if (playerScore = computerScore) {
        console.log("DRAW");
    }
}
/*
    for (let i = 0; i < 5; i++) {
        newAnswer();
        getComputerChoice();
        getPlayerChoice(playerChoice);
        playRound(playerSelection, computerSelection);
}
*/
startGame();
