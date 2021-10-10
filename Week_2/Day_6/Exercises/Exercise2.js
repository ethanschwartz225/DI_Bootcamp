//Exercise 1: Favorite color
let me = ["my", "favorite", "color", "is", "blue"]
console.log(me[0] + " " + me[1] + " " + me[2] + " " + me[3] + " " + me[4]);
//or
console.log(me.join(' '))


//---------------------


//Exercise 2: Mix-up
let str1 = "mix"
let str2 = "pod"
console.log(str2.slice(0,2) + str1.slice(2,3) + " " + str1.slice(0,2) + str2.slice(2,3))

let newWord = str2.slice(0,2) + str1.slice(2,3) + " "
    + str1.slice(0,2) + str2.slice(2,3);

console.log(newWord);


//---------------------


//Exercise 3: Calculator
alert("The next two numbers you enter will be added");
let num1 = prompt("Enter First Number:");
num1 = parseInt(num1);
let num2 = prompt("Enter Second Number:");
num2 = parseInt(num2);

alert(num1 + num2)


//---------------------

//BONUS: Multiplication, division, and subtraction
alert("The next two numbers you enter will be subtracted");

let num3 = prompt("Enter First Number:");
num3 = parseInt(num3);
let num4 = prompt("Enter Second Number:");
num4 = parseInt(num4);

alert(num3 - num4)

//BONUS: Multiplication, division, and subtraction
alert("The next two numbers you enter will be multiplied");

let num5 = prompt("Enter First Number:");
num5 = parseInt(num5);
let num6 = prompt("Enter Second Number:");
num6 = parseInt(num6);

alert(num5*num6)

//BONUS: Multiplication, division, and subtraction
alert("The next two numbers you enter will be divided");

let num7 = prompt("Enter First Number:");
num7 = parseInt(num7);
let num8 = prompt("Enter Second Number:");
num8 = parseInt(num8);

alert(num7/num8)