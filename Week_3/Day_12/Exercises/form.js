let articleLast = document.querySelector("article").lastElementChild;
articleLast.remove();

let header = document.querySelector("h1");
header.addEventListener("click", function(){
    document.querySelector("h1").style.backgroundColor = "red";
})

header.style.fontSize = (Math.random() * 100) + "px";

let headerThree = document.querySelector("h3");
headerThree.addEventListener("click", function(){
    headerThree.style.display = "none";
});

let button = document.getElementById("button");
button.addEventListener("click", function(){
    document.body.style.fontWeight = "bold";
});

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let submitForm = document.getElementById("form");


submitForm.addEventListener("submit", function(event){
    if (fname.value.length > 0 && lname.value.length > 0) {
        event.preventDefault()
        console.log(fname.value);
        console.log(lname.value);
    }

    let newDiv = document.createElement("div");
    newDiv.textContent = fname.value + " " + lname.value;
    document.body.appendChild(newDiv);
})

let secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", function(){
    secondParagraph.style.opacity = "0";
})

function getBoldItems(){
        let boldWords = document.getElementsByTagName("strong");
    for(let i = 0; i < boldWords.length; i++){
        console.log(boldWords[i].textContent);
        }
}
getBoldItems()

function highlight(){
    let boldWords = document.getElementsByTagName("strong");
    for(let i = 0; i < boldWords.length; i++){
        boldWords[i].style.backgroundColor = "yellow";
        }
}
highlight()

function return_normal(){
        let boldWords = document.getElementsByTagName("strong");
    for(let i = 0; i < boldWords.length; i++){
        boldWords[i].style.backgroundColor = "white";
        boldWords[i].style.fontWeight = "normal";
        }
}
return_normal()

let lastParagraph = document.querySelectorAll("p")[3];
lastParagraph.addEventListener("mouseover", highlight);
lastParagraph.addEventListener("mouseout", return_normal);