const btn = document.querySelector('.play');

btn.addEventListener('click', function (e) {

    btn.remove()

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

    gameBox.appendChild(btnRock);
    gameBox.appendChild(btnPaper);
    gameBox.appendChild(btnScissors);


  });

  