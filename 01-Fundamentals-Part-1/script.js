/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
// if (js === 'amazing') {
//   alert('JavaScript is FUN!');
// }
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Sharif");
console.log(23);

let firstName = "Ruhul Amin";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types 
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log( typeof true );
console.log( typeof javascriptIsFun );
console.log( typeof 23 );
console.log( typeof 'Sharif' );

console.log( typeof javascriptIsFun );
javascriptIsFun = 'YES!';
console.log( typeof javascriptIsFun );

let year;
console.log( year );
console.log( typeof year );

year = 2001;
console.log( typeof year );

console.log( typeof null ); // a legacy bug

////////////////////////////////////
// let, const and var
let age = 23;
age = 24;

const birthYear = 2001;
// birthYear = 2001; // not possible to re-assign
// const job; // const without value is not possible

var job = 'Programmer';
job = 'teacher';

lastName = 'Sharif'; // even without let/const/var works
console.log( lastName );

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log( ageJonas * 2, ageJonas / 10, 2 ** 3 );
// 2 ** 3 = 2 * 2 * 2

const firstName = 'Ruhul Amin';
const lastName = 'Sharif';
console.log( firstName + ' ' + lastName );

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x); 

// Comparison operators
console.log( ageJonas > ageSarah); // >, <, >=, <=
console.log( ageSarah >= 18 );

const isFullAge = ageSarah >= 18;

console.log( isFullAge );
console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y)

const averageAge = ( ageJonas + ageSarah ) / 2;
console.log( ageJonas, ageSarah, averageAge );

////////////////////////////////////
// Strings and Template Literals
const firstName = "Ruhul Amin";
const job = "student";
const birthYear = 2001;
const year = 2025;

const sharif = "I'm " + firstName + ", a " + ( year - birthYear ) + " years old " + job + "!";
console.log(sharif);

const sharifNew = `I'm ${firstName}, a ${ year - birthYear } years old ${job}!`
console.log(sharifNew);

console.log(`Just a regular string...`);

console.log('String with\n\
multiple \n\
lines using regular syntax');

console.log(`String with
multiple 
lines using template literals`);

////////////////////////////////////
// Taking Decisions: if / else Statements

const age = 15;

if( age >= 18 ) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2001;
let century;
if( 1900 <= birthYear && birthYear < 2000 ) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log( Number(inputYear) + 18 ); 

console.log( Number('Sharif') );
console.log( typeof NaN );

console.log( String(23), 23 );

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log( '23' - '10' - 3 );
console.log( '23' + '10' + 3 );
console.log( '23' * '2' );
console.log( '23' / '2' );

let n = '1' + 1;
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sharif'));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(null));

const money = 10;
if( money ) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;
if( height ) { // it will lead to a bug if height = 0
  console.log("It's defined");
} else {
  console.log("It's undefined");
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if( age === 18 ) {
  console.log('You just became an adult :D (strict)');
}
if( age == 18 ) {
  console.log('You just became an adult :D (loose)');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log( typeof favourite);

if( favourite === 23 ) {
  console.log('Cool. 23 is an amazing number!')
} else if( favourite === 7 ) {
  console.log('7 is also a cool number!')
} else {
  console.log('Number is not 23 or 7 ');
}

if( favourite !== 23 ) {
  console.log('Why not 23?');
}

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log( hasDriversLicense && hasGoodVision );
console.log( hasDriversLicense || hasGoodVision );
console.log( !hasDriversLicense );

if( hasDriversLicense && hasGoodVision ) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}

const isTired = true;
console.log( hasDriversLicense || hasGoodVision || isTired );

if( hasDriversLicense && hasGoodVision && !isTired ) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}

////////////////////////////////////
// The switch Statement

const day = 'monday';

switch( day ) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false 

if( 23 > 10 ) {
  const str = '23 is bigger';
}

const you = 'Karim';
console.log(`I'm ${2025-2001} years old, ${you}`);
*/
////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 17;
age >= 18 ? console.log('You can drink wine 🍷') : console.log('You can drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(`You can drink ${drink}`);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
