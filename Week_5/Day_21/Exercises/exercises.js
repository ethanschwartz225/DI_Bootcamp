//EXERCISE 1
let form = document.getElementById("form")

form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log(form["inputName"].value);
    console.log(form["inputComment"].value);
})

// I know its supposed to add queries to the browser's search bar.
// My code does not have this effect, however.

//EXERCISE 2

let form2 = document.getElementById("form2")

form2.addEventListener("submit", function (event){
    event.preventDefault()
    console.log(form2["inputName2"].value);
    console.log(form2["inputComment2"].value);
})

//This should log the information somewhere in the html file.

// EXERCISE 3
let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

let JSONString = JSON.stringify(marioGame, null, 2);
console.log(JSONString)
