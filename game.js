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

let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper or Scissors?!");

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

console.log(playRound(playerSelection, computerSelection));
