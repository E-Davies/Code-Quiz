// // let timer = setInterval(countdown,1000);

// // function countdown(){
// //     startingTime--;
// //     time.textContent = startingTime;
// // }

// // function stopCountdown(){
// //     clearInterval(timer);
// // };



/***************** LOGIC.JS **************************************** */

// let startBtn = document.getElementById('start'); 
// let questionScreen = document.getElementById('questions');
// let startScreen = document.getElementById('start-screen');
// let time = document.getElementById('time');
// let endScreen = document.getElementById('end-screen');
// let finalScore = document.getElementById('final-score');

// let startingTime = 20; //make this 1 extra than needed - so i you want 10 second timer - set this to 11

// function finishQuiz(){
//     time.textContent = startingTime;
//     // clearInterval(timer);
//     endScreen.setAttribute('class', '');
//     questionScreen.setAttribute('class', 'hide');
//     finalScore.textContent = startingTime;
// };

// startBtn.addEventListener('click', () => {
//     //hide start screen and renders the question screen when startBtn is clicked 
//     startScreen.setAttribute('class', 'hide');
//     questionScreen.setAttribute('class', '');
//     time.textContent = startingTime;
//     renderQuestion();
    
//     //timer is started when startBtn is clicked - setInterval runs every 1sec and decreases startingTime by 1 each time to create the timer
//     let timer = setInterval(() => {
//         startingTime--;
//         time.textContent = startingTime;
        
//     //Once startingTime reaches zero or less it cancels the setInterval with clearInterval(timer) and then renders the end-screen.
//         if(startingTime <= 0){
//             clearInterval(timer) 
//             startingTime = 0; //set startingTimer to 0 beacuse if incorrect answers given - it might take it to a minus number
//             // time.textContent = startingTime;
//             // endScreen.setAttribute('class', '');
//             // questionScreen.setAttribute('class', 'hide');
//             // finalScore.textContent = startingTime;
//             finishQuiz();
//         }
//     }, 1000); // 1sec (1000ms) interval
// });
