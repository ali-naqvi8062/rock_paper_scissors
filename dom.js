const btn = document.querySelector('.play');

const gameBox = document.querySelector('.game');

const titleInfo = document.querySelector('.welcome');

const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.classList.add('bux');
btnPaper.classList.add('bux');
btnScissors.classList.add('bux');

btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

let container = document.querySelector('#content');

const placeHolder = document.createElement('div')
const myScore = document.createElement('div');
const cpuSelect = document.createElement('div');

placeHolder.classList.add('score');

myScore.textContent = 'Your Score: ';
cpuSelect.textContent = 'CPU Score: ';


btn.addEventListener('click', function (e) {

    btn.remove()

    gameBox.appendChild(btnRock);
    gameBox.appendChild(btnPaper);
    gameBox.appendChild(btnScissors);

    container.appendChild(placeHolder);

    placeHolder.appendChild(myScore);
    placeHolder.appendChild(cpuSelect);


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
        return y;

    }

    if (x === 'ROCK'){
        if (y === 'PAPER'){
            return ['You Lose!', y];
        }
        else if (y === 'SCISSORS'){
            return ['You win!', y];
        }
    }

    else if (x === 'PAPER'){
        if (y === 'SCISSORS'){
            return ['You Lose!', y];
        }
        else if (y === 'ROCK'){
            return ['You win!', y];
        }
    }

    else if (x === 'SCISSORS'){
        if (y === 'ROCK'){
            return ['You Lose!', y];
        }
        else if (y === 'PAPER'){
            return ['You win!', y];
        }
    }
  
}

let playerScore = 0;
let cpuScore = 0;

btnRock.addEventListener('click', function (e) {

    let result = playRound('Rock', getComputerChoice());

    console.log(result[0]);

    if (result[0].slice(0,7)=='You win'){
        titleInfo.style.color = 'Blue';
        titleInfo.textContent = `You win! You chose rock and the cpu chose ${result[1]}`
        playerScore++;
    }
    else if (result[0].slice(0, 8)=='You Lose') {
        titleInfo.style.color = 'Red';
        titleInfo.textContent = `You lose! You chose rock and the cpu chose ${result[1]}`
        cpuScore++;
    }
    else {
        titleInfo.style.color = 'White';
        titleInfo.textContent = `That round was a tie! Both players chose rock`
    }

    myScore.textContent = `Your Score: ${playerScore}`;
    cpuSelect.textContent = `CPU Score: ${cpuScore}`;

  });

  btnPaper.addEventListener('click', function (e) {

    let result = playRound('Paper', getComputerChoice());

    console.log(result[0]);

    if (result[0].slice(0,7)=='You win'){
        titleInfo.style.color = 'Blue';
        titleInfo.textContent = `You win! You chose paper and the cpu chose ${result[1]}`
        playerScore++;
    }
    else if (result[0].slice(0, 8)=='You Lose') {
        titleInfo.style.color = 'Red';
        titleInfo.textContent = `You lose! You chose paper and the cpu chose ${result[1]}`
        cpuScore++;
    }
    else {
        titleInfo.style.color = 'White';
        titleInfo.textContent = `That round was a tie! Both players chose paper`
    }

    myScore.textContent = `Your Score: ${playerScore}`;
    cpuSelect.textContent = `CPU Score: ${cpuScore}`;

  });

  btnScissors.addEventListener('click', function (e) {

    let result = playRound('Scissors', getComputerChoice());

    console.log(result[0]);

    if (result[0].slice(0,7)=='You win'){
        titleInfo.style.color = 'Blue';
        titleInfo.textContent = `You win! You chose scissors and the cpu chose ${result[1]}`
        playerScore++;
    }
    else if (result[0].slice(0, 8)=='You Lose') {
        titleInfo.style.color = 'Red';
        titleInfo.textContent = `You lose! You chose scissors and the cpu chose ${result[1]}`
        cpuScore++;
    }
    else {
        titleInfo.style.color = 'White';
        titleInfo.textContent = `That round was a tie! Both players chose scissors`
    }

    myScore.textContent = `Your Score: ${playerScore}`;
    cpuSelect.textContent = `CPU Score: ${cpuScore}`;

  });



  