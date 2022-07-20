function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];

    //get random number from 0 to 2
    choice = Math.floor(Math.random() * 3);

    return choices[choice];
}

choice = getComputerChoice()
