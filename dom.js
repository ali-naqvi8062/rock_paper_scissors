const btn = document.querySelector('.play');

const gameBox = document.querySelector('.game');

const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.classList.add('bux');
btnPaper.classList.add('bux');
btnScissors.classList.add('bux');

btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';


btn.addEventListener('click', function (e) {

    btn.remove()

    gameBox.appendChild(btnRock);
    gameBox.appendChild(btnPaper);
    gameBox.appendChild(btnScissors);


  });

  function getComputerChoice() {

    let x = Math.floor(Math.random() * 3) + 1;
    let choice1 = 'Rock';
    let choice2 = 'Paper';
    let choice3 = 'Scissors';

    if (x === 1){
        return choice1;
    }
    else if (x === 2){
        return choice2;
    }
    else if (x === 3){
        return choice3;
    }

}

function playRound(playerSelection, computerSelection) {

    let x = playerSelection.toUpperCase();
    let y = computerSelection.toUpperCase(); // make both selections uppercase to make it case insensitive.

    if (x === y){ //begin by checking for a tie.
        return `The round is a tie! Both players chose ${x}`
    }

    if (x === 'ROCK'){
        if (y === 'PAPER'){
            return `You Lose! CPU chose ${y} and you chose ${x}`
        }
        else if (y === 'SCISSORS'){
            return `You win! CPU chose ${y} and you chose ${x}`
        }
    }

    else if (x === 'PAPER'){
        if (y === 'SCISSORS'){
            return `You Lose! CPU chose ${y} and you chose ${x}`
        }
        else if (y === 'ROCK'){
            return `You win! CPU chose ${y} and you chose ${x}`
        }
    }

    else if (x === 'SCISSORS'){
        if (y === 'ROCK'){
            return `You Lose! CPU chose ${y} and you chose ${x}`
        }
        else if (y === 'PAPER'){
            return `You win! CPU chose ${y} and you chose ${x}`
        }
    }
  
}

function game() {

    let count = 0;
    let cpuScore = 0;
    let playerScore = 0;
    while (count < 5){

        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper or Scissors?!");
        let result = playRound(playerSelection, computerSelection);
        if (result.slice(0,7)==='You win'){
            playerScore++;
        }
        else if (result.slice(0, 8)==='You Lose') {
            cpuScore++
        }
        console.log(result);
        count++;
    }

    return `CPU score: ${cpuScore}, player score: ${playerScore}`

}

btnRock.addEventListener('click', function (e) {
    console.log(playRound('Rock', getComputerChoice()));
  });

btnPaper.addEventListener('click', function (e) {
    console.log(playRound('Paper', getComputerChoice()));
  });

btnScissors.addEventListener('click', function (e) {
    console.log(playRound('Scissors', getComputerChoice()));
  });

  