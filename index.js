function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];

    //get random number from 0 to 2
    choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function play(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors';
        } else if (computerSelection === 'rock') {
            return 'Tie! Rock and Rock';
        } else if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection === 'paper') {
            return 'Tie! Paper and Paper';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            return 'Tie! Scissors and Scissors';
        } else if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper';
        }
    }

}

function getPlayerChoice() {
    return prompt("Enter your choice from (paper, rock, scissors)", 'rock')
}


