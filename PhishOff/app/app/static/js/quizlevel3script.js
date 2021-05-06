// Phish Off Quiz level 3
// Level 3 Spotting Malicious Emails, Texts and Spoofed Webpages
// Created by Viacheslav Rawles

// References
// Stack Overflow. 2018. show and hide divs based on radio button click. [online] Available at: <https://stackoverflow.com/questions/5940963/show-and-hide-divs-based-on-radio-button-click> [Accessed 26 April 2021].
// W3schools.com. 2021. jQuery Effects - Hide and Show. [online] Available at: <https://www.w3schools.com/jquery/jquery_hide_show.asp> [Accessed 5 May 2021].

// the question in position 0 will be displayed as the first question of the level 
var currentQuestion = 0;
// score will be 0 when the quiz level starts 
var score = 0;
// total questions count
var allQuestions = questions.length;
// timer coundown from 270 seconds 
var seconds = 275;
// quiz level 3 timer 
var timer = setInterval(quizTimer, 1000);
// Store string for when users pass the quiz
var passed = 'Congratulations, You have passed the final level! Feel free to access any level to keep on training your knowledge!';
// Store string for when users fail to meet the score benchmark
var failed = 'Oh no, you have failed, please retry the level';
// to access all of the html elements inside of the quizlevel1Container
var container = document.getElementById('quizlevel3Container');
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

// quiz next button 
var nextbtn = document.getElementById('nextbtn');
// quiz back button
var backbtn = document.getElementById('backbtn');
// results 
var resultsContainer = document.getElementById('results');

// Show and hide img div 
// on on click of next button show the next question image stored in div 
$(function() {

    var counter = 0;
    $('.questionCount').text(counter+1);
  
    $('#nextbtn').click(function() {
      if (counter < 9) {
        counter++;
        $('.Qimg').hide();
        $('.Qimg').eq(counter).show();
      }
      $('.questionCount').text(counter+1);
    })
    
    $('#nextbtn').click(function() {
      if (counter == 0) {
      } else if (counter == 10) {
        $('#nextbtn').prop('disabled', true);
      } else {
        $('#nextbtn').prop('disabled', false);
      }
    })
  
  })

// function to get a question from quizlevel1Qs
function getQuestion (questionIndex) {
    var q = questions[questionIndex]; 
    questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
    ch1.textContent = q.choice1;
    ch2.textContent = q.choice2;
    ch3.textContent = q.choice3;
    ch4.textContent = q.choice4;
};

// output var seconds plus strings, once timer is up display page alert to user
function quizTimer() {
    document.getElementById('quizCounter').innerHTML = seconds + " ";
    seconds--;
    if (seconds == -1) {
        clearInterval(quizTimer);
        
        alert("Time is up!");
    }
}

// check if the user has answered a question, if not notify the user to select an answer to proceed 
function getnextQ () {
    var selectedChoice = document.querySelector('input[type=radio]:checked');
    if(!selectedChoice){
        alert('Please select an answer before you continue');
        return;
    }

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

    // when the quiz is finished the quizlevel3Container will be hidden and the results container displayed. 
    if(currentQuestion == allQuestions){
      container.style.display = "none";
      resultsContainer.style.display = "";
      document.getElementById("score").innerHTML = score;
      document.getElementById("allQuestions").innerHTML = allQuestions;
      document.getElementById("questionIndex").innerHTML = questionIndex;
      document.getElementById("score").innerHTML = score;
      return;
}
// pass user if score is more than or equal to 80, or fail the user if not 
{
    if (score >= 80)  {
    document.getElementById("passed").innerHTML = passed;

}   else {

     document.getElementById("failed").innerHTML = failed;
    }
}

    // get question
    getQuestion(currentQuestion);
} // get the first question  
getQuestion(currentQuestion);