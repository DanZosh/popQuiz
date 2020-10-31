
var goButtonEl = document.getElementById("go");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answerList");
console.log(goButtonEl)
console.log(questionEl) 
console.log(answerListEl)
 
var questions = [
     Q1={
        "Query":"Commonly used data types DO NOT include as:",
        "Answers" :["strings", "booleans", "alerts", "numbers"],
        "correctAnswer": 3
     },
    

    //  Q2={
    //     "Query":"The condition in an if / else statement is enclosed within _____.",
    //     "Answers" :["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    //     "correctAnswer": 3,
    //  }
    ]

    var Question1 = questions[0]["Query"]
console.log(Question1)
//returns question  
    var Answers1 = questions[0]["Answers"]
    console.log(Answers1)
    //returns Booleans
    var Booleans = questions[0]["Answers"][1]
    console.log(Booleans)
    //returns Booleans



goButtonEl.addEventListener("click", function(event) {
    // add event default because items are inside a form and we want to prevent the page from reloading

    event.preventDefault();
    console.log(event.target);

    // replace the innerHTML of `questionEl` with Question1
    console.log(Question1);
    questionEl.innerHTML= Question1;


    for (var i = 0; i < Answers1.length; i++) {

        var questionButton = document.createElement("button");
        console.log(questionButton)
        // this creates a button element
        var questionText = document.createTextNode(Answers1[i]);
        console.log(questionText)
        // this creates text
        questionButton.appendChild(questionText)
        console.log(questionButton)
        // this appends the text to the element
        answerListEl.appendChild(questionButton)
}

});
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