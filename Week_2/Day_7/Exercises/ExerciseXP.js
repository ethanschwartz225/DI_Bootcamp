// EXERCISES DAY 7
// Exercise 1: Simple If/Else Statement

let x = 10;
let y = 7;

if(x >= y) {
    console.log("x is the biggest number.");
} else {
    console.log("y is the biggest number.")
}

// Exercise 2: Chihuahua

// Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua"

// Check and display how many letters are in newDog.
console.log(newDog.length)

// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

// Check if the variable newDog is equal to “Chihuahua”
console.log(newDog === "Chihuahua")

// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
if(newDog === "Chihuahua"){
    console.log("I love Chihuahuas, it's my favorite dog breed")
}
// else, console.log ‘I dont care, I prefer cats’
else {
    console.log("I dont care, I prefer cats")
}

// Exercise 3: Even Or Odd
// Prompt the user for a number and save it to a variable.
let userNumber = prompt("Please enter a number.")

// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if(userNumber % 2 === 0) {
    console.log(userNumber + " is an even number")
} else {
    console.log(userNumber + " is an odd number")
}

//Exercise 4: Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]





// Using the array above, console.log the number of users in a group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.

if(users.length === 0) {
    console.log("No one is online.")
} else if(users.length === 1) {
    console.log(users + " is online.")
} else if(users.length === 2) {
    console.log(users + " and " + usersOnline + " are online.")
} else if(users.length > 2) {
    console.log(users[0] + ", " + users[1] + " and " + ((users.length)-=2) + " others are online.")
}




// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:




