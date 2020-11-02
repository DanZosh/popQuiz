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
    window.location.href ="./index.html"
});

//Add functionality for the `clearHighScoresButton`
var storedScore = localStorage.getItem("scoreStored")
scoreCard = storedScore


function renderScorecard(){
    //RENDER the scores to the page
        //GET and PARSE the data from local storage
        var gottenList = JSON.parse(localStorage.getItem("userInitialsScoreList")); 
        //FOR each element in the parsed list
    for (let i = 0; i < gottenList.length; i++) {
        //CREATE elements to display the data
        
    var divBox = document.createElement("div");
        divBox.setAttribute("class", "scoreCardDiv")
    // var paraInitials = document.createElement("p");
    // var detailScore = document.createElement("detail");
        //ASSIGN gotten data to variables
    var renderedInitials = document.createTextNode(gottenList[i].userInitials + ": ");
    var renderedScore = document.createTextNode(gottenList[i].userScore);
        //APPEND the variables with gotten data to Elements
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
    
    }
}

renderScorecard()

clearHighscoresButton.addEventListener("click", function(event) {
    localStorage.setItem("userInitialsScoreList", JSON.stringify([]));
    window.location.reload();
});
