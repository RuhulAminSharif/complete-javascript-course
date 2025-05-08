"use strict";
/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if( passTest ) {
  hasDriversLicense = true;
}
if( hasDriversLicense ) {
  console.log('I can drive');
}

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('This is a logger');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log( apples, oranges );
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(4, 5));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5,3);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(2001);

// Function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1, age2);

///////////////////////////////////////
// Arrow functions
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log( yearsUntilRetirement(1995, 'Karim') );
console.log( yearsUntilRetirement(1980, 'Bob') );


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = [
  'Michael',
  'Steven',
  'Peter'
];

console.log(friends);

const years = new Array(
  1991, 1984, 2008, 2020
);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; // illegal

const sharif = ['Ruhul Amin', 'Sharif', 23, 'student', friends ];
console.log(sharif);
console.log(sharif.length);

const calcAge = (birthYear) => {
  return 2025-birthYear;
}
const birthYears = [1990, 1967, 1985, 1977, 2001];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length-1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[birthYears.length - 1]),
];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
// const newLength = friends.push("Jay");
friends.push("Jay"); // add element at the end
console.log(friends);
// console.log(newLength);

friends.unshift("John"); // add element at the front
console.log(friends);

// Remove elements
friends.pop(); // pop last element
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // pop frist element
console.log(friends);

// indexOf return idx if present, else -1
let idx = friends.indexOf("Steven");
console.log(idx);
idx = friends.indexOf("Bob");
console.log(idx);

//includes returns true if present, else return false
// includes check strict equality
let isPresent = friends.includes("Steven");
console.log(isPresent);
isPresent = friends.includes("Bob");
console.log(isPresent);

if( friends.includes('Steven') ) {
  console.log('You have a friend called Steven');
}

///////////////////////////////////////
// Introduction to Objects
const sharif = {
  firstName: "Ruhul Amin",
  lastName: "Sharif",
  birthYear: 2001,
  job: "student",
  friends: ["Rahim", "Karim"],
  hasDriverseLicense: true,

  // calcAge: function(birthYear) {
  //   return 2025 - birthYear;
  // },
  calcAge: function() {
    return 2025 - this.birthYear;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${sharif.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  }
};
console.log(sharif);

///////////////////////////////////////
// Dot vs. Bracket Notation
console.log(sharif.firstName);
console.log(sharif["firstName"]);

const nameKey = "Name";
console.log(sharif["first" + nameKey]);
console.log(sharif["last" + nameKey]);

sharif.location = "Chattogram";
sharif["linkedIn"] = "https://www.linkedin.com/in/the-boolean-nerd/";
console.log(sharif);

console.log(
  `${sharif.lastName} has ${sharif.friends.length} friends, and his best friend is ${sharif.friends[0]}`
);
console.log(
  `${sharif['lastName']} has ${sharif['friends'].length} friends, and his best friend is ${sharif['friends'][0]}`
);

console.log(sharif.getSummary());


///////////////////////////////////////
// Iteration: The for Loop

for (let rep = 1; rep <= 10; rep += 1) {
  console.log(`Lifting weights repetition ${rep}`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

const sharif = [
  "Ruhul Amin",
  "Sharif",
  23,
  "student", 
  ["Rahim", "Karim"]
];
const types = [];

for (let i = 0; i < sharif.length; i++) {
  const element = sharif[i];
  console.log(element, typeof element);
  // types[i] = typeof element;
  types.push(typeof element);
}

for (let i = 0; i < types.length; i++) {
  const element = types[i];
  console.log(element);
}

const years = [1991, 2007, 1977, 2001];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2025-years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < sharif.length; i++) {
  if (typeof sharif[i] !== "string") {
    continue;
  }
  console.log(sharif[i], typeof sharif[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < sharif.length; i++) {
  if (typeof sharif[i] === "number") {
    break;
  }
  console.log(sharif[i], typeof sharif[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops 
for (let idx = sharif.length - 1; idx >= 0; idx -= 1) {
  console.log(idx, sharif[idx]);
}

for (let exercise = 1; exercise <= 3; exercise += 1) {
  console.log(`---- Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep += 1 ) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);    
  }
}
*/
///////////////////////////////////////
// The while Loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting with repetition ${rep}`);
  rep += 1;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while( dice !== 6 ) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}