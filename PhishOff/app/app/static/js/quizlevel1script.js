// Phish Off Quiz level 1
// Level 1 Email and Text Phishing 
// Created by Viacheslav Rawles

// References 
// Hibbard, J. and Berhanu, Y., 2020. How to Make a Simple JavaScript Quiz - SitePoint. [online] Sitepoint.com. Available at: <https://www.sitepoint.com/simple-javascript-quiz/> [Accessed 5 May 2021].
// W3schools.com. 2021. JavaScript Tutorial. [online] Available at: <https://www.w3schools.com/js/default.asp> [Accessed 2 May 2021].
// Developer.mozilla.org. 2021. Document.getElementById() - Web APIs | MDN. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById> [Accessed 4 May 2021].
// Shann, 2019. JavaScript Quiz Program | How to Create JS Quiz App. [online] Web Dev Trick. Available at: <https://webdevtrick.com/create-javascript-quiz-program/> [Accessed 2 May 2021].
// W3schools.com. 2021. HTML DOM innerHTML Property. [online] Available at: <https://www.w3schools.com/jsref/prop_html_innerhtml.asp> [Accessed 4 May 2021].

// the question in position 0 will be displayed as the first question of the level 
var currentQuestion = 0;
// score will be 0 when the quiz level starts 
var score = 0;
// question count 
var count = 0;
// total questions count
var allQuestions = questions.length;
// timer coundown from 270 seconds 
var seconds = 275;
// quiz level 1 timer 
var timer = setInterval(quizTimer, 1000);
// Store string for when users pass the quiz
var passed = ('Congratulations, You passed! The password for Level 2 is ** 3r9Phish7JkX245c ** (Copy the password and then paste it to gain access to level 2)');
// Store string for when users fail to meet the score benchmark
var failed = ('Oh no, you have failed. Please retry the level!');
// to access all of the html elements inside of the quizlevel1Container
var container = document.getElementById('quizlevel1Container');
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
    document.getElementById('quizCounter').innerHTML = seconds + " " + "Seconds" + " " + "left";
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

    // question count
    var answer = selectedChoice.value;
    if(questions[currentQuestion].answer == answer){
        count +=1;
        console.log(count);
    }

    // choices are unchecked, when the quiz reaches the final question the next button is changed to display 'Finish'
    selectedChoice.checked = false;
    currentQuestion++;
    if(currentQuestion == allQuestions + - 1){
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

{  // passing benchmark, if score is more than or equal to 60
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