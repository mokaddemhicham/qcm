const questions = [{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}
];
// declare variables
var question = document.getElementById("question"),
    answers = document.querySelectorAll(".answer"),
    list = document.getElementsByTagName("li"),
    a_text = document.getElementById("a_text"),
    b_text = document.getElementById("b_text"),
    c_text = document.getElementById("c_text"),
    d_text = document.getElementById("d_text"),
    finalScore = document.querySelector(".box-questions"), 
    countDown = document.querySelector(".countdown"),
    submit = document.getElementById("submit");
// load quiz
var currentQuestion = 0;
var score = 0;

loadQuiz();


function loadQuiz(){
    deselectAnswers();
    question.innerHTML = questions[currentQuestion].question;

    a_text.innerHTML = questions[currentQuestion].a;
    b_text.innerHTML = questions[currentQuestion].b;
    c_text.innerHTML = questions[currentQuestion].c;
    d_text.innerHTML = questions[currentQuestion].d;
}

function deselectAnswers() {
    for(var i = 0; i < answers.length; i++){
        answers[i].checked = false;
    }
}

function getSelected(){
    var answer ;
    for(var i = 0; i < answers.length; i++){
        if(answers[i].checked){
            answer = answers[i].id;
        }
    }
    return answer;
}



submit.addEventListener("click", ()=>{
    // Get Answer
    var answer = getSelected();
    
    // checking Answers
    if(answer){
        if(answer === questions[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < questions.length){
            loadQuiz();
        }else{
            var name = localStorage.getItem("username");
            clearInterval(cron);
            finalScore.innerHTML = '<table class="table table-bordered text-center"><thead><tr><th colspan="2">Welcome ' + name + '</th></tr></thead><tr><td>Score</td><td>' + score + '/' + questions.length + '</td></tr><tr><td>Time</td><td>'+ returnData(minutes) + " : " + returnData(secondes) +'</td></tr></table>';
            submit.innerHTML = 'Reload';
            submit.setAttribute('onclick','location.replace("index.html")');
        }
    }
});


 // timer

 var timer = document.querySelector(".timer");
 var secondes = 0;
 var minutes = 0;
 var millisecondes = 0;
 var hour = 0;
 var cron;

 function time(){
    if ((millisecondes += 10) == 1000) {
      millisecondes = 0;
      secondes++;
    }
    if (secondes == 60) {
      secondes = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hour++;
    }
    document.getElementById('minute').innerHTML = returnData(minutes);
    document.getElementById('second').innerHTML = returnData(secondes);
  }
  
  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }
  cron = setInterval(() => { time(); }, 10);