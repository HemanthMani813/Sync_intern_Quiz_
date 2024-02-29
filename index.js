
let questions = [
    {
        numb: 1,
        question: "What does HTML stands for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Type Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },

    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "A. Cascading Style Sheet",
        options: [
            "A. Cascading Style Sheet",
            "B. Cute Style Sheet",
            "C. Computer Style Sheet",
            "D. Cohedal Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stands for?",
        answer: "A. Hypertext Preprocessor",
        options: [
            "A. Hypertext Preprocessor",
            "B. Hometext Preprocessor",
            "C. Hypertext Programming",
            "D. Programming Hypertext Preprocessor"
        ]
    },

    {
        numb: 4,
        question: "What does SQL stands for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Stylesheet Query Language",
            "C. Structured Question Language",
            "D. Structured Query Language"
        ]
    },

    {
        numb: 5,
        question: "What does XML stands for?",
        answer: "D. Extensible Markup Language",
        options: [
            "A. Excellent Markup Language", 
            "B. ExploreMarkup Language",
            "C. Extra Markup Language",
            "D. Extensible Markup Language"
        ]
    },
];

const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () =>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
    
}

tryAgainBtn.onclick = () =>{
    quizBox.classList.add(`active`);
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}


goHomeBtn.onclick = () =>{
    quizSection.classList.remove(`active`);
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);

}
    
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(`.next-btn`);

nextBtn.onclick = () => {
    if(questionCount < questions.length -1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionCount);

        nextBtn.classList.remove('active');
    }
    else{
        showResultBox();

    }
    
}

const optionList = document.querySelector('.option-list');

function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    let  optionTag = `<div class = "option"><span>${questions[index].options[0]}</span></div>
        <div class = "option"><span>${questions[index].options[1]}</span></div>
        <div class = "option"><span>${questions[index].options[2]}</span></div>
        <div class = "option"><span>${questions[index].options[3]}</span></div>`;

        optionList.innerHTML = optionTag;

        const option = document.querySelectorAll('.option');

        for(let i =0; i< option.length;i++){
            option[i].setAttribute('onclick','optionSelected(this)');
        }

}


      
function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;

    if(userAnswer == correctAnswer){
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }else{
        answer.classList.add('incorrect');

        for(let i =0; i<allOptions; i++){
            if(optionList.children[i].textContent==correctAnswer){
                optionList.children[i].classList.setAttribute('class','option correct');
            }
        }
    }

    for(let i =0; i<allOptions; i++){
        optionList.classList.add('disabled');
    }

    nextBtn.classList.add(`active`);

    
    
}

function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}


function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;

}


function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector(`.circular-progress`);
    const progressValue = document.querySelector(`.progress-value`);

    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed=20;

    let progress = setInterval(()=>{
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255,255,255, .1) 0deg)`;
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    
    },speed);
    let canvasSel = document.querySelector('#canvasluv');
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 500,
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
    });

}