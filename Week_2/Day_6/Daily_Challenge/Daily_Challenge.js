// Daily Challenge
// Exercise 1
// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove Banana from the array.
// 2. Sort the array in alphabetical order.
// 3. Add “Kiwi” to the end of the array.
// 4. Remove “Apples” from the array. Don’t use the same method as in part 1.
// 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//
// Goal: ["Kiwi", "Oranges", "Blueberries"]

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// to remove banana
fruits.shift(0,1)
// to alphabetize
fruits.sort()
// to add "kiwi"
fruits.push("Kiwi")
// to omit apple
fruits.splice(0,1)
// to reverse the current order of items
fruits.reverse()

console.log(fruits)





//Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1])
