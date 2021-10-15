//EXERCISE 1:
let sum = 0;
function isDivisible(){
    for(let i = 1; i < 501; i++) {
        if((i % 23) === 0) {
            console.log(i);
            sum += i;
         }
    } console.log(sum)
}

isDivisible()

// Exercise 5 : Amazon Shopping
//
// Instructions
//
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

let userItem = prompt("enter an item:");
function checkBasket(){
    if(userItem in amazonBasket){
        alert("amazon has " + userItem + " in stock.");
    } else {
         alert("This item is not in stock.");
    }
}
checkBasket();


// Exercise 6 : What’s In My Wallet ?
//
// Instructions
//
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// let itemPrice = prompt("Enter price of item you want to purchase.");

// myWallet = [23, 13, 20, 55];
// changeValue = [0.25, 0.10, 0.05, 0.01];


// let sumChange = 0
// function countChange() {
//     for (let i = 0; i < myWallet.length; i++) {
//         sumChange += (myWallet[i] * changeValue[i]);
//      } console.log(sumChange.toFixed(2))
// }
// countChange()

// function changeEnough() {
//     if(sumChange >= itemPrice){
//         alert("You can afford this item!")
//     } else {
//         alert("You can't afford this item.")
//     }
// }
// changeEnough();
let itemPrice = prompt("Enter price of item you" +
    " want to purchase.");
    changeValue = [0.25, 0.10, 0.05, 0.01];
    let sumChange = 0
function changeEnough(arrayChange, itemPrice) {
    function countChange() {
            for (let i = 0; i < arrayChange.length; i++) {
                sumChange += (arrayChange[i] * changeValue[i]);
             } console.log(sumChange.toFixed(2))
        }
        countChange()
            if(sumChange >= itemPrice){
                alert((sumChange >= itemPrice) +
                    ". You can afford this item!")
            } else {
                alert((sumChange >= itemPrice) +
                    ". You can't afford this item.")
            }
        }
changeEnough([230, 13, 20, 55], itemPrice);

// Exercise 7 : Shopping List

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"] ;
let billSum = 0;
function myBill(){
    for (let i = 0; i < shoppingList.length; i++){
        if(shoppingList[i] in stock) {
            billSum += stock[shoppingList[i]] *
                prices[shoppingList[i]];
        }
    } console.log(billSum);
}
myBill();

// Exercise 8 : Tips
//
// Instructions
//
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
//
// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.
//
// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

let billTotal = prompt("Hey John, what is the price " +
    "of the bill?");
function tipCalc(){
    if(billTotal > 200){
        let tipPercent = 0.1;
        let tipTotal = tipPercent * billTotal;
        console.log(tipTotal)
        console.log(parseFloat(tipTotal) + parseFloat(billTotal));
    } else if(50 < billTotal < 200){
        let tipPercent = 0.15;
        let tipTotal = tipPercent * billTotal;
        console.log(tipTotal)
        console.log(parseFloat(tipTotal) + parseFloat(billTotal));
    } else {
        let tipPercent = 0.2;
        let tipTotal = tipPercent * billTotal;
        console.log("The tip will be " + tipTotal)
        console.log("The total bill will come out to " +
            parseFloat(tipTotal) + parseFloat(billTotal));
    }
}
tipCalc();

// Exercise 9 : Vacations Costs
// HOTEL COSTS

let hotelNights = prompt("How many nights would you like to book?")
function hotelCost(){
    while(isNaN(hotelNights) || hotelNights === ""){
        hotelNights = prompt("How many nights would you like to book?");
    }
    let hotelPrice = 140;
    console.log("the hotel will cost: $" + (hotelPrice * hotelNights) + ", ");
    return hotelPrice * hotelNights;
}
// hotelCost();


// FLIGHT COSTS
    let destination = prompt("Where would you like to go?".toLowerCase());
        if (destination === "london") {
        ticketPrice = 183;
    } else if (destination === "paris") {
        ticketPrice = 220;
    } else {
        ticketPrice = 300;
    }
function planeRideCost() {
    while(!isNaN(destination)) {
        destination = prompt("Where would you like to go?".toLowerCase());
    }
    return ticketPrice;
} console.log("the flight will cost: $" + ticketPrice + ", ");
// planeRideCost();


// RENTAL CAR COST
let daysOfRental = prompt("How many days would you like to use a rental car?");
let rentalCarPrice = 40;
let totalRentalPrice = 0;
function rentalCarCost() {
    while(isNaN(daysOfRental) || daysOfRental === ""){
        daysOfRental = prompt("How many days would you like to use a rental car?");
    }
    if(daysOfRental > 10){
        totalRentalPrice = daysOfRental * rentalCarPrice * 0.95;
        console.log("the car will cost: $" + totalRentalPrice + ".");
    } else {
        totalRentalPrice = daysOfRental * rentalCarPrice;
        console.log("the car will cost: $" + totalRentalPrice + ".");
    } return totalRentalPrice;
}
// rentalCarCost();

// VACATION COST

function totalVacationCost(){
    hotelCost()
    planeRideCost()
    rentalCarCost()
}
totalVacationCost()