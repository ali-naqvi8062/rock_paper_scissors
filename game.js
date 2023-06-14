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

console.log(getComputerChoice());
