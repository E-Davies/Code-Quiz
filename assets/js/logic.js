let startBtn = document.getElementById('start'); 
let questionScreen = document.getElementById('questions');
let startScreen = document.getElementById('start-screen');
let time = document.getElementById('time');
let endScreen = document.getElementById('end-screen');

let startingTime = 5;

startBtn.addEventListener('click', function(){
    //hide start screen and renders the question screen when startBtn is clicked 
    startScreen.setAttribute('class', 'hide');
    questionScreen.setAttribute('class', '');
    
    //timer is started when startBtn is clicked - setInterval runs every 1sec and decreases startingTime by 1 each time to create the timer
    let timer = setInterval(()=>{
        time.textContent = startingTime;
        startingTime--;
        
    //Once startingTime reaches zero it cancels the setInterval with clearInterval(timer) and then renders the end-screen.
        if(startingTime === -1){
            clearInterval(timer) 
            endScreen.setAttribute('class', '');
            questionScreen.setAttribute('class', 'hide');
        }
    }, 1000); // 1sec (1000ms) interval
    
    //Add function here? to show first question?


})



//************************QUESTIONS************************ */

//an array of objects to hold each question, multiple choice options & the correct answer
const questionsArray = [
    {
        title: 'This is my question',
        choice: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: ''
    },

    {
        title: 'This is my question',
        choice: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: ''
    },

    {
        title: 'This is my question',
        choice: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: ''
    },

    {
        title: 'This is my question',
        choice: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: ''
    },

    {
        title: 'This is my question',
        choice: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: ''
    },
]


let currentQuestionIndex = 0; // everytime user answers Q, increment currentQuestionIndex to render next Q

//create a func to render a Q (this can then be used multiple times - like the todo list task for the rendering)
