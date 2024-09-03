
getComputerChoice = function() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

getHumanChoice = function() {
    let userInput = prompt("rock, paper, or scissors?");
    userInput = userInput.toLowerCase()
    const validInput = ["rock", "paper", "scissors"];
    if (!validInput.includes(userInput)) { return "ERROR. Invalid Input"; }
    else { return userInput };
}



const playGame = function() {

    const playRound = function() {
        
    
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        if (computerSelection === "rock" && humanSelection === "scissors") {
            computerScore++;
            return console.log("You lose! Rock beats scissors.");
        }
        
        else if (computerSelection === "scissors" && humanSelection === "paper") {
            computerScore++;
            return console.log("You lose! Scissors beats paper.");
        }
    
        else if (computerSelection === "paper" && humanSelection === "rock") {
            computerScore++;
            return console.log("You lose! Paper beats rock.");
        }
    
        else if (computerSelection === "scissors" && humanSelection === "rock") {
            humanScore++;
            return console.log("You win! Rock beats scissors.");
        }
    
        else if (computerSelection === "paper" && humanSelection === "scissors") {
            humanScore++;
            return console.log("You win! Scissors beats paper.");
        }
    
        else if (computerSelection === "rock" && humanSelection === "paper") {
            humanScore++;
            return console.log("You win! Paper beats rock.");
        }
        else {
            return console.log("Tie!");
        }

        
    };
    
    let computerScore = 0;
    let humanScore = 0;

    for (let count = 0; count < 5; count++) {
        playRound()
    }

    if (humanScore > computerScore) { return "Game Over. You win!"
        + " Score: " + humanScore + " " + " to " + computerScore};

    if (humanScore < computerScore) { return "Game Over. You lose!"
        + " Score: " + humanScore + " to " + computerScore
    }

}


console.log(playGame())
