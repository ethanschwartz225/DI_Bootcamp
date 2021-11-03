let searchBar = document.getElementById("searchFriends");
let button = document.getElementById("button");
let friendsContainer = document.getElementById("container");

 let robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

 function listFriends(robotsToDisplay = robots) {
     // while (friendsContainer.firstChild) {
     //    friendsContainer.firstChild.remove();
// }
    robotsToDisplay.forEach(element => {
        let profileCard = document.createElement("div");
        profileCard.classList.add("profileCardWrapper")

        let profileCardImage = document.createElement("img");
        profileCardImage.classList.add("profileCardImage");
        profileCardImage.setAttribute("src", element["image"]);
        profileCard.appendChild(profileCardImage);

        let profileCardName = document.createElement("h1");
        profileCardName.textContent = element.name;
        profileCardName.classList.add("profileCardName");
        profileCard.appendChild(profileCardName);

        let profileCardEmail = document.createElement("h3");
        profileCardEmail.textContent = element.email;
        profileCardEmail.classList.add("profileCardEmail");
        profileCard.appendChild(profileCardEmail);

        let profileCardId = document.createElement("h3");
        profileCardId.textContent = "ID# " + element.id;
        profileCardId.classList.add("profileCardEmail");
        profileCard.appendChild(profileCardId);

        let profileCardUsername = document.createElement("h2");
        profileCardUsername.textContent = element.username;
        profileCardUsername.classList.add("profileCardEmail");
        profileCard.appendChild(profileCardUsername);

        friendsContainer.appendChild(profileCard);
    })
}
listFriends()

button.addEventListener("click", submitSearch);

function submitSearch() {
            let newRobots = robots.filter(element => {
            console.log(searchBar.value)
            if(element.name.includes(searchBar.value)){
                element.profileCard.style.display = "none";
                return element;
            }
        })
    listFriends(newRobots)
    console.log(newRobots);
}









