let form = document.getElementById("form");
let results = document.getElementById("results");

const submitForm = (event) => {
    event.preventDefault();
    console.log(form["inputEmail"].value, form["inputMessage"].value);
    let userEmail = form["inputEmail"].value;
    let userMessage = form["inputMessage"].value;
        appendData(userEmail, userMessage);
}
form.addEventListener("submit", submitForm)

const appendData = (userEmail, userMessage) => {
    let newData = document.createElement("h3");
    newData.textContent = (userEmail + ", " +  userMessage);
    results.appendChild(newData);
}