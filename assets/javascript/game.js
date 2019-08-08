// VARIABLES
// ==========================================================================

    // The array of words for our quiz game.
    var words = [
        "test1",
        "test two",
        "third test",
        "this is not a test",
        "random bullshit",
        "lorem ipsum"
    ];

    // We start the game with a score of 0.
    var score = 0;
    // Variable to hold the index of current word.
    var wordIndex = 0;

// FUNCTIONS
// ==============================================================================

    // Function to render words.
    function renderWord() {
        // If there are still more words, render the next one.
        if (wordIndex <= (words.length - 1)) {
            var placeHolder = words[wordIndex];
            var wordSlot = "";
            for (var i =0; i < placeHolder.length; i++) {
                wordSlot += (placeHolder[i] === " " ? "" : "_ ");
                // For Debugging
                console.log(wordSlot);
            }
            document.querySelector("#toBeGuessed").innerHTML = wordSlot;
        }
        // If there aren't, render the end game screen.
        else {
            document.querySelector("#toBeGuessed").innerHTML = "Game Over!";
            document.querySelector("#points").innerHTML = "Final Score: " + score + " out of " + words.length;
        }
    }
  
    // Function that updates the score...
    function updateScore() {
        document.querySelector("#points").innerHTML = score;
    }


// MAIN PROCESS
// ==============================================================================

    // Calling functions to start the game.
    renderWord();
    updateScore();
  
    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {
  
        // If there are no more questions, stop the function.
        if (wordIndex === words.length) {
            return;
        }
  
        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = event.key.toLowerCase();
  
        // Only run this code if "t" or "f" were pressed.
        if (words[wordIndex].includes(userInput)) {
            // If they guess the correct answer, increase and update score, alert them they got it right.
            if (userInput === words[wordIndex]) {
                alert("Correct!");
                score++;
                updateScore();
            }
            // If wrong, alert them they are wrong.
            else {
                alert("Wrong!");
            }
  
        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();
  
        }
  
    };