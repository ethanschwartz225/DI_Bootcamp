let form = document.getElementById("form");
let listItems = document.getElementById("list");

const addToList = (event) => {
        if(
            (isNaN(form['inputItem'].value)) &&
            (!isNaN(form['amount'].value)) &&
            (form['inputItem'].value !== " ") &&
            (form['amount'].value !== " ")
        ) {
            event.preventDefault();
            let newItem = document.createElement("h3");
            newItem.textContent = form['inputItem'].value + ': ' + form['amount'].value;
            listItems.appendChild(newItem);
                sendData();

                form['inputItem'].value = "";
                form['amount'].value = "";
                // newItem = form['inputItem'].value + ' ' + form['amount'].value;
        } else {
            throw new Error('Please enter valid item and quantity.');
        }
    }

(() => {
    form.addEventListener("submit", addToList);
})();

(()=>{
let clear = document.getElementById("clear");
    const clearList = () => {
        listItems.remove();
    }
clear.addEventListener("click", clearList);
})();


const sendData = () => {
    let form = document.getElementById("form");
    let itemName = form["inputItem"].value
    let itemAmount = form["amount"].value;
    let shopping = {
        itemName,
        itemAmount
    }

    fetch('http://localhost:3000/list', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(shopping)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
}