nounInput = document.getElementById("noun");
adjectiveInput = document.getElementById("adjective");
personInput = document.getElementById("person");
verbInput = document.getElementById("verb");
placeInput = document.getElementById("place");

button = document.getElementById("lib-button");

button.addEventListener("click", function(){
    for(let i= 0; i < 5; i++){
      if(document.getElementsByTagName("input")[i].value.length > 0) {
          document.getElementsByTagName("input")[i].value;
      }
    }
      let newParagraph = document.createElement("p");
      newParagraph.textContent = "There was once a " + nounInput.value + " that was very special " + "because it was " + adjectiveInput.value + ". " + personInput.value + " " + verbInput.value + " with it all day and night. " + personInput.value + " woke up the next day in " + placeInput.value + ".";
      document.body.appendChild(newParagraph);
});







