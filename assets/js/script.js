var score = 0
var userTurn
var timer
//target quiz items//
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
// var submitBtn = document.getElementById("submitbutton");

// // submit button click event listnr//
// submitBtn.addEventListener("click", function(){
//     alert("BOO!");});
    
//have a timer//
// var dateObjectName = new Date();

//dynamically display questions/answer options within card//
var quizData = [
    // {
    //     question:"Good Luck!",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //     correct: "",
    // }
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<JavaScript>",
        b: "<script>",
        c: "<scripting>",
        d: "<js>",
        correct: "<script>",

    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element '<p id='demo'>This is a demonstration.</p>' ?",
        a: "document.getElementbyName('p').innerHTML = 'Hello World';",
        b: "#demo.innerHTML = 'Hello World!';",
        c: "document.getElement('p').innerHTML='Hello World!';",
        d: "document.getElementbyId(demo).innerHTML='Hello World!';",
        correct: "document.getElementById('demo').innerHTML = 'Hello World!';",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the <head> section and the <body> section are correct",
        b: "The <body> section",
        c: "The <head> section" ,
        d: "The <footer> section",
        correct: "Both the <head> section and the <body> section are correct",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "alert('Hello World');",
        d: "msg('Hello World');",
        correct: "alert('Hello World');",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()",
        d: "function is myFunction()",
        correct: "function myFunction()",
    }
]

//target quiz items//
// var quiz = document.getElementById("quiz")
// var answerEls = document.querySelectorAll(".answer")
// var questionEl = document.getElementById("question")
// var a_text = document.getElementById("a_text")
// var b_text = document.getElementById("b_text")
// var c_text = document.getElementById("c_text")
// var d_text = document.getElementById("d_text")
// var submitBtn = document.getElementById("submitbutton")
    


//Start quiz machine//
var currentQuiz = 0
var score = 0

//dynamically display questions/answer options within card
loadQuiz();

function loadQuiz(){
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz] 
  questionEl.innerHTML = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// var submitBtn = document.getElementById("submitbutton");

// // submit button click event listnr//
// submitBtn.addEventListener("click", function(){
//     alert("BOO!");});

// submit button click event listnr//
// submitBtn.addEventListener("click") {
//     window.alert("boo!")
//     console.log(this)
// }
 
    
    // var answer = getSelected()
    // //check answer//
    // if(answer){
    //     if(answer === quizData[currentQuiz].correct){
    //     //update score//
    //         score++
    //     }
    //     //go to next question//
    //     currentQuiz++

    //     if(currentQuiz< quizData.length){
    //         loadQuiz()
    //     }else{
    //     //display end of game message and score//
    //     quiz.innerHTML =
    //     <h2>Game Over!</h2>
    //     }
//     }
// }

//store a score
//display a score
//have a timer
//timer needs to start countdown when "start" button is pushed = event listener then function
//have a machine aka a function that subtracts time depending on answer choices being incorrect
//display a score = alert
//hold a score = variable
//user input for initials/name to save score
//save scores to local storage
