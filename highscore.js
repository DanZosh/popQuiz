// Set up our DOM variables
    //HEADER DOM VARIABLES


var scoreCardEl = document.getElementById("scoreCard")
var goBackButton =  document.getElementById("goBack")
var clearHighscoresButton =  document.getElementById("clearHighscores")
console.log(scoreCard)
console.log(goBackButton)
console.log(clearHighscoresButton)
    
//WHEN the user clicks `goBackButton`
//The window relocates to the quiz
goBackButton.addEventListener("click", function(event) {
    window.location.href ="./test.html"
});

//Add functionality for the `clearHighScoresButton`
var storedScore = localStorage.getItem("scoreStored")
scoreCard = storedScore


//Add functionality to render the score and initials from the local storage
//RENDER the scores to the page
        //GET the data from local storage
        var lastUser = JSON.parse(localStorage.getItem("userInitialsScore")); 
        //CREATE elements to display the data
    var divBox = document.createElement("div");
        divBox.setAttribute("class", "scoreCardDiv")
    var paraInitials = document.createElement("p");
    var detailScore = document.createElement("detail");
        //ASSIGN gotten data to variables
    var renderedInitials = document.createTextNode(lastUser.userInitials + ": ");
    var renderedScore = document.createTextNode(lastUser.userScore);
        //APPEND the variables with gotten data to Elements

        
    // paraInitials.appendChild(renderedInitials)
    // detailScore.appendChild(renderedScore)


        //APPEND the Elements to the container
    // divBox.appendChild(paraInitials)
    // divBox.appendChild(detailScore)
    divBox.appendChild(renderedInitials)
    divBox.appendChild(renderedScore)
        //APPEND the `divBox` to the `scoreCardEl`
    scoreCardEl.appendChild(divBox)
    // this adds the element to the document
    //render the user score
//end RENDER the scores to the page
