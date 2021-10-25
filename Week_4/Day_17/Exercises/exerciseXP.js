// EXERCISE 1
let sum = (a, b) => a + b;
console.log(sum(1, 3));

//EXERCISE 2
const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));

//PREDICTION is
// x + y = 13 //

//EXERCISE 3
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1);
// console.log(curriedSum(30)(1));
//PREDICTION is
// undefined?
// Wrong..its 31

//EXERCISE 4
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12);
console.log(add5(12));
//PREDICTION is
// 17

//EXERCISE 5
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1; // 11
// const add5 = (num) => num + 5; // 15
// compose(add1, add5)(10);
//PREDICTION is
// 26