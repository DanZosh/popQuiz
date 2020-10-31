// Set up our DOM variables
    //HEADER DOM VARIABLES
var timeEl = document.getElementById("timeEl")
    //SLIDE DOM VARIABLES
var slide1 =  document.getElementById("slide1")
        //SLIDE DOM VARIABLES ON SLIDE1
        var startQuizButton =  document.getElementById("startQuizButton")
        
const questions = {
    Q1{
        "Query":"Commonly used data types DO NOT include as:"
        "Answers":["strings", "booleans", "alerts", "numbers"],
        "correctAnswer": 3
    }
}








var slide2 =  document.getElementById("slide2")
    //SLIDE DOM VARIABLES ON SLIDE2
        var q1o1 =  document.getElementById("slide2").children[3].children[0].children[0]
        console.log(q1o1)
        var q1o2 =  document.getElementById("q1o2")
        console.log(q1o2)
        var q1o3 =  document.getElementById("q1o3")
        console.log(q1o3)
        var q1o4 =  document.getElementById("q1o4")
        console.log(q1o4)
        var q1Feedback =  document.getElementById("q1Feedback")
        console.log(q1Feedback)
var slide3 =  document.getElementById("slide3")
    //SLIDE DOM VARIABLES ON SLIDE3
        var q2o1 =  document.getElementById("q2o1")
        console.log(q2o1)
        var q2o2 =  document.getElementById("q2o2")
        console.log(q2o2)
        var q2o3 =  document.getElementById("q2o3")
        console.log(q2o3)
        var q2o4 =  document.getElementById("q2o4")
        console.log(q2o4)
var slide4 =  document.getElementById("slide4")
    //SLIDE DOM VARIABLES ON SLIDE4
        var q3o1 =  document.getElementById("q3o1")
        console.log(q3o1)
        var q3o2 =  document.getElementById("q3o2")
        console.log(q3o2)
        var q3o3 =  document.getElementById("q3o3")
        console.log(q3o3)
        var q3o4 =  document.getElementById("q3o4")
        console.log(q3o4)
var slide5 =  document.getElementById("slide5")
     //SLIDE DOM VARIABLES ON SLIDE5
        var q4o1 =  document.getElementById("q4o1")
        console.log(q4o1)
        var q4o2 =  document.getElementById("q4o2")
        console.log(q4o2)
        var q4o3 =  document.getElementById("q4o3")
        console.log(q4o3)
        var q4o4 =  document.getElementById("q4o4")
        console.log(q4o4)
var slide6 =  document.getElementById("slide6")
     //SLIDE DOM VARIABLES ON SLIDE6
        var q5o1 =  document.getElementById("q5o1")
        console.log(q5o1)
        var q5o2 =  document.getElementById("q5o2")
        console.log(q5o2)
        var q5o3 =  document.getElementById("q5o3")
        console.log(q5o3)
        var q5o4 =  document.getElementById("q5o4")
        console.log(q5o4)
var slide7 =  document.getElementById("slide7")
    var yourScore =  document.getElementById("yourScore")
    yourScore.textContent = "Your final score is:" + score;

var slide8 =  document.getElementById("slide8")
    var scoreCard = document.getElementById("scoreCard")


console.log(timeEl)
console.log(slide1)

var countDown = 5;
var score = 0;

var answerKey = {
    question1:3,
    question2:3,
    question3:4,
    question4:3,
    question5:4,
}
// THIS IS OUR SCORECARD, STORE THIS TO LOCAL DATA
// var scoreCard = {
//     initials: Initials.value.trim(),
//     userScore:score
// }

// WHEN the user clicks the `startQuiz` button 
// THEN slide 1 disappears, Slide 2 appears
// AND the time element `timeEl` begins at `startTime`
// AND starts to countdown

//after but button clicks.............

function setTime(event) {
    
    var timerInterval= setInterval(function(event) {
    
        timeEl.textContent = "Time: " + countDown;
        countDown--;

        if (countDown === 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    },1000);
}
startQuizButton.addEventListener("click", function() {
    setTime();
    console.log("test");
    slide1.style.display= "none"
    slide2.style.display= "flex"
});

// Correct Answer Event Functions:

q1o3.addEventListener("click", function() {
    q1Feedback.innerHTML = "Correct";
    score++;
    console.log(score);
    setTimeout(function(){
        slide2.style.display= "none";
        slide3.style.display= "flex";
    },1000);
});
q2o3.addEventListener("click", function() {
    q2Feedback.innerHTML = "Correct";
    score++;
    console.log(score);
    setTimeout(function(){
        slide3.style.display= "none";
        slide4.style.display= "flex";
    },1000);
});
q3o4.addEventListener("click", function() {
    q3Feedback.innerHTML = "Correct";
    score++;
    console.log(score);
    setTimeout(function(){
        slide4.style.display= "none";
        slide5.style.display= "flex";
    },1000);
});
q4o3.addEventListener("click", function() {
    q4Feedback.innerHTML = "Correct";
    score++;
    console.log(score);
    setTimeout(function(){
        slide5.style.display= "none";
        slide6.style.display= "flex";
    },1000);
});
q5o4.addEventListener("click", function() {
    q5Feedback.innerHTML = "Correct";
    score++;
    console.log(score);
    setTimeout(function(){
        slide6.style.display= "none";
        slide7.style.display= "flex";
    },1000);
});
// THIS DOESN'T WORK, I need to do one at a time i think...
// q1Wrongs = [q1o1, q1o2, q1o4];
// q1Wrongs.forEach(q1Wrong.addEventListener("click", function(q1Wrong) {
//     q1Feedback.innerHTML = "Wrong!";
//     setTimeout(function(){
//         q1Feedback.innerHTML = "";
//         countDown = countDown -10;
//     },1000);
// }));

// THESE ARE THE WRONG ANSWER FUNCTIONS:
q1o1.addEventListener("click", function() {
    q1Feedback.innerHTML = "Wrong!";
    setTimeout(function(){
        q1Feedback.innerHTML = "";
        countDown = countDown -10;
    },1000);
});
// YOU NEED TO ENTER THE REST HERE




// This one needs some work to turn us back to Slide 7
function timeUp(){
    var mainEl = document.getElementById('main');
    console.log(mainEl)
    slide1.style.display= "none";
    slide2.style.display= "none";
    slide3.style.display= "none";
    slide4.style.display= "none";
    slide5.style.display= "none";
    slide7.style.display= "flex";
    slide8.style.display= "none";
    // mainEl.style.display = "none"
}
