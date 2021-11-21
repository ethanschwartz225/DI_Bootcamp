//Exercise 1 : Reading From A File In Node.JS
const fs = require('fs');

fs.readFile('./text.md', "utf-8", (err, data) => {
    if(err) {
        console.error(err);
    }
    console.log(data);
});

//Exercise 2 : Writing Files With Node JS
// let newText = 'newText.txt';
// fs.writeFile('newText.txt', 'This text is purely' +
//     ' demonstrative for the second exercise.', function(err) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log(`New file (${newText}) successfully created.`);
//     }
// })

// fs.appendFile('newText.txt', 'Buy some orange juice!', function (err) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log('newText.txt has been successfully appended.')
//     }
// })

// fs.unlink('newText.txt', function(err) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log('newText.txt has been successfully deleted.')
//     }
// })
