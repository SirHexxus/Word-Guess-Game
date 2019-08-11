// VARIABLES
// ==========================================================================

    // The array of words for our quiz game.
    var words = [
        "test one",
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
    // Variable to hold the number of lives remaining.
    var livesLeft = 10;
    // Empty array to hold wrong letters guessed.
    var lettersTried = [];
    // Empty array to hold right letters and display.
    var wordSlot = [];

    // For Debugging
    // console.log("words Array");
    // for (var x of words) {
    //     console.log(x);
    // }
    // console.log("score Variable " + score);
    // console.log("Index Variable " + wordIndex);
    

// FUNCTIONS
// ==============================================================================

    // Function to render words.
    function renderWord() {
        var placeHolder = words[wordIndex];
        document.getElementById("toBeGuessed").innerHTML = "";

        // Debugging
        // console.log("Current Word " + placeHolder);
        // console.log(" " + wordSlot);
        // for (var x of placeHolder) {
        //     console.log(x);
        // }

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
                    wordSlot[i] = "_ ";
                    // Debugging
                    // console.log(wordSlot);
                }
                else {
                    wordSlot[i] = '<span class="space">..</span>';
                    // Debugging
                    // console.log(wordSlot);
                }
                
            }
        }
        // If there aren't, render the end game screen.
        else {
            document.getElementById("toBeGuessed").innerHTML = "Game Over!";
            document.getElementById("points").innerHTML = "Final Score: " + score + "!";
        }
        updateDisplay();
        checkStatus();
    }
  
    // Function that updates the score.
    function updateScore() {
        document.getElementById("points").innerHTML = score;
        // Debugging
        // console.log(document.getElementById("points").innerHTML);
    }

    // Function that updates the number of lives remaining.
    function updateLives() {
        if (livesLeft <= 0){
            document.getElementById("lives").innerHTML = 0;
            wordIndex = words.length;
            renderWord();
            // Debugging
            // console.log(document.getElementById("lives").innerHTML);
            // console.log(wordIndex);
        }
        else {
            document.getElementById("lives").innerHTML = livesLeft;
        }
    }

    // Function that updates the letters tried.
    function updateTried(letter) {
        if (lettersTried.includes(letter)){
            alert("Already tried the letter " + letter + ". Try another one.");
        }
        else {
            lettersTried.push(letter);
            document.getElementById("tried").innerHTML = lettersTried;
            livesLeft--;
            updateLives();
        }
        // Debugging
        // console.log(document.getElementById("tried").innerHTML);
        // console.log(lettersTried);
    }

    // Function that updates the letters guessed.
    function updateGuessed(letter) {
        for (var x in words[wordIndex]) {
            if(words[wordIndex][x] === letter); {
                wordSlot[x] = letter;
                console.log(words[wordIndex][x]);
                console.log(wordSlot[x]);
                // console.log(wordSlot);
            }
        }
        updateDisplay();
        // score++;
        // updateScore();
        // Debugging
        // console.log(document.getElementById("tried").innerHTML);
        // console.log(lettersTried);
    }

    function updateDisplay() {
        document.getElementById("toBeGuessed").innerHTML = wordSlot;
        // Debugging
        // console.log(wordSlot);
    }

    // Function that checks to see if the word is complete
    function checkStatus() {

    }


// MAIN PROCESS
// ==============================================================================

    // Calling functions to start the game.
    renderWord();
    updateScore();
    updateLives();
  
    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {
  
        // If there are no more questions, stop the function.
        if (wordIndex === words.length) {
            return;
        }
  
        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = event.key;
        // Debugging
        console.log(userInput);
  
        // If they guess a correct answer, increase and update score, alert them they got it right.
        if (words[wordIndex].toLowerCase().includes(userInput.toLowerCase())) {
            alert("Correct!");
            updateGuessed(userInput);
        }
        // If wrong, alert them they are wrong.
        else {
            alert("Wrong!");
            updateTried(userInput);
        }
  
        // If they have the phrase correct, increment the wordIndex variable and call the renderWord function.
        if (false) {
            wordIndex++;
            renderWord();
        }
  
    };