let form = document.getElementById("form");
const addToList = (event) => {
    event.preventDefault()
    let list = document.getElementById("list");
    let newListItem = document.createElement("li")
    newListItem.textContent = form["name"].value;

    list.appendChild(newListItem);
        newListItem = form["name"].value;
        let nameList = {
            'Name': newListItem
        }
let inputName = document.getElementById("name")
inputName.value = "";
    fetch('http://localhost:3000/namelist', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(nameList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // sendName(data)
            })
            .catch(error => console.log(error))
}
form.addEventListener("submit", addToList);

fetch('http://localhost:3000/names')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            // console.log(Object.values(element));
            let list = document.getElementById("list");
            let newName = document.createElement("li");
            newName.textContent = Object.values(element);
            list.appendChild(newName);
        })
})

