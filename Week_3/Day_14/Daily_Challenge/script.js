let input = document.getElementById("input");
let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click", addToList);

let newDiv;
function addToList(event) {
    event.preventDefault();
    let newDiv = document.createElement("div");
    newDiv.textContent = input.value;
    list.appendChild(newDiv);
    newDiv.classList.add("list");
}

let checkbox = document.getElementById("checkbox1");
checkbox.addEventListener("click", function(){
    newDiv.style.fontStyle.strike();
})





