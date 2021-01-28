// The following comments are settings for various linters
/*jslint es6: true*/ // Causes an "Unexpected 'es6'." warning in JSLint that you should ignore.
/*jshint globalstrict: true*/
/*jshint esversion: 6 */
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/
/*eslint-env es6*/
/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

/*
 * INSTRUCTIONS:
 * Make a guessing game where the computer guesses what the human user's
 * number is between 0 and 100 (inclusive). Do NOT use Arrays, do NOT use a linear search algorithm, and do NOT use the prompt functions!
 
 * Use if-else and confirm("some question") inside the while-loop.
 * The human is expected to click the cancel button to indicate No (and thus the confirm function retuns false)
 * or the OK button to indicate Yes (confirm function returns true).
 
 * Do NOT change the line "guess = Math.round((min + max) / 2);"
 * because the computer is supposed to guess efficiently by
 * asking the human if their number is higher, lower, or equal to
 * the computer's current guess.
 * Do NOT use break or continue. You can use the "return;" statement inside the while-loop to get the computer to leave the guesser function.
 * For info on how while loops work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * For info on how return works see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */
const guesser = () => {
    let min = 0;
    let max = 100;
    let guess;

    alert("Think of a number between 0 and 100");
    while (min <= max) {
        guess = Math.round((min + max) / 2);
        // Add your code below here ONLY!
        if (confirm("Is your number " + guess + "? Press OK for yes or cancel for no.")) {
            alert("I got it! Thanks for playing!");
            return;
        } else {
            var isNumberHigher = confirm("Alright, is your number higher or lower? Press 'OK' for higher and 'Cancel' for lower.");
            if (isNumberHigher) {
                if (guess === 99) {
                    alert("Your number is 100. I got it! Thanks for playing!");
                    return;
                }
                min = guess;
            } else { //!isNumberHigher
                if (guess === 1) {
                    alert("Your number is 0. I got it! Thanks for playing!");
                    return;
                }
                max = guess;
            }
        }
        // Add your code above here ONLY!
    }

    alert("I could not guess your number. I think you are cheating!");
};

window.onload = guesser;
