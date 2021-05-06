// Phish Off Quiz level 2
// Level 2 Malicious URLs and Links
// Created by Viacheslav Rawles

// References 
// Esp, C., 2020. Drag and drop count in console log. [online] Codepen. Available at: <https://codepen.io/clemence_esp/pen/NxpJVQ> [Accessed 26 April 2021].
// Tutorialspoint.com. 2021. JqueryUI - Draggable - Tutorialspoint. [online] Available at: <https://www.tutorialspoint.com/jqueryui/jqueryui_draggable.htm> [Accessed 26 April 2021].
// Edureka. 2019. JavaScript vs jQuery | Key Differences You Need to Know | Edureka. [online] Available at: <https://www.edureka.co/blog/javascript-vs-jquery/#:~:text=Though%20JavaScript%20is%20the%20basic,lines%20of%20code%20with%20JavaScript.> [Accessed 27 April 2021].
// Stack Overflow. 2013. JQuery-UI draggable reset to original position. [online] Available at: <https://stackoverflow.com/questions/15193640/jquery-ui-draggable-reset-to-original-position> [Accessed 4 May 2021].

// the question in position 0 will be displayed as the first question of the level 
var currentQuestion = 0;
// score will be 0 when the quiz level starts 
var score = 0;
// total questions count
var allQuestions = questions.length;
// timer coundown from 270 seconds 
var seconds = 400;
// quiz level 1 timer 
var timer = setInterval(quizTimer, 1000);
// Store string for when users pass the quiz
var passed = ('Congratulations, You passed! The password for Level 3 is * 00Admixn043ddifJ *');
// Store string for when users fail to meet the score benchmark
var failed = ('Oh no, you have failed, please retry the level');
// to access all of the html elements inside of the quizlevel1Container
var container = document.getElementById('quizlevel2Container');
// quiz questions 
var questionElement = document.getElementById('question');
// quiz option 1 (A.)
var ch1 = document.getElementById('ch1');
// quiz option 1 (B.)
var ch2 = document.getElementById('ch2');
// quiz option 1 (C.)
var ch3 = document.getElementById('ch3');
// quiz option 1 (D.)
var ch4 = document.getElementById('ch4');
// quiz option (E.)
var ch5 = document.getElementById('ch5');


// quiz next button  
var nextbtn = document.getElementById('nextbtn');
// quiz back button
var backbtn = document.getElementById('backbtn');
// results 
var resultsContainer = document.getElementById('results');

// function to get a question from quizlevel2Qs
function getQuestion (questionIndex) {
  var q = questions[questionIndex]; 
  questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
  ch1.textContent = q.choice1;
  ch2.textContent = q.choice2;
  ch3.textContent = q.choice3;
  ch4.textContent = q.choice4;
  ch5.textContent = q.choice5;
};

// output var seconds plus strings, once timer is up display page alert to user
function quizTimer() {
  document.getElementById('quizCounter').innerHTML = seconds + " " + "Seconds" + " " + "left";
  seconds--;
  if (seconds == -1) {
      clearInterval(quizTimer);
      
      alert("Time is up!");
  }
}

// count jquery function, (Esp, 2021), (Tutorialspoint, 2021).
$(function() {
    var score = 0;
    $(".draggable").draggable();
    $("#droppable").droppable({
      drop: function(event, ui) {
        // increase the the score when draggable has been dragged into the dragged area 
        if ($(ui.draggable).hasClass("draggable") && (!$(ui.draggable).hasClass("dragged"))) { 
          score++;             
          console.log(score);
          $(".score").text(score);  
          $(ui.draggable).addClass("dragged");
         
          if (score == 7) {                   
            $(".score").text("Success !");

          }
        } 
      }
    });
  })


// check if the user has answered a question, if not notify the user to select an answer to proceed 
function getnextQ () {
  var selectedChoice = document.querySelector('input[type=checkbox]:checked');
  if(!selectedChoice){
      alert('Please select an answer before you continue');
      return;
  }
// jquery to refresh the draggable choices after a question is answered
$(".draggable").removeAttr("style");
$(".draggable").draggable("destroy");
$(".draggable").draggable();

  // if the selected answer is correct the users score will increase by 1
  var answer = selectedChoice.value;
  if(questions[currentQuestion].answer == answer){
      score += 10;
  }

  // choices are unchecked, when the quiz reaches the final question the next button is changed to display 'Finish'
  selectedChoice.checked = false;
  currentQuestion++;
  if(currentQuestion == allQuestions - 1){
      nextbtn.textContent = "Results";
  }

  // when the quiz is finished the quizlevel1Container will be hidden and the results container displayed. 
  if(currentQuestion == allQuestions){
      container.style.display = "none";
      resultsContainer.style.display = "";
      document.getElementById("score").innerHTML = score;
      document.getElementById("allQuestions").innerHTML = allQuestions;
      document.getElementById("questionIndex").innerHTML = questionIndex;
      document.getElementById("score").innerHTML = score;
      return;
}

// if score is more than or equal to 50, pass the user
{
  if (score >= 60)  {
  document.getElementById("passed").innerHTML = passed;

}   else {

  document.getElementById("failed").innerHTML = failed;
  }
}
  // get question
  getQuestion(currentQuestion);
} // get the first question  
getQuestion(currentQuestion);