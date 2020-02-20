const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    setTime()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who created Javascript?',
        answers: [
            { text: 'Brendan Eich', correct: true },
            { text: 'Mitchell Baker', correct: false },
            { text: 'James Gosling', correct: false },
            { text: 'Chris Beard', correct: false },
        ]
    },
    {
        question: 'What is the HTML tag under which one can write the JavaScript code?',
        answers: [
            { text: '<javascript>', correct: false },
            { text: '<scripted>', correct: false },
            { text: '<script>', correct: true },
            { text: '<js>', correct: false },
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called “geek.js”?',
        answers: [
            { text: '<script src=”geek.js”>', correct: true },
            { text: '<script href=”geek.js”>', correct: false },
            { text: '<script ref=”geek.js”>', correct: false },
            { text: '<script name=”geek.js”>', correct: false },
        ]
    },
    {
        question: 'The external JavaScript file must contain <script> tag. True or False?',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'Which of the following is not a reserved word in JavaScript?',
        answers: [
            { text: 'interface', correct: false },
            { text: 'throws', correct: false },
            { text: 'program', correct: true },
            { text: 'short', correct: false },
        ]
    },
]

var timeEl = document.querySelector('#timer');
var secondsLeft = 76;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
