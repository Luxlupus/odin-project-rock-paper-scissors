let rock = "ROCK";
let paper = "PAPER"
let scissors = "SCISSORS";
let options = [rock, paper, scissors];
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

//randomize and store the computer choice in a new variable
function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    computerSelection= options[index];
    return computerSelection;
}

function main() {

const container = document.querySelector('.containerOfButtons');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

displayScore(computerScore, playerScore);
displayComputerChoice (computerSelection);


rockButton.addEventListener('click', () => {

    playerSelection = rockButton.value;
    getComputerChoice();
    playRound (playerSelection, computerSelection);
    updateComputerChoice();
    updateScore();
    announceWinner(playerScore, computerScore);
    if (playerScore === 5 || computerScore === 5)
    {
        RetryBtn();
        addRetryButton();
    }
    })

paperButton.addEventListener('click', () => {
    playerSelection = paperButton.value;
    getComputerChoice();
    playRound (playerSelection, computerSelection);
    updateComputerChoice();
    updateScore();
    announceWinner(playerScore, computerScore);
    if (playerScore === 5 || computerScore === 5)
    {
        RetryBtn();
        addRetryButton();
    }
    })
    

scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.value;
    getComputerChoice();
    playRound (playerSelection, computerSelection);
    updateComputerChoice();
    updateScore();
    announceWinner(playerScore, computerScore);
    if (playerScore === 5 || computerScore === 5)
    {
        RetryBtn();
        addRetryButton();
    }
    })
}
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

return playerScore, computerScore;
}   
function displayComputerChoice() {
    const containerComputer= document.querySelector('#computerChoice')
    const choiceComputer = document.createElement ('span');
    choiceComputer.setAttribute("id", "nextChoice");
    choiceComputer.textContent = computerSelection;
    containerComputer.appendChild(choiceComputer);
}
function updateComputerChoice() {
    const updatedComputerChoice = document.querySelector("#nextChoice");
    updatedComputerChoice.textContent = computerSelection;
}
function displayScore(computerScore, playerScore) {

    const computerResult = document.querySelector("#computerResult");
    const spanComputerResult = document.createElement ('span');
    spanComputerResult.setAttribute("id", "score");
    spanComputerResult.textContent = computerScore;
    computerResult.appendChild(spanComputerResult);

    const playerResult = document.querySelector("#playerResult");
    const spanPlayerResult = document.createElement ('span');
    spanPlayerResult.setAttribute("id", "playerScore");
    spanPlayerResult.textContent = playerScore;
    playerResult.appendChild(spanPlayerResult);

}
function updateScore() {
    const updatedComputerScore = document.querySelector("#score");
    updatedComputerScore.textContent = computerScore;
    const updatedPlayerScore = document.querySelector("#playerScore")
    updatedPlayerScore.textContent = playerScore;
}
//function to announce the winner
function announceWinner(playerScore, computerScore) {

    const winner = document.querySelector("#winner");
    
    if (playerScore == 5 && playerScore > computerScore) {
       
        winner.textContent ="Congratulations! You have won!";  
    }   
    else if(computerScore == 5 && computerScore > playerScore) {
       
        winner.textContent ="You lose!"; 
    }
}
//make all buttons retry when score is 5

function RetryBtn() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => { button.addEventListener('click',() => {
        window.parent.location = window.parent.location.href;
        }) 
    })    
}
//show a special retry button
function addRetryButton() {
    const winner= document.querySelector("#winner");
    const retryBtn = document.createElement('button');
    retryBtn.setAttribute('id', 'retry');
    retryBtn.type="button";
    retryBtn.textContent="RETRY"   
    winner.appendChild(retryBtn);
    retryBtn.addEventListener('click',() => {
        window.parent.location = window.parent.location.href;})
}
main();
