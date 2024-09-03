/* 

In our UI, the player should be able to play the game by clicking on buttons rather than typing 
their answer in a prompt. 

For now, remove the logic that plays exactly five rounds.

1. Create three buttons, one for each selection. 

2. Add an event listener to the buttons that call your playRound function with the correct 
playerSelection every time a button is clicked. (you can keep the console.logs for this step)

3. Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.

*/

getComputerChoice = function() {
    const choices = ["rock", "paper", "scissors"];
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

let computerScore = 0
let humanScore = 0

const playRound = function(humanSelection, computerSelection) {
    

    if (computerSelection === "rock" && humanSelection === "scissors") {
        computerScore++;
        return ("You lose! Rock beats scissors.");
    }
    
    else if (computerSelection === "scissors" && humanSelection === "paper") {
        computerScore++;
        return ("You lose! Scissors beats paper.");
    }

    else if (computerSelection === "paper" && humanSelection === "rock") {
        computerScore++;
        return ("You lose! Paper beats rock.");
    }

    else if (computerSelection === "scissors" && humanSelection === "rock") {
        humanScore++;
        return ("You win! Rock beats scissors.");
    }

    else if (computerSelection === "paper" && humanSelection === "scissors") {
        humanScore++;
        return ("You win! Scissors beats paper.");
    }

    else if (computerSelection === "rock" && humanSelection === "paper") {
        humanScore++;
        return ("You win! Paper beats rock.");
    }
    else {
        return ("Tie!");
    }

    
};

const rock_btn = document.querySelector("#rock_btn");
const paper_btn = document.querySelector("#paper_btn");
const scissors_btn = document.querySelector("#scissors_btn");

const buttons = document.querySelectorAll("button");     
results = []      
gameOver = ""                                                           // buttons is a node list. It looks and acts much like an array.

buttons.forEach((button) => {                                           // we use the .forEach method to iterate through each button
                                                                        // and for each one we add a 'click' listener
  button.addEventListener("click", () => { 
    if (humanScore + computerScore === 5) { 
        if (humanScore > computerScore) { 
            alert("Game Over. You win!"
            + " Score: " + humanScore + " " + " to " + computerScore
  )};

        if (humanScore < computerScore) { 
            alert("Game Over. You lose!"
            + " Score: " + humanScore + " to " + computerScore
  )}

        // Reset the game
        results = [];
        humanScore = 0;
        computerScore = 0;
        const container = document.querySelector("#results");
        container.innerHTML = ''; // Clear the results displayed in the HTML
        return; // Exit the function to prevent further execution


    };
    
    if (button === rock_btn) {
        results.push(playRound("rock", getComputerChoice()))
       // console.log(results)

    }
    else if (button === paper_btn) {
        results.push(playRound("paper", getComputerChoice()))
        //console.log(results)
    }
    else {
        results.push(playRound("scissors", getComputerChoice()))
        //console.log(results)
    }

 /* console.log(Array.isArray(results)); // Should log true if results is an array
    console.log(results.length); // Should log the number of elements in results
    console.log(results); // Check the content of results
     // Join the results array into a string
    console.log(message); // Log the message
 */
    const container = document.querySelector("#results");
    const latestResult = results[results.length -1];
    message = results.join(', ');
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = latestResult; 
   
    container.appendChild(content);

    });
});