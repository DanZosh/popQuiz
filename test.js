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
console.log(yourScoreEl)



//DEFINE QUESTIONS HERE:
var questionsObject = [
    Q1={
        "Query":"Q1: Commonly used data types DO NOT include as:",
        "Answers" :["1. strings", "2. booleans", "3. alerts", "4 .numbers"],
        "correctAnswer": 2
    },
    Q2={ 
        "Query":"Q2: The condition in an if / else statement is enclosed within _____.",
        "Answers" :["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        "correctAnswer": 2,
    },
    Q3={
        "Query":"Q3: Arrays in JavaScript can be used to store ____.",
        "Answers" :["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        "correctAnswer": 3,
    },
    Q4={
        "Query":"Q4:String values must be enclosed within ____ when being assigned to variables.",
        "Answers" :["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        "correctAnswer": 2,
    },
    Q5={
        "Query":"Q5: Arrays in JavaScript can be used to store ____.",
        "Answers" :["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        "correctAnswer": 3,
    }
    ]
    console.log(questionsObject.length);

// DECLARE MY VARIABLES HERE:
    var questionCounter=0
    console.log(questionCounter)

    var Question = questionsObject[questionCounter]["Query"]
    // console.log(Question)
    var Answers = questionsObject[questionCounter]["Answers"]
    // console.log(Answers)
    // var Booleans = questionsObject[questionCounter]["Answers"][1]
    // console.log(Booleans)
    var countDown = 25;
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

goButtonEl.addEventListener("click", function(event) {
    // add event default because items are inside a form and we want to prevent the page from reloading
    setTime();
    event.preventDefault();
    console.log(event.target);
    slide1.style.display= "none"
    // replace the innerHTML of `questionEl` with Question1
    console.log(Question);
    questionEl.innerHTML= Question


    for (var i = 0; i < Answers.length; i++) {

        var questionButton = document.createElement("button");
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


questionCounter++
console.log(questionCounter)
});



answerListEl.addEventListener("click", function(event) {


    event.preventDefault();
    console.log(event.target);
    event.stopPropagation();

    //WHEN i click on an answer
    //THEN the `questionEl` is replaced with  questionsObject[1]["Query"]
    console.log(questionCounter)
    console.log(questionsObject[1]["Query"])
    console.log(questionsObject[questionCounter]["Query"])

    //This resets the question
    questionEl.innerHTML= questionsObject[questionCounter]["Query"]

    console.log(answerListEl)
    console.log(answerListEl.childNodes)
    
    // The below works 
    answerListEl.removeChild(answerListEl.childNodes[0])
    answerListEl.removeChild(answerListEl.childNodes[0])
    answerListEl.removeChild(answerListEl.childNodes[0])
    answerListEl.removeChild(answerListEl.childNodes[0])

    // // the below doesn't work
    // for (let i = 0; i < answerListEl.childNodes.length; i++) {
    //     answerListEl.removeChild(answerListEl.childNodes[0]) 
    // }

    // // the below doesn't work
    // while (answerListEl.childNodes.length >0){
    //     answerListEl.removeChild(answerListEl.childNodes[-1])
    //     }

    for (var i = 0; i < Answers.length; i++) {

        var questionButton = document.createElement("button");
        console.log(questionButton)
        // this creates a button element
        var questionText = document.createTextNode(questionsObject[questionCounter]["Answers"][i]);
        console.log(questionText)
        // this creates text
        questionButton.appendChild(questionText)
        console.log(questionButton)
        // this appends the text to the element
        answerListEl.appendChild(questionButton)
    }

//add some functionality to bring slide 7 back.
questionCounter++

console.log(questionCounter)
//if the click event matches the question index, then 
score++;
console.log(score);


if(questionCounter === questionsObject.length+1){
    timeUp()
    // questionCard.style.display= "none";
    // allDoneCard.style.display= "flex";
}



});

function timeUp(){
    // if(countDown === 0){}
    //WHEN time is up
    //THEN the question card displays none
    //And the all done card visibility turns on
    questionCard.style.display= "none";
    allDoneCard.style.display= "flex";
    yourScoreEl.innerHTML = "Your Score: " + score
    
}



console.log(questionCounter)







    //   if(event.target.matches("button")) {
        // if the click happening to a button, this other logic happens below
        //event.target is the item we clicked
        // var button = document.createElement("button");
    //     //^this creates a new div called item in which to store our new grocery item
        // button.textContent = groceries[event.target.parentElement.id];
    //     //^this is saying get the id of the parent element of the button that clicked, that id correlats to the index of the grocery list above on line 3 
    //     shoppingCartEl.append(item);
        //^this appends the items to the shopping cart.
    // });