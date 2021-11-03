// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// Create a program to fetch gifs.
// Allow the user to search for as many GIFs as they want and append them to the page.
// The gif should be appended with a DELETE button next to it.

let form = document.getElementById("form");

let xhr = new XMLHttpRequest();



const searchGif = (event) => {
event.preventDefault();
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${form.input.value}hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
xhr.send()
xhr.onload = function() {
    if(xhr.status !== 200) {
        console.log("Error status")
    } else {
        console.log("Finished Loading");
        console.log(JSON.parse(xhr.response))
        let readableFile = JSON.parse(xhr.response)
        displayGif(JSON.parse(readableFile))
    }
}
}

form.addEventListener("submit", searchGif);

const displayGif = () => {
    let gifImage = document.createElement("img");
    gifImage.setAttribute("src", )

}