milkyPlanets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
    ];

for(let i = 0; i < milkyPlanets.length; i++) {
    let planetDiv = document.createElement("div");
    planetDiv.setAttribute("class", "planet");
    document.querySelector("section").appendChild(planetDiv);
}