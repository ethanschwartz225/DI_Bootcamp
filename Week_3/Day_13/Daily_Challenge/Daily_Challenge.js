//Daily Challenge
let input = document.getElementById("inputKey");
let outputReader = document.getElementById("output")

input.addEventListener("keydown", function(event){
    outputReader.textContent = event.keyCode;
    document.createElement("h3");
})

input.addEventListener("keyup", function(){
    input.value = "";
})