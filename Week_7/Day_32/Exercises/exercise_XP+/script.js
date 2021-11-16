fetch('http://localhost:3000/index.html')
    .then(response => {
        console.log(response.json())
    })
    .catch(error => console.log(error))

