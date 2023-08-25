function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerPoints = 0
let computerPoints = 0

function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Rock, paper, scissors, GO!").toLowerCase();
    
    if (playerChoice === "rock" && computerChoice === "paper") {

        computerPoints += 1
        return "You lose! paper beats rock!"

    } else if (playerChoice === "rock" && computerChoice === "scissors") {

        playerPoints += 1
        return "You win! rock beats scissors!"

    } else if (playerChoice === "paper" && computerChoice === "scissors") {

        computerPoints += 1
        return "You lose! scissors beat paper!"
        
    } else if (playerChoice === "paper" && computerChoice === "rock") {

        playerPoints += 1
        return "You win! paper beats rock!"

    } else if (playerChoice === "scissors" && computerChoice === "rock") {

        computerPoints += 1
        return "You lose! rock beats scissors"

    } else if (playerChoice === "scissors" && computerChoice === "paper") {

        playerPoints += 1
        return "You win! scissors beats paper"

    } else if (playerChoice === computerChoice) {

        computerPoints += 1
        playerPoints += 1
        return "It's a tie!"
    } else {
        return "Please choose a valid option"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
        console.log(`Your points: ${playerPoints}`)
        console.log(`Computer's points: ${computerPoints}`)
    }
    winner();
}

function winner() {
    if (playerPoints > computerPoints) {
        console.log("Congratulations, you have won!")
    } else if (playerPoints < computerPoints) {
        console.log("Darn, you have lost this time.")
    } else {
        console.log("How is this possible?! A tie!!!")
    }
}

game();