const questions =[
    {
        question: " which is largest animal in the world?",
        answer: [
            { text: "shark", correct: false},
            { text: "Bule whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: " which is largest animal in the world?",
        answer: [
            { text: "shark", correct: false},
            { text: "Bule whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-button");
let currentQuestionIndex = 0;
let score = 0;
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButtons.innerHTML = "Next";
    showQuestion();
 }
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + " ."+ currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.currect = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
 }

 function resetState(){
    nextButtons.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "ture"){
            button.classList.add("correct");

        }
        button.disabled = true;
});
     nextButtons.style.display = "block";
 }
 function handleNextButton(){
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${questions.length}! `;
    nextButtons.innerHTML = "play Again";
    nextButtons.style.display = "block";
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }
 nextButtons.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
 })

 startQuiz();

