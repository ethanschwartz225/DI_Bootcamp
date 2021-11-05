let button = document.getElementById("button");
let url = `https://swapi.dev/api/people/`;

const getStarWars = (event) => {
    event.preventDefault();
    fetch(url)
        .then(response => {
            if(response.status === 200){
                return response.json();
            } else {
                throw new Error("Not 200.")
            }
        })
        .then(jsData => {
            let randomNumber = Math.random()*10;
            let starWarsPerson = jsData.results[parseInt(randomNumber)];
            console.log(starWarsPerson);
            displayPerson(starWarsPerson);
        })
        .catch(error => {
            console.log(error);
            let errorWarning = document.createElement("h1");
            errorWarning.textContent = "Oops, there seems to have been a problem.";
            document.getElementById("container").appendChild(errorWarning);
        })
}
(()=>{
    button.addEventListener("click", getStarWars);
})();

const displayPerson = (starWarsPerson) => {
    //creates display
    let container = document.getElementById("container");
    clearDisplay(container);

    displayLoader(container);

    //creates name
    let name = document.createElement("h1");
    name.textContent = starWarsPerson.name;
    container.appendChild(name);

    //creates height
    let height = document.createElement("h3");
    height.textContent = "Height: " + starWarsPerson.height;
    height.classList.add("info")
    container.appendChild(height);

    //creates gender
    let gender = document.createElement("h3");
    gender.textContent = "Gender: " + starWarsPerson.gender;
    gender.classList.add("info")
    container.appendChild(gender);

    //creates birthyear
    let birth_year = document.createElement("h3");
    birth_year.textContent = "Birth Year: " + starWarsPerson.birth_year;
    birth_year.classList.add("info");
    container.appendChild(birth_year);

    //creates homeworld
    fetch(starWarsPerson.homeworld)
    .then(response => response.json())
    .then(response => {
        console.log(response.name);
        let homeworld = response.name;
        let homeworldInfo = document.createElement("h3");
        homeworldInfo.textContent = "Home World: " + homeworld;
        homeworldInfo.classList.add("info");
        container.appendChild(homeworldInfo);
    })
}
const clearDisplay = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const displayLoader = (container) => {
        let loading = document.createElement("div");
        loading.setAttribute("id", "loader");
        loading.classList.add("display");
        container.appendChild(loading);
}


