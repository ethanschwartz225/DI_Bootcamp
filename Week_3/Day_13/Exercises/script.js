function myMove() {
  let animate = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(function() {
    if (pos === 350) {
      clearInterval(id);
    }
    else {
      pos++;
      animate.style.left = pos + "px";
    }
  }, 3);
}

let item = document.getElementById("draggable");
item.addEventListener("dragstart", startDragging);

function startDragging (event) {
	console.log("start dragging", event.target.id);
	event.target.classList.add("startDragging");
	event.dataTransfer.setData("text/plain",event.target.id)
}

let allDropZones = document.getElementsByClassName("dropzone");
console.log(allDropZones)

function addTheListeners (){
	for (let zone of allDropZones){
		zone.addEventListener("dragover", draggingOver)
		zone.addEventListener("drop", dropping)
	}
}
addTheListeners()

function draggingOver (event) {
	event.preventDefault();
}
function dropping(event){
    event.preventDefault();
	let elementToDrop = event.dataTransfer.getData("text/plain")
	let elemNode = document.getElementById(elementToDrop)
	event.target.appendChild(elemNode)
}
