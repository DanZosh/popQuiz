// Set up our DOM variables
    //HEADER DOM VARIABLES
var timeEl = document.getElementById("timeEl")
    //SLIDE DOM VARIABLES
var slide1 =  document.getElementById("slide1")
        //SLIDE DOM VARIABLES ON SLIDE1
        var startQuizButton =  document.getElementById("startQuizButton")
  
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
var slide8 =  document.getElementById("slide8")
console.log(timeEl)
console.log(slide1)

var countDown = 5
var answerKey = {
    question1:3,
    question2:3,
    question3:4,
    question4:3,
    question5:4,
}

// WHEN the user clicks the `startQuiz` button 
// THEN slide 1 disappears, Slide 2 appears
// AND the time element `timeEl` begins at `startTime`
// AND starts to countdown

//after but button clicks.............

function setTime(event) {
    
    var timerInterval= setInterval(function(event) {
        countDown--;
        timeEl.textContent = "Time: " + countDown;
        
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


// This one needs some work to turn us back to the final page
function timeUp(){
    var mainEl = document.getElementById('main');
    console.log(mainEl)
    // mainEl.style.display = "none"
}
