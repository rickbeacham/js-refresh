console.log("Hello world");

// String, Numbers, Boolean, null, undefined
const name = "Rick";
console.log(name);

const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof isCool);

// Strings
const firstName = "Rick";
const realAge = 30;

// Concatenation
console.log("My name is..." + firstName + "my name is ... and I am " + realAge);
// ES6 Template String
console.log(`My name is ${firstName} and I am ${realAge}`);
// string properties and methods
const s = "Hello World";
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

// Arrays
const numbersArray = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(numbersArray);
const numbersStrings = new Array("green", "black", "orange", "purple", "red");
console.log(numbersStrings);
console.log(numbersStrings[3]);
numbersStrings[5] = "grey";
console.log(numbersStrings);
numbersStrings[7] = "black";
console.log(numbersStrings);
numbersStrings.push("violet");
numbersStrings.unshift("white");
console.log(numbersStrings);

console.log(Array.isArray(numbersStrings));

console.log(numbersStrings.indexOf("red"));

// Object Literals
const human = {
  firstNames: "Rick",
  lastName: "Beachman",
  age: "30",
  interests: ["music", "movies", "society", "sports", "dancing"],
  address: {
    street: "123 main st",
    city: "Waveland",
    state: "MS"
  }
};

console.log(human);
console.log(human.address.city);

const {
  firstNames,
  lastName,
  address: { city }
} = human;
console.log(city);

human.email = "rick@gmail";
console.log(human.email);

// Arrays of Objects
const tudos = [
  {
    id: 1,
    text: "Wash the Dishes",
    complete: true
  },
  {
    id: 2,
    text: "Clean clothes",
    complete: true
  },
  {
    id: 1,
    text: "Play Video Games",
    complete: false
  }
];

console.log(tudos[1].text);

const tudoJSON = JSON.stringify(tudos);
console.log(tudoJSON);
// Loops //
// For
for (let i = 0; i < 10; i++) {
  console.log(`Iteration number = ${i}`);
}
// While
let i = 0;
while (i < 10) {
  console.log(`While iteration number: ${i}`);
  i++;
}

// length
for (let i = 0; i < tudos.length; i++) {
  console.log(tudos[i].text);
}

for (let tudo of tudos) {
  console.log(tudo.text);
}

// High Order
// forEach, map, Filter
tudos.forEach(function(tudo) {
  console.log(tudo.text);
});

const tudoText = tudos.map(function(tudo) {
  //console.log(tudo.text);
  return tudo.text;
});
console.log(tudoText);
//Filter
const tudoCompleted = tudos.filter(function(tudo) {
  //console.log(tudo.text);
  return tudo.complete === true;
});
console.log(tudoCompleted);

const tudoCompletes = tudos
  .filter(function(tudo) {
    //console.log(tudo.text);
    return tudo.complete === true;
  })
  .map(function(tudo) {
    return tudo.text;
  });
console.log(tudoCompleted);

// Conditions
j = "10";
if (j == 10) {
  console.log("j is 10 string or integer");
}

j = "10";
if (j === "10") {
  console.log("j is 10 string");
}

j = 10;
if (j === 10) {
  console.log("j is 10 integer");
}

j = 4;
p = 10;

if (j > 5 || y > 10) {
  console.log("j is ore than 5 or p is more than 10");
}

// if then else tenerary
j = 11;
color = j > 10 ? "red" : "blue";
console.log(color);

//Switch Case
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color  is blue");
    break;
  default:
    console.log("color is not red ");
}

function addN(n1, n2) {
  console.log(n1 + n2);
}
addN(1, 4);
addN("1", "4");
function addN(n1, n2) {
  return n1 + n2;
}
console.log(addN(3, 4));

// END of BASICS //

// Objects //
// Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  };
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Instantiate object
const person1 = new Person("John", "Doe", "3-1-1982");
const person2 = new Person("April", "Doe", "1-1-1983");

console.log(person1);
console.log(person2);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person2.getFullName());

// Class
class Student {
  constructor(firstname, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const student1 = new Student("Berry", "Does", "5-23-1982");
console.log(student1);

// DOM //
