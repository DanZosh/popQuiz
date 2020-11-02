//DEFINE DOM OBJECTS HERE:
var goButtonEl = document.getElementById("startQuizButton");
console.log(goButtonEl)
var questionEl = document.getElementById("question");
console.log(questionEl) 
var answerListEl = document.getElementById("answerList");
console.log(answerListEl)
var questionCard = document.querySelector(".question");
console.log(questionCard)
var allDoneCard = document.querySelector(".allDone");
console.log(allDoneCard);
var yourScoreEl = document.getElementById("yourScore");
console.log("Score:" + yourScoreEl)
var initialsInputEl = document.getElementById("initials");
console.log("Initials:" + initialsInputEl)
var submitButton = document.getElementById("submitButton")
console.log(submitButton);
var scoreCardEl = document.getElementById("scoreCard")
console.log(scoreCardEl);



//DEFINE QUESTIONS HERE:
var questionsObject = [
    Q1={
        "Query":"Q1: Commonly used data types DO NOT include as:",
        "Answers" :["1. alerts", "2. booleans", "3. strings", "4 .numbers"],
        "correctAnswer": "0"
    },
    Q2={ 
        "Query":"Q2: The condition in an if / else statement is enclosed within _____.",
        "Answers" :["1. quotes", "2. parentheses", "3. curly brackets", "4. square brackets"],
        "correctAnswer": "1",
    },
    Q3={
        "Query":"Q3:String values must be enclosed within ____ when being assigned to variables.",
        "Answers" :["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        "correctAnswer": "2",
    },
    Q4={
        "Query":"Q4: Arrays in JavaScript can be used to store ____.",
        "Answers" :["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        "correctAnswer": "3",
    },
    Q5={
        "Query":"Q5: A very useful tool used during development and debugging for printing content to the debugger is:",
        "Answers" :["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        "correctAnswer": "3",
    }
    ]
    console.log("questionObjectLength " + questionsObject.length);


// DECLARE MY VARIABLES HERE:
    var questionCounter=0
    console.log("question Counter: " + questionCounter)

    var Question = questionsObject[questionCounter]["Query"]
    // console.log(Question)
    var Answers = questionsObject[questionCounter]["Answers"]
    // console.log(Answers)
    // var Booleans = questionsObject[questionCounter]["Answers"][1]
    // console.log(Booleans)
    var correctAnswerIndex = questionsObject[questionCounter]["correctAnswer"];
    console.log("Correct Answer Index: " + correctAnswerIndex)
    var countDown = 100;
    var score = 0;

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
//GOBUTTON START
goButtonEl.addEventListener("click", function(event) {
    // add event default because items are inside a form and we want to prevent the page from reloading
    setTime();
    event.preventDefault();
    console.log(event.target);
    slide1.style.display= "none"
    // replace the innerHTML of `questionEl` with Question1
    console.log(Question);
    questionEl.innerHTML= Question

    //LOOP through the question answers and render to the page
    for (var i = 0; i < Answers.length; i++) {

        var questionButton = document.createElement("button");
        questionButton.setAttribute("data-index",i)
        var questionButtonIndex = questionButton.getAttribute("data-index");
        console.log(questionButtonIndex)
        // console.log(questionButton)
        // this creates a button element
        var questionText = document.createTextNode(Answers[i]);
        // console.log(questionText)
        // this creates text
        questionButton.appendChild(questionText)
        // console.log(questionButton)
        // this appends the text to the element
        answerListEl.appendChild(questionButton)
}

// scoreKeeper();
questionCounter++
console.log("question Counter: " + questionCounter)
});
//GOBUTTON END



answerListEl.addEventListener("click", function(event) {


    event.preventDefault();
    console.log(event.target.innerHTML);
    console.log(questionsObject[questionCounter-1]["correctAnswer"])
    event.stopPropagation();

    //WHEN i click on an answer
    //THEN the `questionEl` is replaced with  questionsObject[1]["Query"]
    console.log("question Counter: " + questionCounter)
    console.log(questionsObject[1]["Query"])
    // console.log(questionsObject[questionCounter]["Query"])

    //WHEN the last question is answered
    //THEN run the timeup function
    if (questionCounter == questionsObject.length){
        timeUp()
    }

    //THIS RESETS THE QUESTION
    questionEl.innerHTML= questionsObject[questionCounter]["Query"]

    console.log(answerListEl)
    console.log(answerListEl.childNodes)
    
    // The below works 
    answerListEl.removeChild(answerListEl.childNodes[0])
    answerListEl.removeChild(answerListEl.childNodes[0])
    answerListEl.removeChild(answerListEl.childNodes[0])
    answerListEl.removeChild(answerListEl.childNodes[0])

    // the below doesn't work
    // for (let i = 0; i < answerListEl.childNodes.length; i++) {
    //     answerListEl.removeChild(answerListEl.childNodes[i]) 
    // }

    // // the below doesn't work
    // while (answerListEl.childNodes.length >0){
    //     answerListEl.removeChild(answerListEl.childNodes[-1])
    //     }

    //THIS LOADS THE QUESTION BUTTONS
    for (var i = 0; i < Answers.length; i++) {

        var questionButton = document.createElement("button");
        questionButton.setAttribute("data-index",i);
        var questionButtonIndex = questionButton.getAttribute("data-index");
        console.log(questionButtonIndex);
        // console.log(questionButton)
        // this creates a button element
        var questionText = document.createTextNode(questionsObject[questionCounter]["Answers"][i]);
        // console.log(questionText)
        // this creates text
        questionButton.appendChild(questionText)
        // console.log(questionButton)
        // this appends the text to the element
        answerListEl.appendChild(questionButton)
    }

//add some functionality to bring slide 7 back.
questionCounter++
console.log("question Counter: " + questionCounter)
console.log("score: " + score)


if(questionCounter === questionsObject.length+1){
    timeUp()
}

scoreKeeper(event);
//END OF answerListEL functionality
});

//FUNCTIONALITY of the timeUp function
function timeUp(){
    // if(countDown === 0){}
    //WHEN time is up
    //THEN the question card displays none
    //And the all done card visibility turns on
    questionCard.style.display= "none";
    allDoneCard.style.display= "flex";
    yourScoreEl.innerHTML = "Your Score: " + score;
    countDown.innerHTML = "";
    
}
userInitialsScoreList=[];

//FUNCTIONALITY for the submit button
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    //SAVE score and intials object to local storage
    var userInitialsScore ={
        userInitials: initialsInputEl.value.trim(),
        userScore: score,
    }
        console.log(userInitialsScore);
        console.log("User intial score list" + userInitialsScoreList)
        console.log("User Initial Score List Length" + userInitialsScoreList.length)
        //GET the local storage scorecard
        var retrievedScorecard = JSON.parse(localStorage.getItem("userInitialsScoreList"))
        //IF a scorecard doesn't exist in local storage
        //CREATE a blank scorecard for the first cycle
        if (!retrievedScorecard){
            retrievedScorecard=[]
        }
        retrievedScorecard.push(userInitialsScore)
    localStorage.setItem("userInitialsScoreList", JSON.stringify(retrievedScorecard)); 

    //REDIRECT to `highscore` page
    window.location.href ="./highscore.html"
});


console.log("question Counter: " + questionCounter)
console.log(questionsObject[questionCounter-1]);
//Functionality of the scoreKeeper 
function scoreKeeper(event){
    var correctAnswerIndex = questionsObject[questionCounter-2]["correctAnswer"];
        console.log(correctAnswerIndex);
    var clickedAnswerIndex = event.target.getAttribute("data-index");
        console.log(clickedAnswerIndex);
    if(correctAnswerIndex === clickedAnswerIndex){
        score++
        console.log("Score:" + score);
        console.log("QuestionCounter: " + questionCounter)
    }else{
        countDown= countDown-10;
    };
}



