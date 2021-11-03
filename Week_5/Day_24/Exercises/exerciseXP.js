//EXERCISE 1

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

// getAPI = async() => {
//     let urlData = await fetch(`https://swapi.dev/api/starships/9/`);
//     let data = await urlData.json();
//     console.log(data)
// }

// EXERCISE 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();

// order of things:
//1. line 23
//2. line 24
//3. line 14
//4. line 16 (2 seconds)
//5. line 25

