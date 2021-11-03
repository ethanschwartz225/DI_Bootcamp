//Exercise 1
const compareToTen = (number) => {
     return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve("It's greater than ten");
        } else if (number < 10) {
            resolve("It's less than ten")
        } else {
            reject("Error: Please enter a valid number.")
            throw new Error("error")
        }
    })
}

compareToTen("hello")
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//Exercise 2

// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

// const promiseFunction = (input) => {
//      return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             typeof input === "string"? resolve(input): reject(input)
//         }, 4000);
//     })
// }
// promiseFunction("Success")
//     .then(input => console.log(input))
//     .catch(error => console.log("Error: ", error))

//part 2;

const promiseFunction = (input) => {
        setTimeout(function(){
            typeof input === "string"? Promise.resolve(input): Promise.reject(input)
            }, 4000);
        }
promiseFunction()
    .then(values => console.log(values))
    .catch(error => console.log("Error: ", error));

//Need help with this.

// Exercise 3

const newPromiseFunc = (integer) => {
    (integer === 3)? Promise.resolve(integer): Promise.reject(integer)
}

newPromiseFunc((5))

//Really don't understand.