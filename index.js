function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    //get random number from 0 to 2
    choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

function getComputerScore() {
    const computerScore = document.querySelector('#computerScore');
    return computerScore;
}

function getPlayerScore() {
    const playerScore = document.querySelector('#playerScore');
    return playerScore;
}

function changePlayerScore(newScore) {
    const playerScore = getPlayerScore();
    playerScore.textContent = newScore;
}

function changeComputerScore(newScore) {
    const computerScore = getComputerScore();
    computerScore.textContent = newScore;
}

function updateState(text) {
    const state = document.querySelector('.state');
    state.textContent = text;
}

function checkWinner() {
    const playerScore = Number(document.querySelector('#playerScore').textContent);
    const computerScore = Number(document.querySelector('#computerScore').textContent);
    if (playerScore === 5) {
        resetGame();
        window.location.replace("./win.html");
    } else if (computerScore === 5) {
        resetGame();
        window.location.replace("./lose.html");
    }

}


function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();

    let playerScore = getPlayerScore();
    let computerScore = getComputerScore();

    let playerScoreText = Number(playerScore.textContent);
    let computerScoreText = Number(computerScore.textContent);

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScoreText++;
            changePlayerScore(playerScoreText);
            updateState('You Win! Rock beats Scissors');
        } else if (computerSelection === 'rock') {
            updateState('Tie! Rock and Rock');
        } else if (computerSelection === 'paper') {
            computerScoreText++;
            changeComputerScore(computerScoreText);
            updateState('You Lose! Paper beats Rock');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScoreText++;
            changeComputerScore(computerScoreText);
            updateState('You Lose! Scissors beats Paper');
        } else if (computerSelection === 'rock') {
            playerScoreText++;
            changePlayerScore(playerScoreText);
            updateState('You Win! Paper beats Rock');
        } else if (computerSelection === 'paper') {
            updateState('Tie! Paper and Paper');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            updateState('Tie! Scissors and Scissors');
        } else if (computerSelection === 'rock') {
            computerScoreText++;
            changeComputerScore(computerScoreText);
            updateState('You Lose! Rock beats Scissors');
        } else if (computerSelection === 'paper') {
            playerScoreText++;
            changePlayerScore(playerScoreText);
            updateState('You Win! Scissors beats Paper');
        }
    }

}

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', function () {
        let playerSelection = choice.firstChild.alt;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        checkWinner();
    });

    choice.addEventListener('mouseenter', function() {
        choice.classList.add('playing');
    })

    choice.addEventListener('mouseleave', function() {
        choice.classList.remove('playing');
    })
})

function resetGame() {
    changeComputerScore(0);
    changePlayerScore(0);
    updateState('');
}

const playAgain = document.querySelector('.playAgain');
playAgain.addEventListener('click',function () {
    window.location.replace("./index.html");
});
playAgain.addEventListener('mouseenter', function() {
    playAgain.classList.add('playing');
})

playAgain.addEventListener('mouseleave', function() {
    playAgain.classList.remove('playing');
})
