const questions =[
    {
        question: " which of the following can read and render HTML web page?",
        answer: [
            { text: "Server", correct: false},
            { text: "web browser", correct: true},
            { text: "hend tak", correct: false},
            { text: "empty", correct: false},
        ]
    },
    {
        question: "  Identify the range of byte data types in JavaScript.?",
        answer: [
            { text: "-10to9", correct: false},
            { text: "-128to127", correct: true},
            { text: "-32768to32767", correct: false},
            { text: "-25515464562to565656", correct: false},
        ]
    },
    {
        question: "  Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.?",
        answer: [
            { text: "new", correct: true},
            { text: "new malloc", correct: false},
            { text: "alloc", correct: false},
            { text: "malloc", correct: false},
        ]
    },
    {
        question: " The latest HTML standard is?",
        answer: [
            { text: "HTML 4.0", correct: false},
            { text: "HTML 5.0", correct: true},
            { text: "XML", correct: false},
            { text: "SGML", correct: false},
        ]
    },
    {
        question: " Why were cookies designed?",
        answer: [
            { text: "for server-side programming", correct: true},
            { text: "For client-side programming", correct: false},
            { text: "both a and b", correct: false},
            { text: "None", correct: false},
        ]
    },
    {
        question: " What are variables used in JavaScript programs?",
        answer: [
            { text: "varying randomly", correct: false},
            { text: "Storing number, dataes, and other values", correct: true},
            { text: "Used as header files", correct: false},
            { text: "none of the above", correct: false},
        ]
    },
    {
        question: "  Simple network management protocol uses which of the following port number?",
        answer: [
            { text: "164", correct: false},
            { text: "163", correct: true},
            { text: "160", correct: false},
            { text: "161", correct: false},
        ]
    },
    {
        question: " Choose among the following, which is the most common internet protocol. ?",
        answer: [
            { text: "PPP", correct: false},
            { text: "FTP", correct: false},
            { text: "TCP/IP", correct: true},
            { text: "SMPT", correct: false},
        ]
    },
    {
        question: " Full form of W3C is _____________?",
        answer: [
            { text: "World Wide Websites community", correct: false},
            { text: "World Wide Web community", correct: true},
            { text: "World Wide Webesites consortium", correct: false},
            { text: "World Wide Web consortium", correct: false},
        ]
    },
    {
        question: " Which attribute is used to provide a unique name to an HTML element?",
        answer: [
            { text: "id", correct: false},
            { text: "class", correct: true},
            { text: "type", correct: false},
            { text: "None", correct: false},
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
        button.addEventListener("click",(e)=>{selectAnswer(e)});
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
    console.log(selectedBtn)
  console.log(  selectedBtn.dataset)
  var data = JSON.parse(JSON.stringify(selectedBtn.dataset))

    const isCorrect = data.currect==='true' 
   
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

        Array.from(answerButtons.children).forEach(button =>{
            const data1 = JSON.parse(JSON.stringify(button.dataset))
            console.log(data1)
            if(data1.currect === "true"){
                console.log(button)
                button.classList.add("correct");
    
            }
            button.disabled = true;
    });


    }

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

