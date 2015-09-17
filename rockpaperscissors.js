////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	if (move === "rock" || "paper" || "scissors") {
		return move;
	}
	else {
		getInput();
	}
}

function getComputerMove(move) {
	if (move === "rock" || "paper" || "scissors") {
		return move;
	}
	else {
		randomPlay();
	}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock") {
        switch(computerMove) {
            case "rock":
            winner = "tie";
            break;
            case "scissors":
            winner = "player";
            break;
            case "paper":
            winner = "computer";
            break;
        }
    }
    else if (playerMove === "paper") {
        switch(computerMove) {
            case "rock":
            winner = "player";
            break;
            case "scissors":
            winner = "computer";
            break;
            case "paper":
            winner = "tie";
            break;
        }
    }

    else if (playerMove === "scissors") {
        switch(computerMove) {
            case "rock":
            winner = "computer";
            break;
            case "scissors":
            winner = "tie";
            break;
            case "paper":
            winner = "player";
            break;
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove; 
    var computerMove;
    while((playerWins < 5) && (computerWins < 5) ){

        playerMove = getPlayerMove(getInput());
            //console.log(playerMove)
        computerMove = randomPlay();
            //console.log("computer plays " + computerMove)
        switch( getWinner(playerMove,computerMove) ){
            case "player":
                playerWins += 1;
                console.log("computer lost with " + computerMove + ", lucky human score is " + playerWins);
                break;
            case "computer":
                computerWins += 1;
                console.log("computer won with " + computerMove +", computer score is " + computerWins);
                break;
            case "tie":
                console.log("lucky for you, we tied");
            }
        //console.log("Player wins: " + playerWins)
        //console.log("Computer wins: " + computerWins)
    }
    return (playerWins === 5) ? "Congratulations player!" : "Exterminate humans" ;

}
playToFive();