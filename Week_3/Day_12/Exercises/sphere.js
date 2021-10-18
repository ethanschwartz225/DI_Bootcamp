let radius = document.getElementById("radius");
let button = document.getElementById("submit");
let volume = document.getElementById("volume")

button.addEventListener("click", function(event){
    event.preventDefault()
        let volumeResult = (Math.pow(radius.value, 3) * (4 / 3) * Math.PI);
        console.log(volumeResult);
        volume.value = volumeResult.toFixed(4);
});




