let question = document.getElementById('question-title');
let choicesDiv = document.getElementById('choices');


let currentQuestionIndex = 0 // every time the user answers a Q -> increment currentQuestionIndex to render next Q


//an array of objects to hold each question, multiple choice options & the correct answer
const questionsArray = [
    {
        title: `${currentQuestionIndex + 1}. This is question 1`,
        choice: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
        correctAnswer: {choiceindex: '0'} //this tells you that the correct answer is at index 0 of the choice array - so that is 'answer 1'
    },

    {
        title: `${currentQuestionIndex + 1}. This is question 2`,
        choice: ['1', '2', '3', '4'],
        correctAnswer: {choiceindex: '1'} //this tells you that the correct answer is at index 1 of the choice array - so that is '2'
    },

    {
        title: `${currentQuestionIndex + 1}. This is question 3`,
        choice: ['a 1', 'a 2', 'a 3', 'a 4'],
        correctAnswer: {choiceindex: '2'} //this tells you that the correct answer is at index 2 of the choice array - so that is 'a 3'
    },

    {
        title: `${currentQuestionIndex + 1}. This is question 4`,
        choice: ['its 1', 'its 2', 'its 3', 'its 4'],
        correctAnswer: {choiceindex: '3'} //this tells you that the correct answer is at index 3 of the choice array - so that is 'its 4' 
    },

    {
        title: `${currentQuestionIndex + 1}. This is question 5`,
        choice: ['defo 1', 'defo 2', 'defo 3', 'defo 4'],
        correctAnswer: {choiceindex: '1'} //this tells you that the correct answer is at index 1 of the choice array - so that is 'defo 2' 
    },
]


//create a func to render a Q (this can then be used multiple times - like the todo list task for the rendering)
function renderQuestion(){
    //render question
    question.textContent = questionsArray[currentQuestionIndex].title;
    
    //render first answer option for question
    const option1 = document.createElement('button');
    option1.setAttribute('data-choiceindex', 0);
    option1.textContent = questionsArray[currentQuestionIndex].choice[0];
    choicesDiv.appendChild(option1);

    //render second answer option for question
    const option2 = document.createElement('button');
    option2.setAttribute('data-choiceindex', 1);
    option2.textContent = questionsArray[currentQuestionIndex].choice[1];
    choicesDiv.appendChild(option2);

    //render third answer option for question
    const option3 = document.createElement('button');
    option3.setAttribute('data-choiceindex', 2);
    option3.textContent = questionsArray[currentQuestionIndex].choice[2];
    choicesDiv.appendChild(option3);

    //render fourth answer option for question
    const option4 = document.createElement('button');
    option4.setAttribute('data-choiceindex', 3);
    option4.textContent = questionsArray[currentQuestionIndex].choice[3];
    choicesDiv.appendChild(option4);
};



choicesDiv.addEventListener('click', (event) => {
    if(event.target.matches('button')){

        //console.log(event.target.dataset);

        //Turn the DOM dataset and correctAnswer objects into strings so they can be compared to see if they match/correct answer clicked
        let eventTargetDataset = JSON.stringify(event.target.dataset);
        let AnswerNeeded = JSON.stringify(questionsArray[currentQuestionIndex].correctAnswer);
        // console.log(eventTargetDataset);
        // console.log(AnswerNeeded);

        if(eventTargetDataset === AnswerNeeded){
            console.log('correct answer clicked');
            // if Correct - display 'Correct' with a setAttribute('class', 'feedback')
            const correct = document.createElement('p');
            correct.setAttribute('class', 'feedback');
            correct.textContent = 'Correct';
            choicesDiv.appendChild(correct);
            //load next question - currentQuestionIndex++ and remove correct/wrong (after a setTimeOut..?)
            currentQuestionIndex++;
            renderQuestion(); // need to remove question to then render new question - Do I delete previous render or over write it...?

        }else{
            console.log('incorrect answer clicked');
            // if wrong - display 'Wrong' with a setAttribute('class', 'feedback')
            const incorrect = document.createElement('p');
            incorrect.setAttribute('class', 'feedback');
            incorrect.textContent = 'Wrong';
            choicesDiv.appendChild(incorrect);

            //and remove 10secs from timer
            startingTime = startingTime - 10; //timer goes below 0 - it keeps running! - **** FIX ****

            //load next question - currentQuestionIndex++ and remove correct/wrong (after a setTimeOut..?)
            currentQuestionIndex++;
            renderQuestion(); // need to remove question to then render new question - Do I delete previous render or over write it...?
        }
    }
});