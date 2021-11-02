//EXERCISE 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//prediction :
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-132.1207)

//EXERCISE 2

displayStudentInfo({first: 'Elie', last:'Schoppik'})
// output : 'Your full name is Elie Schoppik'`
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:

function displayStudentInfo(studentObject){
    console.log(`Your full name is ${studentObject.first} ${studentObject.last}`)
}

// EXERCISE 3: User & Id
//
// Instructions
//
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
//
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
//
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users));
const usersValues = Object.values(users);
usersValues.forEach(element => console.log(element * 2));


//EXERCISE 4:

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//prediction: output = Object

//EXERCISE 5:
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // ANSWER: 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//EXERCISE 6:
console.log([2] === [2])
console.log({} === {})
 // both false

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5};
object1.number = 4;

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(sound) {
        super(name, type, color);
    }
}



