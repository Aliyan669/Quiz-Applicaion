var quizQuestion = [
  {
    num: 1,
    question: "HTML stand for ________",
    Option: {
      a: "Hyper text markup Language",
      b: "Hyper text programming Language",
      c: "Hyper text styling Language",
      d: "Hyper text scripting Language",
    },
    answer: "Hyper text markup Language",
  },
  {
    num: 2,
    question: "Which type of JavaScript Languages is:",
    Option: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    answer: "Object-Base",
  },
  {
    num: 3,
    question: "The 'function' and  'var' are known as:",
    Option: {
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
    },
    answer: "Declaration statements",
  },
  {
    num: 4,
    question: "who is the present president of pakistan?",
    Option: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    answer: "Arif Alvi",
  },
  {
    num: 5,
    question: "How many prayers in a day:",
    Option: {
      a: "6",
      b: "5",
      c: "3",
      d: "none",
    },
    answer: "5",
  },
  {
    num: 6,
    question: "How many total surah in quran?",
    Option: {
      a: "113",
      b: "114",
      c: "112",
      d: "111",
    },
    answer: "114",
  },
  {
    num: 7,
    question: "The correct sequence of HTML tags for starting a webpage is:",
    Option: {
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Title, Body",
      d: "HTML, Title , Head,  Body",
    },
    answer: "HTML, Head, Title, Body",
  },
];



var htmlQuestion = document.getElementById("htmlQuestion");

var resultName = document.getElementById('resultname')


var htmllist = document.getElementsByClassName("htmlList");
// console.log(quizQuestions[0].question);
// console.log(htmllist);
var nextQuesBtn = document.getElementById("nextQuesBtn");
var counterValue = document.getElementById("counterValue");
var quizBox = document.getElementById("quizBox");

var counter = 0;

var resultValue = document.getElementById("resultValue");

var list=document.getElementById('list')

var strtbtn =document.getElementById('strtbtn')




function start(){
  htmlQuestion.innerHTML = quizQuestion[counter].question;
  htmllist[0].innerHTML = quizQuestion[counter].Option.a;
  htmllist[1].innerHTML = quizQuestion[counter].Option.b;
  htmllist[2].innerHTML = quizQuestion[counter].Option.c;
  htmllist[3].innerHTML = quizQuestion[counter].Option.d;
  quizBox.className= "mainBox"
  list.className ="body"
  strtbtn.className ="hide"
counterValue.className= "countrval"

  counterValue.innerHTML = counter + 1 + " / " + quizQuestion.length;
}


function nextQes() {
  counter++;
  if (counter < quizQuestion.length) {
    start();
    
    
    counterValue.innerHTML = counter + 1 + " / " + quizQuestion.length;
  } else {
   
    quizBox.style.display = "none";
    resultName.innerHTML = "Results"
    resultName.className = "rename"
    // console.log(resultName)
    resultValue.className = "revalue";
    // console.log(resultValue)
    resultValue.innerHTML = "Results"
    resultValue.innerHTML = "Total Score :  "+score;
 

  }
  //  if(counter< quizQuestions.length)
  nextQuesBtn.className = "hide";

  for (var i = 0; i < htmllist.length; i++) {
    htmllist[i].classList.remove("disabled");
    htmllist[i].style.backgroundColor = "#FFD700";
  }
}




var score = 0;

function checkAns(e) {

  //   console.log(e.innerHTML == quizQuestions[counter].answer);
  nextQuesBtn.className = "show";
  if (e.innerHTML == quizQuestion[counter].answer){
   
  
     score += 10;
      //  console.log(score)
    e.style.backgroundColor = "green";
     
  } else {
    e.style.backgroundColor = "red";
    // score += 10;
    // console.log(score)
  }
    for (var i = 0; i < htmllist.length; i++) {
      if (htmllist[i].innerHTML == quizQuestion[counter].answer){
        htmllist[i].style.backgroundColor = "green";
     
      }
    }
  for (var i = 0; i < htmllist.length; i++) {
    htmllist[i].className += " disabled";
  }
}
