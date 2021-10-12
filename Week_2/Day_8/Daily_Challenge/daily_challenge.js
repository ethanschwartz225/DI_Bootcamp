// Instructions
//
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

for ( let i = 0; i < 7; i++){
    console.log(" * ".repeat(i));
}

for ( let y = 0; y < 3; y++){
    for( y = 0; y < 7 ; y++) {
        console.log(" * ".repeat(y));
    }
}