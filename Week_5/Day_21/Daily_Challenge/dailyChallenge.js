let form = document.getElementById("form");

form.addEventListener("submit", getInfo);

function getInfo(event) {
    event.preventDefault();
    let person = {"name": form.name.value , "lastName": form.lastName.value}
    let personJSON = JSON.stringify(person)
    console.log(personJSON);
}