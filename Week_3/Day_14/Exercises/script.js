let isMouseDown = false;

colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "magenta",
    "black"
]

for(let i = 0; i < colors.length; i++){
    let colorSelector = document.createElement("div");
    let palette = document.getElementById("colorPalette");
        colorSelector.classList.add("colorSelector")
            palette.appendChild(colorSelector);
        colorSelector.style.backgroundColor = colors[i];
            colorSelector.addEventListener("click", changeColor);
}

for(let i = 0; i < 1440; i++) {
    let gridbox = document.createElement("div");
    let paintingArea = document.getElementById("paintingArea");
    paintingArea.appendChild(gridbox);
    gridbox.classList.add("gridbox");
    gridbox.addEventListener("click", clickBox);

        gridbox.addEventListener("mousedown", function() {
        isMouseDown = true;
    })
    gridbox.addEventListener("mouseover", function() {
        if(isMouseDown){
            this.style.backgroundColor = currentColor;
        }
    })
    gridbox.addEventListener("mouseup", function() {
        isMouseDown = false;
    })

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
        gridbox.style.backgroundColor = "white";
    })
}

let currentColor;
function changeColor(event) {
    currentColor = event.target.style.backgroundColor;
    console.log(currentColor);
}

function clickBox(event){
    console.log(event.target);
        event.target.style.backgroundColor = currentColor ;
}










