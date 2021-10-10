//Exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// to get rid of Banana
fruits.splice(0, 1)

// to sort in alphabetical order
fruits.sort()

// to add Kiwi to the array
fruits.push("Kiwi")

// // to omit Apples and sort them in the reverse order
fruits.slice(1,4).reverse()




//Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1])