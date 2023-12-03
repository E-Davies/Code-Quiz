let highscores = document.getElementById('highscores');
let clearHightscores = document.getElementById('clear');


let initial = localStorage.getItem('initials').toLocaleUpperCase();
let score = localStorage.getItem('score');

let li = document.createElement('li');
li.textContent = `${initial}: ${score}`;
highscores.appendChild(li);

clearHightscores.addEventListener('click', () => {
    highscores.remove();
    localStorage.clear();
});