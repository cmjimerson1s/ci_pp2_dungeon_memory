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
        answer3: 'Ernist Hemingway',
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
        question: 'The MadHater may invite you to what sort of party?',
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
const maximumQuestions = 4;

beginQuiz = () => {
    questionAmount = 0;
    score = 0;
    possibleQuestions = [...myQuestions]
    generateNewQuestions();
}

generateNewQuestions = () => {
    if(possibleQuestions.length === 0 || questionAmount > maximumQuestions) {
        localStorage.setItem('currentScore', score)
    }
    questionAmount++;
    questionNumber.innerText = `Number ${questionAmount} of ${maximumQuestions}`;

    const myQuestionIndex = Math.floor(Math.random() * possibleQuestions.length);
    thisQuestion = possibleQuestions[myQuestionIndex];
    quizQuestion.innerText = thisQuestion.myQuestions;

    options.forEach(options => {
        const num = options.dataset['number'];
        options.innerText = thisQuestion['choice' + num];
    })

    thisQuestion.splice(myQuestionIndex, 1);

    acceptingAnswers = true;
}

options.forEach(options => {
    options.addEventListener('click')
} 
    )



