const btn = document.querySelector('.play');

btn.addEventListener('click', function (e) {
    setTimeout(function(){
        btn.style.display = 'none';; //This will be delayed for one second
    }, 300);
  });