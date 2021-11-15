//PART 1
// const main = require('./main.js');
//
// const b = 5;
// console.log(main.largeNumber + b);

//PART 2
// let http = require('http');
//
// let server = http.createServer((request, response) => {
//     response.end('Hi there at the frontend');
// })
// server.listen(3000, () => {
//     console.log('Listening to 3000')
// });

//PART 3
const main = require('./main.js')
console.log(main.currentTime)
let time = main.currentTime.toDateString();

let http = require('http');
let server = http.createServer((request, response) => {
    response.end("Today's date is: " + time);
})

server.listen(8080, () => {
    console.log('Listening to 8080');
});


