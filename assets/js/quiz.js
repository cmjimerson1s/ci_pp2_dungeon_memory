const quizQuestion = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const scoreValue = document.querySelector('#score');
const questionNumber = document.querySelector('#question-number');

let thisQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionAmount = 0;
let possibleQuestions = [];

const myQuestions = [
    {
        question: 'Who is considered to be the father of modern fantasy?',
        answer1: 'J.K. Rowling',
        answer2: 'J.R.R. Tolkien',
        answer3: 'Ernest Hemingway',
        correct:2,
    
    },
    {
        question: 'In Harry Potter the character Dobby is what sort of creature?',
        answer1:'House Elf',
        answer2: 'Goblin',
        answer3: 'Witch', 
        correct:1,
    
    },
    {
        question: 'In Game of Thrones what is the name of the highest quality steel in the series?',
        answer1: 'Targaryen',
        answer2: 'Adamantium',
        answer3: 'Valyrian',
        correct:3,
        
    },
    {
        question: 'Who pulled the sword from the stone?',
        answer1: 'King Arthur',
        answer2: 'Merlin',
        answer3: 'Queen Maeve', 
        correct:1,
    },
    {
        question: 'Gandolf had the title of "the Grey" and what else?',
        answer1: 'the Blue', 
        answer2: 'the Green', 
        answer3: 'the White', 
        correct:3,
    },
    {
        question: 'A minotaur is a mix between a human and what animal?',
        answer1: 'Bull', 
        answer2: 'Horse', 
        answer3: 'Goat', 
        correct:1,
    },
    {
        question: 'What weapon does Gimli the dwarf prefer?',
        answer1: 'Sword',
        answer2: 'Axe', 
        answer3: 'Whip', 
        correct:2,
    },
    {
        question: 'Who killed Dumbledore?',
        answer1: 'Harry Potter',
        answer2: 'Hagrid', 
        answer3: 'Snape',
        correct:3,
    },
    {
        question: 'The Mad Hater may invite you to what sort of party?',
        answer1: 'Frat',
        answer2: 'Tea',
        answer3:'New Year Eve',
        correct:2,
    },
    {
        question: 'Where can you find Narnia?',
        answer1: 'In the oven', 
        answer2: 'In a wardrobe', 
        answer3: 'On the moon', 
        correct:2,
    }
    ];

const correctPoints = 10;
const maximumQuestions = 10;

function beginQuiz()  {
    questionAmount = 0;
    score = 0;
    possibleQuestions = [...myQuestions];
    generateNewQuestions();
}

function generateNewQuestions() {
    if(possibleQuestions.length === 0 || questionAmount > maximumQuestions) {
        localStorage.setItem('currentScore', score);
        alert(`Quiz Complete! You scored ${score} points!`);
        return window.location.assign('contact.html');
    }

    questionAmount++;
    questionNumber.innerText = `Number ${questionAmount} of ${maximumQuestions}`;

    const myQuestionIndex = Math.floor(Math.random() * possibleQuestions.length);
    thisQuestion = possibleQuestions[myQuestionIndex];
    quizQuestion.innerText = thisQuestion.question;

    options.forEach(answer => {
        const num1 = answer.dataset['number'];
        answer.innerText = thisQuestion['answer' + num1];
    });

    possibleQuestions.splice(myQuestionIndex, 1);

    acceptingAnswers = true;
}

options.forEach(answer => {
    answer.addEventListener('click', function(event)  {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const chosenOption = event.target;
        const chosenAnswer = chosenOption.dataset['number'];

        let statusResult = chosenAnswer == thisQuestion.correct ? 'right' : 'wrong';
    
        if(statusResult === 'right') {
            increaseScore(correctPoints);
            this.style.backgroundColor = "pink";
        }

        chosenOption.parentElement.classList.add(statusResult);

        setTimeout(() => {
            chosenOption.parentElement.classList.remove(statusResult);
            generateNewQuestions();

        }, 750);
    });
});

function increaseScore(num) {
    score +=num;
    scoreValue.innerText = score;
}

beginQuiz();


