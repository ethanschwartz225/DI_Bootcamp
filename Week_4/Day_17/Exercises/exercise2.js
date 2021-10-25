// Exercise 1
// #1
// // Prediction: a = 3
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
//
// // Prediction: a = 0
// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }
//
// function q22() {
//     alert(a);
// }
//
// // prediction: Hello
// //#3
// function q3() {
//     window.a = "hello";
// }
//
//
// function q32() {
//     alert(a);
// }
//
// // Prediction: a = test
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
//
// //Prediction: a = 5, a = 2
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// Exercise 2 : Ternary Operator
// Instructions
// Using the code below :
//
// function winBattle(){
//     return true;
// }
//
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// experiencePoints()
// You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).



// function winBattle(){
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
//
// experiencePoints()

// function winBattle(){
//     return true;
// }
// let experiencePoints = winBattle(true) ? 10 : 1;
// experiencePoints();


// Exercise 3 : Colors
//
// Instructions
//
// Using this array :
//
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Check if this array includes the color “Violet”.
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let hasViolet = colors.some( () => {
// 	return "Violet";
// })
// console.log(hasViolet);
//
// for(let i = 0; i < colors.length; i++){
//     console.log(`My #${i+1} choice is ${colors[i]}`);
// }


// Exercise 4 : Colors #2
//
// Instructions
//
// Using these arrays :
//
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];












