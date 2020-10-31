//DEFINE DOM OBJECTS HERE:
var goButtonEl = document.getElementById("startQuizButton");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answerList");
console.log(goButtonEl)
console.log(questionEl) 
console.log(answerListEl)

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
// DECLARE MY VARIABLES HERE:
    var questionCounter=0
    console.log(questionCounter)

    var Question = questionsObject[questionCounter]["Query"]
    // console.log(Question)
    var Answers = questionsObject[questionCounter]["Answers"]
    // console.log(Answers)
    // var Booleans = questionsObject[questionCounter]["Answers"][1]
    // console.log(Booleans)


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

    event.preventDefault();
    console.log(event.target);

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
    //why isn't `question` updating
    // console.log(Question)
    
    //This resets to question 2
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


questionCounter++

console.log(questionCounter)
});




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