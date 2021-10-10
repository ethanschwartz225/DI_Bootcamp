//Exercise 1

let str1 = prompt("Please type a sentence containing the name 'nemo':");
console.log(str1)
// example sentence: "Blizzard nemo cancelled school for three weeks."

    if(str1.includes("nemo")){
        let words = str1.split(" ");
        console.log(words);
        console.log("I found nemo at the position of " + words.indexOf("nemo"));
    } else {
        console.log("I can't find nemo!");
    }

// Exercise 1:Evaluation

    5 >= 1 //TRUE
    0 === 1 //FALSE
    4 <= 1 //FALSE
    1 != 1 //FALSE
    "A" > "B" //FALSE
    "B" < "C" //FALSE
    "a" > "A" //FALSE
    "b" < "A" //FALSE
    true === false //FALSE
    true != true //FALSE

// // Exercise 2: Evaluation(2)
// 1. a + b = 23
// 2. c = undefined
// 3. console.log(3 + 4 + '5'); ----->  = 75

// Exercise 3: Ask for numbers
let str2 = prompt("Enter a few numbers, separated by commas: ")
numbers = str2.split(", ")
console.log(numbers);
console.log(eval(numbers.join("+")))

// Exercise 4: Boom
let myNum = prompt("Enter a number:")
let variable = "o".repeat(myNum)
if(myNum % 2 === 0) {
    excl = "!"
} else {
    excl = " "
}

if(myNum < 2) {
    console.log("boom")
} else {
    if(myNum % 2 === 0) {
    excl = "!"
} else {
    excl = " "
}

if((myNum % 5) === 0 ) {
    if(myNum === 0) {
    console.log("boom".toUpperCase())
} else {
    console.log("b".toUpperCase() + variable.toUpperCase() + "m".toUpperCase() + excl)
}} else {
        if(myNum === 0) {
    console.log("boom");
} else {
    console.log("b" + variable + "m" + excl)
    }}
}

