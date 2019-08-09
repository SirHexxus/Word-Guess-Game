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

    // For Debugging
    for (var x of words) {
        console.log(typeof(x));
    }
    console.log(typeof(score));
    console.log(wordIndex);
    

// FUNCTIONS
// ==============================================================================

    // Function to render words.
    function renderWord() {
        var placeHolder = words[wordIndex];
        var wordSlot = [];

        // For Debugging
        console.log(placeHolder);
        console.log(wordSlot);
        console.log(placeHolder[0]);

        // If there are still more words, render the next one.
        if (wordIndex <= (words.length - 1)) {
            for (var i =0; i < placeHolder.length; i++) {
                if (placeHolder[i].toLowerCase() === "a" ||
                placeHolder[i].toLowerCase() === "b" ||
                placeHolder[i].toLowerCase() === "c" ||
                placeHolder[i].toLowerCase() === "d" ||
                placeHolder[i].toLowerCase() === "e" ||
                placeHolder[i].toLowerCase() === "f" ||
                placeHolder[i].toLowerCase() === "g" ||
                placeHolder[i].toLowerCase() === "h" ||
                placeHolder[i].toLowerCase() === "i" ||
                placeHolder[i].toLowerCase() === "j" ||
                placeHolder[i].toLowerCase() === "k" ||
                placeHolder[i].toLowerCase() === "l" ||
                placeHolder[i].toLowerCase() === "m" ||
                placeHolder[i].toLowerCase() === "n" ||
                placeHolder[i].toLowerCase() === "o" ||
                placeHolder[i].toLowerCase() === "p" ||
                placeHolder[i].toLowerCase() === "q" ||
                placeHolder[i].toLowerCase() === "r" ||
                placeHolder[i].toLowerCase() === "s" ||
                placeHolder[i].toLowerCase() === "t" ||
                placeHolder[i].toLowerCase() === "u" ||
                placeHolder[i].toLowerCase() === "v" ||
                placeHolder[i].toLowerCase() === "w" ||
                placeHolder[i].toLowerCase() === "x" ||
                placeHolder[i].toLowerCase() === "y" ||
                placeHolder[i].toLowerCase() === "z") {
                    wordSlot[i] = "_";
                    // For Debugging
                    console.log(wordSlot[i]);
                }
                else {
                    console.log(placeHolder[i]);
                    console.log(wordSlot[i]);
                }
                // document.getElementById("#toBeGuessed").textContent = wordSlot;
            }
            
        }
        // If there aren't, render the end game screen.
        else {
            document.getElementById("#toBeGuessed").innerHTML = "Game Over!";
            document.getElementById("#points").innerHTML = "Final Score: " + score + " out of " + words.length;
        }
    }
  
    // Function that updates the score...
    function updateScore() {
        console.log(score);
        document.getElementById("#points").innerHTML = score;
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