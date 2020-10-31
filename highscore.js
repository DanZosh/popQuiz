// Set up our DOM variables
    //HEADER DOM VARIABLES

var slide8 =  document.getElementById("slide8")
    var scoreCard = document.getElementById("scoreCard")


    

console.log(timeEl)
console.log(slide1)

var countDown = 75;
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



// THESE ARE THE WRONG ANSWER FUNCTIONS:
q1o1.addEventListener("click", function() {
    q1Feedback.innerHTML = "Wrong!";
    setTimeout(function(){
        q1Feedback.innerHTML = "";
        countDown = countDown -10;
    },1000);
});
// YOU NEED TO ENTER THE REST HERE





    // mainEl.style.display = "none"
}
