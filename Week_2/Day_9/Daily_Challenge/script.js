// // DAILY CHALLENGE
// Instructions
//
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:
let wordLength = 0;
wordsArray = ["Hello", "World", "in", "a", "frame"];
//     for(let i = 0; i < wordsArray.length; i++){
//         wordsArray[i].length;
// }
function inStars(){
        console.log("*".repeat(wordLength + 4));
    for(let i = 0; i < wordsArray.length; i++){
       wordLength = wordsArray[i].length;
        console.log("*" + wordsArray[i] + " ".repeat(wordsArray[i].length) + "*")
    }
    console.log("*".repeat(wordLength + 4));
}
inStars()

