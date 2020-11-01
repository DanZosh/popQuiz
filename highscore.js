// Set up our DOM variables
    //HEADER DOM VARIABLES


var scoreCard = document.getElementById("scoreCard")
var goBackButton =  document.getElementById("goBack")
var clearHighscoresButton =  document.getElementById("clearHighscores")
    
//WHEN the user clicks `goBackButton`
//The window relocates to the quiz
goBackButton.addEventListener("click", function(event) {
    window.location.href ="./test.html"
});

//Add functionality for the `clearHighScoresButton`
var storedScore = localStorage.getItem("scoreStored")
scoreCard = storedScore


//Add functionality to render the score and initials from the local storage

