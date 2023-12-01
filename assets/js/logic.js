let startBtn = document.getElementById('start'); 
let questionScreen = document.getElementById('questions');
let startScreen = document.getElementById('start-screen');
let time = document.getElementById('time');
let endScreen = document.getElementById('end-screen');
let finalScore = document.getElementById('final-score');

let startingTime = 16; //make this 1 extra than needed - so i you want 10 second timer - set this to 11

startBtn.addEventListener('click', () => {
    //hide start screen and renders the question screen when startBtn is clicked 
    startScreen.setAttribute('class', 'hide');
    questionScreen.setAttribute('class', '');
    renderQuestion();
    
    //timer is started when startBtn is clicked - setInterval runs every 1sec and decreases startingTime by 1 each time to create the timer
    let timer = setInterval(() => {
        startingTime--;
        time.textContent = startingTime;
        
    //Once startingTime reaches zero it cancels the setInterval with clearInterval(timer) and then renders the end-screen.
        if(startingTime === 0){
            clearInterval(timer) 
            endScreen.setAttribute('class', '');
            questionScreen.setAttribute('class', 'hide');
            finalScore.textContent = startingTime;
        }
    }, 1000); // 1sec (1000ms) interval
});



