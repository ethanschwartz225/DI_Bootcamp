// //EXERCISE 1
// let xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//
// xhr.send();
//
// xhr.onload = function(){
//     if(xhr.status !== 200) {
//         alert("Error");
//     } else {
//         console.log("Finished Loading.");
//         let getGIF = JSON.parse(xhr.response);
//         console.log(getGIF);
//     }
// }

//EXERCISE 2
    //console.log 10 GIFs about the "Sun"
(function(){
let form = document.getElementById("form");
form.addEventListener("submit", search);
})();

let searchGIF = document.getElementById("searchGIF");

function search(event) {
    event.preventDefault();

}

let xhr2 = new XMLHttpRequest();

xhr2.open('GET', `https://api.giphy.com/v1/gifs/search?q=${searchGIF.value}&hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

xhr2.send();

xhr2.onload = function(){
    if(xhr2.status !== 200) {
        alert("Error");
    } else {
        console.log("Finished Loading.");
        let getGIF = JSON.parse(xhr2.response);
        console.log(getGIF)
        // getGIF.data.forEach(element => console.log(element.user.description));
        console.log(getGIF.data[0].title);

    }
}

let form = document.getElementById("form");
form.addEventListener("submit", requestGif)

let url = `https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
let result = document.getElementById("result")

function requestGif(event) {
    event.preventDefault()
    fetch(url)
        .then(response => {
            if(response.status === 200) {
                return response.json();

            } else {
                throw new Error("Not 200.")
            }
        })
        .then(jsData => {
            console.log(jsData);
            let gifLink = jsData.data.url;
            console.log(gifLink);
            displayGif(gifLink)
    })
        .catch(error => {
            console.log("Error: ", error);
        })
}

function displayGif(gifLink) {
    let newGif = document.createElement("img");
    newGif.setAttribute("src", gifLink);
    result.appendChild(newGif)
}


